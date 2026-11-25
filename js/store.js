import {firebaseConfig,firebaseReady} from './config.js';
import {initialState,cleanRoom} from './game.js';
export const mode = new URLSearchParams(location.search).get('mode')==='live'?'live':'demo';
const base='dgssi-escape-v1:';
const roomKey=r=>base+'room:'+r;
const getLocal=r=>JSON.parse(localStorage.getItem(roomKey(r))||'null');
const writeLocal=(r,x)=>{localStorage.setItem(roomKey(r),JSON.stringify(x));window.dispatchEvent(new Event('escape-update'));};
let sdk,auth,db,offset=0,connected=false;
let uid=sessionStorage.getItem(base+'uid');if(!uid){uid=crypto.randomUUID();sessionStorage.setItem(base+'uid',uid);}
export const now=()=>Date.now()+offset;
export const isConnected=()=>mode==='demo'||connected;
export async function init(){if(mode==='demo'||sdk)return;if(!firebaseReady)throw Error('Firebase non configuré. Consultez README.md ou utilisez le mode démo.');const appSdk=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js');const a=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js');const d=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js');const app=appSdk.initializeApp(firebaseConfig);auth=a.getAuth(app);await a.setPersistence(auth,a.browserSessionPersistence);await auth.authStateReady();db=d.getDatabase(app);sdk={...a,...d};d.onValue(d.ref(db,'.info/serverTimeOffset'),s=>offset=s.val()||0);d.onValue(d.ref(db,'.info/connected'),s=>connected=!!s.val());}
export async function studentAuth(){if(mode==='demo')return uid;if(!auth.currentUser)await sdk.signInAnonymously(auth);return auth.currentUser.uid;}
export async function adminAuth(email,password){if(mode==='demo')return 'demo-admin';if(email&&password)await sdk.signInWithEmailAndPassword(auth,email,password);if(!auth.currentUser||auth.currentUser.isAnonymous)throw Error('Connectez-vous avec le compte administrateur Firebase.');const user=auth.currentUser.uid;const snap=await sdk.get(sdk.ref(db,'admins/'+user));if(snap.val()!==true)throw Error('Compte non autorisé. Ajoutez son UID dans /admins via la console Firebase.');return user;}
export async function signOut(){if(mode==='live')await sdk.signOut(auth);}
const path=(r,p='')=>`rooms/${r}${p?'/'+p:''}`;
export async function createRoom(r){if(mode==='demo'){if(getLocal(r))throw Error('Ce code existe déjà.');writeLocal(r,{state:initialState(),players:{},answers:{},results:null});return;}await sdk.runTransaction(sdk.ref(db,path(r,'state')),old=>old===null?{...initialState(),updatedAt:now()}:undefined).then(x=>{if(!x.committed)throw Error('Ce code existe déjà.');});}
export async function roomExists(r){if(mode==='demo')return !!getLocal(r);return (await sdk.get(sdk.ref(db,path(r,'state')))).exists();}
export async function getPlayer(r,u){if(mode==='demo')return getLocal(r)?.players?.[u]||null;return (await sdk.get(sdk.ref(db,path(r,'players/'+u)))).val();}
export async function join(r,u,name){if(mode==='demo'){const x=getLocal(r);if(!x)throw Error('Salle introuvable.');if(x.players[u])return x.players[u];if(x.state.final)throw Error('Session terminée.');x.players[u]={name,joinedAt:now()};writeLocal(r,x);return x.players[u];}const old=await getPlayer(r,u);if(old)return old;const obj={name,joinedAt:sdk.serverTimestamp()};await sdk.set(sdk.ref(db,path(r,'players/'+u)),obj);return {name};}
export async function setState(r,state){const v={...state,updatedAt:now()};if(mode==='demo'){const x=getLocal(r);if(!x)throw Error('Salle introuvable.');x.state=v;writeLocal(r,x);return;}if(!connected)throw Error('Connexion Firebase perdue.');await sdk.set(sdk.ref(db,path(r,'state')),v);}
export async function submit(r,u,c,answer){if(mode==='demo'){const x=getLocal(r);if(!x?.players[u]||x.state.round!==c||x.state.phase!=='open'||x.state.deadline<=now())throw Error('Manche fermée ou délai dépassé.');x.answers[c]??={};if(x.answers[c][u])throw Error('Réponse déjà enregistrée.');x.answers[c][u]={answer,at:now()};writeLocal(r,x);return;}if(!connected)throw Error('Connexion perdue : réponse non envoyée.');await sdk.set(sdk.ref(db,path(r,`answers/${c}/${u}`)),{answer,at:sdk.serverTimestamp()});}
export function watch(r,p,cb,err=console.error){if(mode==='demo'){const read=()=>{let x=getLocal(r);for(const k of p.split('/').filter(Boolean))x=x?.[k];cb(x??null);};const listener=e=>{if(e.type==='escape-update'||e.key===roomKey(r))read();};window.addEventListener('storage',listener);window.addEventListener('escape-update',listener);read();return ()=>{window.removeEventListener('storage',listener);window.removeEventListener('escape-update',listener);};}return sdk.onValue(sdk.ref(db,path(r,p)),s=>cb(s.val()),err);}
export async function publish(r,results,state){if(mode==='demo'){const x=getLocal(r);x.results=results;x.state={...state,final:true,updatedAt:now()};writeLocal(r,x);return;}if(!connected)throw Error('Connexion perdue.');await sdk.update(sdk.ref(db,path(r)),{results,state:{...state,final:true,updatedAt:now()}});}
export const validRoom=r=>cleanRoom(r)===r&&r.length>=4&&r.length<=8;
export function randomRoom(){const b=crypto.getRandomValues(new Uint8Array(6));return [...b].map(x=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[x%32]).join('');}
export const currentRoom=()=>cleanRoom(new URLSearchParams(location.search).get('room'));
export const url=(page,room='')=>`${page}.html?mode=${mode}${room?'&room='+encodeURIComponent(room):''}`;
