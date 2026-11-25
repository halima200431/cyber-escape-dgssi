# The ScreenConnect Files

**DGSSI — Gouvernance, réglementation et cyberrésilience au Maroc**  
Projet académique interactif · ENSA Marrakech · 2026–2027

Une présentation web de 40 slides (45 min indicatives) liée à un Cyber Escape Game en quatre manches. Les étudiants jouent sur leur téléphone, le présentateur pilote la projection depuis l’admin et les réponses apparaissent en direct. Le coffre révèle la solution commentée d’une étude de cas inspirée de la campagne ScreenConnect de novembre 2026.

La campagne internationale et l’alerte rapportée au Maroc sont documentées ; **Hôpital Atlas et toutes ses données sont fictifs**. Projet indépendant, non affilié à la DGSSI. L'alerte 71001211/26 est rapportée par la presse ; le bulletin original n’a pas été consulté. Aucune victime marocaine n’est affirmée.

## Démarrage rapide : sans Firebase (mode démo)

Extraire le ZIP, ouvrir CMD dans le dossier `cyber-escape-dgssi`, puis lancer :

```cmd
py -3 -m http.server 8000 --bind 127.0.0.1
```

Ou double-cliquer sur `launch_demo.cmd`. Garder le terminal ouvert et accéder à `http://localhost:8000/`. Ne pas ouvrir les fichiers HTML directement par double-clic (les modules JavaScript nécessitent HTTP).

1. Accueil → **Tester le jeu local** → **Démarrer la démo** → Créer une salle.
2. Ouvrir la projection et le jeu via les liens générés. Ouvrir le jeu dans un nouvel onglet indépendant pour chaque équipe de test ; ne pas dupliquer un onglet déjà connecté (son identifiant pourrait être copié).
3. Inscrire des équipes fictives ; voir le compteur évoluer dans Admin.
4. Admin : sélectionner la slide 12, ouvrir la première manche, répondre dans les onglets étudiants. Clôturer, puis répéter aux slides 21, 28 et 35.
5. Slide 36 : ouvrir le coffre à l'aide du code de la fiche de correction. Le classement et les scores sont publiés, puis slides 37–40 pour le débriefing.

**Le mode démo partage les données via localStorage et les événements `storage`. Il fonctionne uniquement entre onglets du même navigateur, sur la même origine. Il ne synchronise pas plusieurs ordinateurs ou téléphones.** Il n’est pas sécurisé : ne pas l’utiliser avec de vraies données.

## Mode live : Firebase + GitHub Pages

GitHub Pages héberge des fichiers statiques ; il ne contient pas de serveur capable de gérer les réponses en temps réel. Le projet utilise Firebase Authentication et Realtime Database comme backend. Il faut créer votre propre projet Firebase avant la présentation. Aucun compte externe, secret ou identifiant réel n’est inclus dans le ZIP.

### 1. Créer Firebase

- Aller sur [Firebase Console](https://console.firebase.google.com/) → Add project → créer un projet, par exemple `cyber-escape-dgssi`. Analytics facultatif (désactiver si inutile).
- Dans Project overview, ajouter une application **Web**. Copier l’objet `firebaseConfig` dans `js/config.js` ; conserver les exports `firebaseConfig` et `firebaseReady`. La configuration web (API key publique, projectId, appId…) n’est pas un mot de passe admin. Ne jamais ajouter de compte de service ni de clé privée dans GitHub.
- Build → Authentication → Get started → Sign-in method : activer **Anonymous** et **Email/Password**. Dans Users, créer manuellement votre compte administrateur (email et mot de passe fort), puis copier son UID. Ne pas le communiquer aux étudiants.
- Build → Realtime Database → Create Database → choisir la région adaptée → **Locked mode**. Copier l'URL exacte de la base dans `databaseURL` de `js/config.js` (elle dépend de la région).
- Dans l’onglet **Rules**, remplacer les règles par le contenu de `database.rules.json`, puis Publish. Ne jamais utiliser des règles ouvertes (`.read: true`, `.write: true`).
- Dans Realtime Database → Data, ajouter manuellement à la racine un nœud `admins`, puis un enfant portant l'UID exact de l'administrateur, avec la valeur booléenne `true` (pas la chaîne `"true"`). La structure est `admins/<UID>: true`. Cette opération via la console est volontairement hors de portée de l’application.
- Authentication → Settings → Authorized domains : ajouter `<votre-pseudo>.github.io`. Pour les essais locaux, ajouter `localhost` si nécessaire. Les projets récents ne l’incluent pas toujours par défaut.
- Vérifier le plan et les quotas Firebase (Spark peut suffire pour une petite classe, sans garantie selon les limites actuelles et votre usage). N'activer aucune facturation sans vérifier les conditions.

### 2. Personnaliser

Modifier `js/settings.js` : noms des quatre présentateurs, professeur, module, filière, année. La palette est définie dans `assets/style.css`. Le contenu de la présentation est dans `js/slides.js` ; les questions dans `js/game.js`. La bibliographie est dans `js/sources.js`.

### 3. Pusher sur GitHub (Windows CMD)

Créer un dépôt vide sur GitHub nommé `cyber-escape-dgssi`. Ne pas ajouter de README ou de licence à l'initialisation si vous partez des fichiers du ZIP. Dans le dossier extrait :

```cmd
git init
git add .
git commit -m "Initial release - DGSSI Cyber Escape Game"
git branch -M main
git remote add origin https://github.com/VOTRE_PSEUDO/cyber-escape-dgssi.git
git push -u origin main
```

Si Git demande une authentification, utiliser Git Credential Manager ou le mode de connexion GitHub prévu. Ne pas stocker un token dans le dépôt.

### 4. Déployer GitHub Pages

Dans le dépôt GitHub → **Settings → Pages → Build and deployment → Source : GitHub Actions**. Le workflow `.github/workflows/pages.yml` lance les tests Node puis déploie le site. Dans Actions, vérifier le workflow. Ouvrir l’URL indiquée par Pages, généralement `https://VOTRE_PSEUDO.github.io/cyber-escape-dgssi/`. Tous les liens sont relatifs, donc compatibles avec un dépôt de projet.

Alternative : sélectionner Deploy from a branch → `main` / `/ (root)` ; dans ce cas, désactiver le workflow Actions pour éviter deux modes de déploiement. Le fichier `.nojekyll` est fourni.

Pour les modifications suivantes : `git add .`, `git commit -m "Update presentation"`, `git push`.

### 5. Répétition live (deux appareils)

- Depuis le PC, ouvrir `admin.html?mode=live` sur le site, se connecter avec le compte Firebase autorisé, créer une salle unique. Copier le lien étudiant généré.
- Ouvrir la projection sur un autre écran ou onglet ; **ne pas projeter le tableau de bord Admin** (il contient les corrections et les réponses brutes).
- Depuis un téléphone connecté à Internet, ouvrir le lien étudiant. Saisir un pseudonyme de 2 à 30 caractères. Une personne / un téléphone par équipe.
- Vérifier la présence du nom dans le classement Admin, ouvrir une manche et envoyer une réponse. Vérifier la synchronisation sur les trois interfaces et tester au moins deux équipes. Le temps est contrôlé par l'admin et les règles Firebase à l’heure serveur.
- Pour une nouvelle présentation, créer une **nouvelle salle**. Les anciennes ne sont pas réutilisées ; supprimer celles dont vous n'avez plus besoin dans la console Firebase.

Voir [docs/VALIDATION.md](docs/VALIDATION.md) pour la checklist de validation et [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) pour les règles de sécurité et les limites.

## Interfaces

| Page | Fonction |
|---|---|
| `index.html` | Accueil, accès aux trois interfaces |
| `presentation.html` | 40 slides ; mode répétition autonome avec notes, ou projection synchronisée depuis Admin |
| `play.html` | Inscription équipe, questions, choix, puzzle, chronomètre, accusé réception et score final |
| `admin.html` | Authentification, sessions, navigation, ouverture/clôture des manches, KPIs, scores, export CSV, publication du classement |
| `dossier.html` | Analyse DNSSI, matrice, étude de cas corrigée, fiches de mission, pancartes et cartes imprimables |

## Architecture et sécurité

```text
GitHub Pages (site statique, HTML/CSS/JavaScript)
  ├─ Admin → Firebase Auth email/mot de passe + UID autorisé
  ├─ Projection → lecture état public de la salle
  └─ Étudiants → Auth anonyme, réponses propres uniquement
                │
                ▼
 Firebase Realtime Database
  /admins/{uid}                 allowlist gérée en console
  /rooms/{code}/state           état de la présentation et de la manche
  /rooms/{code}/players/{uid}   pseudonyme / inscription
  /rooms/{code}/answers/{c}/{uid} réponse append-only et horodatage
  /rooms/{code}/results         classement publié après ouverture
```

Les règles refusent par défaut, interdisent aux participants de modifier l'état et les réponses des autres équipes, contrôlent la fenêtre temporelle côté serveur, et empêchent l'écrasement d'une réponse. Les valeurs de réponse sont validées par type et bornes ; le score est calculé par l'admin. Les champs administratifs ne sont pas publics. Les entrées affichées sont échappées, les cellules CSV sont protégées contre les formules. Les identifiants anonymes et les pseudonymes ne sont pas une authentification d'identité étudiante.

**Limite importante :** comme tout site statique GitHub Pages, le JavaScript, les questions, les réponses attendues et le dossier corrigé peuvent être lus dans le code source public. Ce jeu est conçu pour une activité pédagogique de confiance, pas pour un examen anti-triche. Pour un concours noté, déplacer le corrigé et le calcul du score vers un backend non public (Cloud Functions ou autre), avec contrôle d’inscription et protections anti-abus. L’admin reste protégé par Auth et les règles côté base, mais le secret du code de jeu ne l’est pas. Ne jamais utiliser de données d’incident réelles ou de patients. Les codes de salle ne sont pas des secrets cryptographiques ; privilégier les pseudonymes et un code aléatoire. Le mode live requiert Internet et les CDN Firebase. La démo locale reste disponible si la connexion est indisponible, mais pas de synchronisation entre appareils.

## Contenus et livrables

- [Analyse approfondie DNSSI et atelier intégré](dossier.html) — version HTML imprimable (dans le navigateur, Ctrl+P → PDF si le professeur le demande).
- [Guide des quatre présentateurs](docs/PRESENTATEURS.md)
- [Architecture, sécurité et exploitation](docs/ARCHITECTURE.md)
- [Checklist de validation](docs/VALIDATION.md)
- [Bibliographie détaillée](docs/SOURCES.md)

## Tests

```cmd
npm test
```

Aucune dépendance npm requise. Le test vérifie notamment les 40 slides, le minutage, les références, les réponses, le code final, le classement, la validation des entrées et une session locale complète à deux équipes. Les tests Firebase live doivent être effectués dans votre projet après configuration. Le test navigateur facultatif : `pip install playwright`, `playwright install chromium`, `python tests/browser_demo.py`. Voir le bilan de validation dans la documentation.
