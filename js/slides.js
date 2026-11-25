export const slides = [
 {
  "part": 0,
  "title": "DGSSI",
  "kicker": "Gouvernance, réglementation et cyberrésilience au Maroc",
  "items": [
   {
    "h": "The ScreenConnect Files",
    "t": "Cyber Escape Game · Novembre 2026"
   }
  ],
  "notes": "Présenter les quatre axes et annoncer une présentation participative. Noms, module et professeur à compléter dans js/settings.js.",
  "refs": [],
  "kind": "cover",
  "duration": 35
 },
 {
  "part": 0,
  "title": "90 minutes",
  "kicker": "Un accès de confiance peut devenir un risque systémique.",
  "items": [
   {
    "h": "6+",
    "t": "MSP compromis selon les investigations et les comptes rendus"
   },
   {
    "h": "288+",
    "t": "Postes affectés observés par Huntress"
   },
   {
    "h": "48",
    "t": "Organisations clientes observées"
   },
   {
    "h": "90 min",
    "t": "Fenêtre initiale de propagation rapportée"
   }
  ],
  "notes": "Ces chiffres correspondent à un périmètre d’observation international, pas au nombre de victimes marocaines. L’alerte marocaine est rapportée par la presse le 12 novembre ; le bulletin original n’a pas été consulté. Ne pas confondre alerte et compromission locale.",
  "refs": [
   "huntress",
   "alert",
   "hespress"
  ],
  "kind": "stats",
  "duration": 60
 },
 {
  "part": 0,
  "title": "Votre mission",
  "kicker": "Quatre clés. Un dossier. Une seule équipe gagnante.",
  "items": [
   {
    "h": "01 · Gouvernance",
    "t": "Mission Impossible"
   },
   {
    "h": "02 · Réglementation",
    "t": "Cyber Detective"
   },
   {
    "h": "03 · Résilience",
    "t": "Cyber Reflex"
   },
   {
    "h": "04 · Réponse",
    "t": "CERT Puzzle"
   }
  ],
  "notes": "Former des équipes de 3 à 5. Une seule personne utilise son téléphone par équipe. Ouvrir le lien étudiant, saisir le code de salle et un pseudonyme. Chaque réponse est définitive. Le score vaut 25 points par manche ; égalités départagées par l’heure de dernière réponse puis le nom. Ne pas afficher le code final.",
  "refs": [],
  "kind": "mission",
  "duration": 60
 },
 {
  "part": 0,
  "title": "The ScreenConnect Files",
  "kicker": "Distinguer faits, hypothèse technique et cas simulé.",
  "items": [
   {
    "h": "11 novembre",
    "t": "Huntress observe une campagne sur des consoles cloud ScreenConnect."
   },
   {
    "h": "12 novembre",
    "t": "Alerte critique DGSSI rapportée par la presse, réf. 71001211/26."
   },
   {
    "h": "Analyse",
    "t": "Une faiblesse RMM+ est une piste d’investigation ; ne pas affirmer que l’infrastructure de l’éditeur a été compromise."
   },
   {
    "h": "Périmètre",
    "t": "La présence de victimes marocaines n’est pas établie."
   }
  ],
  "notes": "Un MSP gère les systèmes de clients ; un RMM est un outil de supervision et télémaintenance. La relation de confiance amplifie le risque. Des clients d’accès distant non autorisés ont été observés. La chronologie distingue les sources et les incertitudes.",
  "refs": [
   "huntress",
   "alert",
   "hespress",
   "vendor"
  ],
  "kind": "timeline",
  "duration": 65
 },
 {
  "part": 0,
  "title": "Hôpital Atlas",
  "kicker": "Dossier fictif · données créées pour l’exercice.",
  "items": [
   {
    "h": "120 / 12",
    "t": "Postes / serveurs"
   },
   {
    "h": "20 / 8",
    "t": "Postes télémaintenus / postes suspects"
   },
   {
    "h": "4 h / 2 h",
    "t": "RTO / RPO cibles des admissions"
   },
   {
    "h": "Contrat MSP",
    "t": "Clauses de sécurité insuffisantes ; EDR présent, supervision partielle."
   }
  ],
  "notes": "L’établissement public fictif externalise une partie de sa maintenance. On suppose que le SI des admissions est sensible pour discuter des articles 10 à 12 ; cette hypothèse n’est pas une désignation officielle IIV. Les quatre questions du dossier seront résolues progressivement.",
  "refs": [],
  "kind": "stats",
  "duration": 50
 },
 {
  "part": 1,
  "title": "Qui est la DGSSI ?",
  "kicker": "L’autorité nationale de cybersécurité dans l’écosystème marocain.",
  "items": [
   {
    "h": "Création",
    "t": "Décret du 21 septembre 2011 portant création de la DGSSI."
   },
   {
    "h": "Rattachement",
    "t": "Administration de la Défense nationale."
   },
   {
    "h": "Mission",
    "t": "Renforcer la sécurité et la résilience des systèmes d’information."
   },
   {
    "h": "Périmètre",
    "t": "Les responsabilités varient selon les entités et le cadre applicable."
   }
  ],
  "notes": "Développer le sigle Direction générale de la sécurité des systèmes d’information. Expliquer le rôle institutionnel : elle n’est pas le service informatique de toutes les organisations. Indice de jeu : coordonner n’est pas restaurer tous les serveurs.",
  "refs": [
   "dgssi",
   "decree",
   "law"
  ],
  "kind": "cards",
  "duration": 55
 },
 {
  "part": 1,
  "title": "De la stratégie à l’action",
  "kicker": "Les fonctions de l’autorité nationale.",
  "items": [
   {
    "h": "Orienter",
    "t": "Stratégie, référentiels et directives."
   },
   {
    "h": "Accompagner",
    "t": "Guides, sensibilisation et montée en maturité."
   },
   {
    "h": "Contrôler",
    "t": "Audits et suivi de conformité selon le cadre applicable."
   },
   {
    "h": "Coordonner",
    "t": "Veille et réponse avec les acteurs concernés."
   }
  ],
  "notes": "Expliquer que les équipes internes restent responsables des opérations. La DGSSI publie des références et des recommandations, qui n’ont pas toutes la même portée juridique.",
  "refs": [
   "dgssi",
   "law",
   "dnssi"
  ],
  "kind": "cards",
  "duration": 55
 },
 {
  "part": 1,
  "title": "Qui fait quoi ?",
  "kicker": "Une chaîne de responsabilités, pas un acteur unique.",
  "items": [
   {
    "h": "DGSSI / maCERT",
    "t": "Cadre national, veille, coordination et assistance."
   },
   {
    "h": "Direction / RSSI",
    "t": "Arbitrage, risque, politique et notification."
   },
   {
    "h": "SOC / DSI",
    "t": "Surveillance, confinement, exploitation et reprise."
   },
   {
    "h": "MSP",
    "t": "Exécution contractuelle et coopération avec son client."
   }
  ],
  "notes": "Illustrer par l’alerte ScreenConnect : le maCERT diffuse une alerte, le RSSI vérifie son exposition, le SOC analyse les signaux, le MSP fournit ses éléments. Un comité stratégique et les mécanismes de crise nationale ne sont pas des SOC.",
  "refs": [
   "law",
   "dnssi",
   "macert"
  ],
  "kind": "flow",
  "duration": 65
 },
 {
  "part": 1,
  "title": "Infrastructures d’importance vitale",
  "kicker": "Une protection proportionnée à la sensibilité.",
  "items": [
   {
    "h": "IIV",
    "t": "Désignation par l’autorité sectorielle après avis de l’autorité nationale (art. 16)."
   },
   {
    "h": "SI sensibles",
    "t": "Classification et protection renforcée ; homologation selon l’art. 19."
   },
   {
    "h": "Services essentiels",
    "t": "Santé, énergie, transport : exemples de secteurs, pas une liste de victimes."
   },
   {
    "h": "Atlas",
    "t": "Hôpital fictif public ; son classement IIV n’est pas supposé."
   }
  ],
  "notes": "Expliquer que le caractère critique d’un service ne suffit pas à affirmer un classement IIV. Les données sensibles font l’objet de dispositions spécifiques.",
  "refs": [
   "law"
  ],
  "kind": "cards",
  "duration": 55
 },
 {
  "part": 1,
  "title": "Horizon 2030",
  "kicker": "Quatre piliers stratégiques officiels.",
  "items": [
   {
    "h": "01",
    "t": "Gouvernance nationale et cadre institutionnel et juridique"
   },
   {
    "h": "02",
    "t": "Sécurité et résilience du cyberespace national"
   },
   {
    "h": "03",
    "t": "Développement des capacités et sensibilisation"
   },
   {
    "h": "04",
    "t": "Coopération régionale et internationale"
   }
  ],
  "notes": "Relier le premier pilier à la réglementation, le deuxième à la continuité, le troisième aux compétences SOC/CERT et le quatrième aux alertes transfrontalières.",
  "refs": [
   "dgssi"
  ],
  "kind": "pillars",
  "duration": 55
 },
 {
  "part": 1,
  "title": "Dossier Atlas · Indice 01",
  "kicker": "Le prestataire est compromis : qui porte le risque ?",
  "items": [
   {
    "h": "Direction",
    "t": "Décide des priorités et mobilise les moyens."
   },
   {
    "h": "RSSI",
    "t": "Analyse l’exposition et coordonne le traitement."
   },
   {
    "h": "MSP",
    "t": "Fournit les journaux, sécurise ses accès et coopère."
   },
   {
    "h": "maCERT",
    "t": "Alerte et accompagne selon ses missions."
   }
  ],
  "notes": "Demander au public si l’hôpital peut transférer toute sa responsabilité au MSP. Réponse : non ; il doit maîtriser le risque, les accès et les exigences contractuelles. Indice : la DGSSI ne remplace pas systématiquement les équipes internes.",
  "refs": [
   "law",
   "dnssi"
  ],
  "kind": "case",
  "duration": 55
 },
 {
  "part": 1,
  "title": "Mission Impossible",
  "kicker": "Trouvez l’intrus et récupérez votre premier chiffre.",
  "items": [],
  "notes": "Ouvrir la manche depuis Admin. Laisser 45 secondes. Collecter avant correction. Ne pas annoncer le chiffre. Explication : la DGSSI ne restaure pas systématiquement les serveurs de chaque entité. Fermer la manche puis avancer.",
  "refs": [],
  "kind": "challenge",
  "challenge": "c1",
  "duration": 65
 },
 {
  "part": 2,
  "title": "Du droit à la mise en œuvre",
  "kicker": "Une chronologie du cadre marocain.",
  "items": [
   {
    "h": "2011",
    "t": "Création de la DGSSI"
   },
   {
    "h": "2014",
    "t": "Première DNSSI, circulaire 3/2014"
   },
   {
    "h": "2020",
    "t": "Loi 05-20 relative à la cybersécurité"
   },
   {
    "h": "2021",
    "t": "Décret 2-21-406"
   },
   {
    "h": "2023",
    "t": "DNSSI actualisée"
   },
   {
    "h": "2024",
    "t": "Publication de la stratégie 2030 et guide PCA/PRA"
   }
  ],
  "notes": "Distinguer la loi, le décret et les référentiels. Ne pas attribuer à ISO une valeur juridique nationale automatique.",
  "refs": [
   "law",
   "decree",
   "dnssi",
   "dgssi",
   "guide"
  ],
  "kind": "timeline",
  "duration": 50
 },
 {
  "part": 2,
  "title": "Loi 05-20",
  "kicker": "Les obligations au-delà de la simple technique.",
  "items": [
   {
    "h": "Art. 3–6",
    "t": "Conformité, politique SSI, analyse des risques, classification et RSSI."
   },
   {
    "h": "Art. 7–8",
    "t": "Supervision et déclaration des incidents par les entités."
   },
   {
    "h": "Art. 9",
    "t": "Plan de continuité ou de reprise testé régulièrement."
   },
   {
    "h": "Art. 10–13",
    "t": "Externalisation des SI sensibles, hébergement des données sensibles et garanties contractuelles."
   }
  ],
  "notes": "Citer précisément les articles. Pour les entités, l’article 8 impose la déclaration à l’autorité nationale dès connaissance d’un incident ; ne pas attendre une preuve complète. L’art. 11 concerne les données sensibles. L’art. 14 étend les dispositions de la section aux IIV.",
  "refs": [
   "law"
  ],
  "kind": "cards",
  "duration": 65
 },
 {
  "part": 2,
  "title": "Décret 2-21-406",
  "kicker": "Le lien entre cadre législatif et application.",
  "items": [
   {
    "h": "Loi",
    "t": "Définit les obligations et le périmètre."
   },
   {
    "h": "Décret",
    "t": "Précise les modalités d’application."
   },
   {
    "h": "DNSSI",
    "t": "Règles de sécurité organisationnelles et techniques ; mise à jour en application de l’art. 9 du décret."
   },
   {
    "h": "Guides",
    "t": "Appui à la mise en œuvre, selon leur portée."
   }
  ],
  "notes": "Éviter une pyramide qui assimilerait tous les guides à des textes législatifs. L’audit qualifié s’applique dans les cas prévus, pas à tous les MSP.",
  "refs": [
   "decree",
   "dnssi",
   "passi"
  ],
  "kind": "flow",
  "duration": 50
 },
 {
  "part": 2,
  "title": "DNSSI · Anatomie du référentiel",
  "kicker": "Analyse approfondie · version 2023.",
  "items": [
   {
    "h": "Gouvernance",
    "t": "Politique SSI, organisation, RH, actifs."
   },
   {
    "h": "Protection",
    "t": "Accès, cryptographie, sécurité physique, exploitation."
   },
   {
    "h": "Architecture",
    "t": "Communications, développement et maintenance, fournisseurs."
   },
   {
    "h": "Résilience",
    "t": "Incidents, continuité, conformité."
   }
  ],
  "notes": "La directive comporte 14 chapitres thématiques ; ce regroupement en quatre familles est une synthèse pédagogique, non la structure officielle. Périmètre : entités publiques et IIV publiques/privées, y compris les tiers intervenant sur leurs SI. Les écarts doivent être motivés. Le bilan de conformité est annuel (préambule pp. 5–6).",
  "refs": [
   "dnssi"
  ],
  "kind": "cards",
  "duration": 65
 },
 {
  "part": 2,
  "title": "DNSSI · Accès privilégiés",
  "kicker": "Le contrôle doit être démontrable.",
  "items": [
   {
    "h": "ACC-EXIG-POL · p.13",
    "t": "Politique d’accès et principe du moindre privilège."
   },
   {
    "h": "ACC-SYS/APP-PRIVIL · p.14",
    "t": "Accès aux outils d’administration réservé aux habilités ; inventaire des comptes."
   },
   {
    "h": "Atlas · Écart à vérifier",
    "t": "Droits distants excessifs et supervision partielle."
   },
   {
    "h": "Preuves attendues",
    "t": "Matrice d’habilitations, comptes nominatifs, revues et journaux."
   }
  ],
  "notes": "Le MFA robuste et le bastion sont des moyens techniques proposés ; le texte prescrit des restrictions adaptées et une gestion des accès privilégiés. Demander aux étudiants quel document prouve les droits accordés.",
  "refs": [
   "dnssi"
  ],
  "kind": "case",
  "duration": 75
 },
 {
  "part": 2,
  "title": "DNSSI · Risque fournisseur",
  "kicker": "Le contrat est un contrôle de sécurité.",
  "items": [
   {
    "h": "FOURNIS-REL-RISQ · p.26",
    "t": "Identifier les risques des interventions fournisseurs."
   },
   {
    "h": "FOURNIS-REL-EXIG · p.26",
    "t": "Formaliser les attentes de sécurité et de service ; auditabilité et réversibilité selon le cadre."
   },
   {
    "h": "FOURNIS-GEST-SURVEIL · p.26",
    "t": "Surveiller et auditer périodiquement les prestations."
   },
   {
    "h": "Atlas · Preuves",
    "t": "Registre des risques, avenant, SLA, comptes rendus de revue."
   }
  ],
  "notes": "Appliquer aux extensions tierces : inventaire, validation, retrait et surveillance des changements. L’art. 12 de la loi impose des engagements contractuels pour l’externalisation d’un SI sensible. Ne pas confondre MSP et PASSI.",
  "refs": [
   "dnssi",
   "law"
  ],
  "kind": "case",
  "duration": 75
 },
 {
  "part": 2,
  "title": "Matrice de conformité · Atlas",
  "kicker": "Analyse d’écarts simulée, pas un audit officiel.",
  "items": [
   {
    "h": "Accès · partiel",
    "t": "ACC-SYS/APP-PRIVIL → revue des droits · preuve : matrice signée."
   },
   {
    "h": "Contrat · non conforme au scénario",
    "t": "FOURNIS-REL-EXIG → avenant sécurité · preuve : contrat validé."
   },
   {
    "h": "Surveillance · partielle",
    "t": "EXP-JOURN/SURV-PRIVIL → journaux nominatifs · preuve : traces."
   },
   {
    "h": "Reprise · non évaluée",
    "t": "CONTINU-PLAN → test de restauration · preuve : rapport de test."
   }
  ],
  "notes": "Méthode : identifier l’exigence, collecter une preuve, comparer, coter et prioriser. Sans preuve, ne pas déclarer une non-conformité certaine. Ce tableau utilise les hypothèses du cas et une cotation pédagogique ; ne pas calculer un score officiel.",
  "refs": [
   "dnssi"
  ],
  "kind": "matrix",
  "duration": 85
 },
 {
  "part": 2,
  "title": "La conformité n’est pas une garantie",
  "kicker": "Analyse critique et complémentarité.",
  "items": [
   {
    "h": "Apports",
    "t": "Socle commun national, responsabilités, preuves et suivi."
   },
   {
    "h": "Limites",
    "t": "Ressources, SI hérités, dépendance fournisseurs et conformité documentaire."
   },
   {
    "h": "ISO/IEC 27001",
    "t": "Management de la sécurité ; complément, non substitut à la réglementation."
   },
   {
    "h": "Loi 09-08",
    "t": "Protection des données personnelles ; compétence CNDP distincte."
   }
  ],
  "notes": "La DNSSI fixe un minimum applicable à son périmètre. ISO 27001 fournit un SMSI, ISO 22301 concerne le management de continuité. Des contrôles doivent être testés. Ne pas promettre qu’une certification empêche une attaque.",
  "refs": [
   "dnssi",
   "iso",
   "iso22301",
   "cndp"
  ],
  "kind": "cards",
  "duration": 55
 },
 {
  "part": 2,
  "title": "Cyber Detective",
  "kicker": "Associez les textes à leurs rôles.",
  "items": [],
  "notes": "Ouvrir la manche 60 secondes. Les joueurs associent réellement les trois documents via des sélecteurs. Correction : loi → texte législatif ; décret → modalités ; DNSSI → mesures. Les chiffres sont calculés à partir des combinaisons sans afficher le résultat collectif.",
  "refs": [],
  "kind": "challenge",
  "challenge": "c2",
  "duration": 80
 },
 {
  "part": 3,
  "title": "Dossier Atlas · Indice 03",
  "kicker": "Simulation : les admissions risquent de s’interrompre.",
  "items": [
   {
    "h": "Nouveau signal",
    "t": "8 postes suspects ; restriction des accès MSP."
   },
   {
    "h": "Priorité",
    "t": "Sécuriser sans interrompre inutilement les soins."
   },
   {
    "h": "Question",
    "t": "Comment continuer à accueillir les patients ?"
   }
  ],
  "notes": "Les événements sont fictifs. Demander une solution de continuité en 15 secondes. Distinguer les actions immédiates pour les patients des actions de reconstruction technique.",
  "refs": [],
  "kind": "case",
  "duration": 45
 },
 {
  "part": 3,
  "title": "PCA ≠ PRA",
  "kicker": "Maintenir l’activité puis restaurer les systèmes.",
  "items": [
   {
    "h": "PCA",
    "t": "Continuer les activités essentielles, éventuellement en mode dégradé."
   },
   {
    "h": "PRA",
    "t": "Remettre en service les systèmes et données de manière maîtrisée."
   },
   {
    "h": "Articulation",
    "t": "Le PCA limite l’impact ; le PRA soutient le retour à la normale."
   }
  ],
  "notes": "Expliquer que les deux démarches peuvent se dérouler en parallèle. Les définitions sont pédagogiques ; les plans doivent être coordonnés, testés et maintenus.",
  "refs": [
   "law",
   "guide",
   "dnssi"
  ],
  "kind": "continuity",
  "duration": 60
 },
 {
  "part": 3,
  "title": "Continuité · exigences DNSSI",
  "kicker": "Du BIA aux exercices.",
  "items": [
   {
    "h": "CONTINU-BIA · p.29",
    "t": "Identifier processus critiques, dépendances et impacts."
   },
   {
    "h": "CONTINU-ACT · p.29",
    "t": "Préparer les solutions de secours et les responsabilités."
   },
   {
    "h": "CONTINU-PLAN · p.29",
    "t": "Mettre en œuvre un plan de test technique annuel."
   },
   {
    "h": "CONTINU-EXERCICE · p.29",
    "t": "Organiser régulièrement des exercices de crise."
   }
  ],
  "notes": "Citer aussi l’article 9 : test régulier du plan. Distinguer un test technique annuel et un exercice de crise régulier. Les dépendances fournisseur sont explicitement à considérer dans le BIA.",
  "refs": [
   "dnssi",
   "law",
   "guide"
  ],
  "kind": "cards",
  "duration": 65
 },
 {
  "part": 3,
  "title": "BIA · RTO · RPO",
  "kicker": "Deux objectifs temporels à ne pas confondre.",
  "items": [
   {
    "h": "BIA",
    "t": "Analyse des conséquences métier d’une interruption."
   },
   {
    "h": "RTO = 4 h",
    "t": "Objectif de délai de rétablissement des admissions."
   },
   {
    "h": "RPO = 2 h",
    "t": "Objectif de perte maximale de données exprimée en temps."
   },
   {
    "h": "Exemple",
    "t": "Sauvegarde saine 08:00 ; incident 09:30 ; perte potentielle 1 h 30. Reprise cible avant 13:30."
   }
  ],
  "notes": "Les valeurs sont fictives. Une sauvegarde toutes les deux heures ne garantit pas le RPO si elle est corrompue ou incomplète. Le délai de reprise doit être mesuré lors d’un test.",
  "refs": [
   "guide",
   "dnssi"
  ],
  "kind": "rto",
  "duration": 75
 },
 {
  "part": 3,
  "title": "Plan de continuité et reprise",
  "kicker": "Application commentée à l’hôpital.",
  "items": [
   {
    "h": "PCA immédiat",
    "t": "Admissions papier sécurisées, priorisation des urgences, communication."
   },
   {
    "h": "PRA",
    "t": "Vérifier la sauvegarde, restaurer en environnement isolé, tester puis réintégrer."
   },
   {
    "h": "Réconciliation",
    "t": "Réintégrer les données du mode dégradé après contrôle."
   },
   {
    "h": "Validation",
    "t": "RSSI + DSI + métier valident la reprise avant retour nominal."
   }
  ],
  "notes": "La protection des données reste nécessaire en mode papier. Ne pas restaurer dans un réseau encore compromis. La reprise ne doit pas écraser les nouvelles données collectées pendant la crise.",
  "refs": [
   "guide",
   "dnssi"
  ],
  "kind": "flow",
  "duration": 75
 },
 {
  "part": 3,
  "title": "Architecture de résilience",
  "kicker": "Réduire l’étendue d’une compromission.",
  "items": [
   {
    "h": "Avant",
    "t": "Console MSP → accès large → postes et serveurs peu cloisonnés."
   },
   {
    "h": "Après",
    "t": "Accès nominatif → bastion → segments autorisés."
   },
   {
    "h": "Surveillance",
    "t": "Journaux centralisés et EDR sur les actifs pertinents."
   },
   {
    "h": "Reprise",
    "t": "Sauvegardes isolées et environnement de restauration contrôlé."
   }
  ],
  "notes": "Proposition d’architecture, pas prescription universelle. Le bastion limite le chemin d’administration, le cloisonnement limite le rayon d’impact, les sauvegardes isolées aident la reprise. Tester la restauration et les dépendances.",
  "refs": [
   "dnssi",
   "guide"
  ],
  "kind": "architecture",
  "duration": 60
 },
 {
  "part": 3,
  "title": "Cyber Reflex",
  "kicker": "PCA ou PRA ? Quatre réflexes, un chiffre.",
  "items": [],
  "notes": "Ouvrir pendant 60 secondes. Les équipes sélectionnent PCA ou PRA pour chacune des quatre actions ; inviter à lever les pancartes en même temps si souhaité. Correction : PCA, PRA, PCA, PRA. Le chiffre reste secret.",
  "refs": [],
  "kind": "challenge",
  "challenge": "c3",
  "duration": 80
 },
 {
  "part": 4,
  "title": "CERT et CSIRT",
  "kicker": "Une capacité de réponse organisée.",
  "items": [
   {
    "h": "CERT",
    "t": "Computer Emergency Response Team."
   },
   {
    "h": "CSIRT",
    "t": "Computer Security Incident Response Team."
   },
   {
    "h": "Avant",
    "t": "Veille, préparation, alertes et coordination."
   },
   {
    "h": "Pendant / après",
    "t": "Analyse, assistance, réponse, retour d’expérience."
   }
  ],
  "notes": "Les appellations CERT et CSIRT se recoupent et ne déterminent pas à elles seules le périmètre. Un CERT n’est pas nécessairement une équipe de surveillance 24/7.",
  "refs": [
   "macert",
   "nist"
  ],
  "kind": "cards",
  "duration": 50
 },
 {
  "part": 4,
  "title": "maCERT · L’alerte nationale",
  "kicker": "De l’observation à l’action locale.",
  "items": [
   {
    "h": "Veille",
    "t": "Identifier et communiquer les menaces pertinentes."
   },
   {
    "h": "Alerte",
    "t": "Diffuser des recommandations aux organismes."
   },
   {
    "h": "Assistance",
    "t": "Appuyer et coordonner la gestion selon ses missions."
   },
   {
    "h": "Atlas",
    "t": "Vérifier l’exposition, accuser réception et rendre compte si impacté."
   }
  ],
  "notes": "DNSSI INCID-GEST-ALERT p.27 : accusé de réception d’une alerte maCERT et compte rendu si impacté. L’article 8 s’applique à la déclaration des incidents des entités. Le bulletin 71001211/26 est rapporté par la presse, pas directement consulté.",
  "refs": [
   "dnssi",
   "law",
   "macert",
   "alert"
  ],
  "kind": "cards",
  "duration": 60
 },
 {
  "part": 4,
  "title": "SOC, CERT et CSIRT",
  "kicker": "Des fonctions complémentaires.",
  "items": [
   {
    "h": "SOC",
    "t": "Surveillance continue, triage des alertes, détection."
   },
   {
    "h": "CERT / CSIRT",
    "t": "Coordination et traitement d’incidents, analyse et assistance."
   },
   {
    "h": "DSI",
    "t": "Exploitation, changements techniques, restauration."
   },
   {
    "h": "RSSI",
    "t": "Gestion des risques, arbitrage sécurité et coordination interne."
   }
  ],
  "notes": "Les responsabilités réelles dépendent de l’organisation. Un SOC peut avoir des capacités de réponse. Illustrer la remontée SOC → RSSI/CSIRT, puis actions DSI.",
  "refs": [
   "nist"
  ],
  "kind": "matrix",
  "duration": 55
 },
 {
  "part": 4,
  "title": "Le cycle de réponse",
  "kicker": "Six étapes pour comprendre, pas une séquence rigide.",
  "items": [
   {
    "h": "Préparation",
    "t": "Rôles, outils et procédures."
   },
   {
    "h": "Détection / analyse",
    "t": "Qualifier les événements et le périmètre."
   },
   {
    "h": "Confinement",
    "t": "Limiter l’impact."
   },
   {
    "h": "Éradication",
    "t": "Retirer les éléments malveillants."
   },
   {
    "h": "Rétablissement",
    "t": "Restaurer et valider."
   },
   {
    "h": "Retour d’expérience",
    "t": "Corriger les causes et améliorer."
   }
  ],
  "notes": "Adaptation pédagogique du modèle historique NIST SP 800-61 Rev.2 (retiré). La Rev.3 (2025) intègre la réponse dans le CSF 2.0 ; les étapes ne sont pas strictement séquentielles. La DNSSI couvre signalement, qualification, réponse et preuves.",
  "refs": [
   "oldnist",
   "nist",
   "dnssi"
  ],
  "kind": "timeline",
  "duration": 65
 },
 {
  "part": 4,
  "title": "ScreenConnect · chaîne de confiance",
  "kicker": "Vue défensive de la campagne.",
  "items": [
   {
    "h": "Console MSP",
    "t": "Accès privilégié à la télémaintenance."
   },
   {
    "h": "Extension tierce",
    "t": "Piste de faiblesse d’authentification RMM+."
   },
   {
    "h": "Clients",
    "t": "Déploiement de clients distants non autorisés observé."
   },
   {
    "h": "Détection",
    "t": "Journalisation des opérations MSP, inventaire et alertes EDR."
   }
  ],
  "notes": "Ne pas expliquer comment exploiter la faiblesse. Huntress a observé des installations non autorisées et des risques de persistance. Le vecteur précis n’est pas à présenter comme une certitude universelle. Séparer les faits internationaux et le scénario Atlas.",
  "refs": [
   "huntress",
   "vendor",
   "alert"
  ],
  "kind": "architecture",
  "duration": 65
 },
 {
  "part": 4,
  "title": "Dossier Atlas · Indice 04",
  "kicker": "Coordonner, signaler, préserver les preuves.",
  "items": [
   {
    "h": "Qualifier",
    "t": "Identifier comptes, postes, services et impact."
   },
   {
    "h": "Contenir",
    "t": "Limiter les accès suspects sans compromettre les soins."
   },
   {
    "h": "Préserver",
    "t": "Exporter les journaux, protéger l’intégrité et documenter."
   },
   {
    "h": "Notifier",
    "t": "Déclarer l’incident à l’autorité nationale selon le cadre applicable."
   }
  ],
  "notes": "DNSSI INCID-GEST-SIGNAL, QUALIF, REPONSE (p.27) et PREUV (p.28). L’article 8 impose à l’entité la déclaration dès connaissance de l’incident. Ne pas attendre la fin de la forensique. Les informations personnelles peuvent relever d’autres exigences distinctes.",
  "refs": [
   "dnssi",
   "law"
  ],
  "kind": "case",
  "duration": 65
 },
 {
  "part": 4,
  "title": "CERT Puzzle",
  "kicker": "Remettez les étapes dans le bon ordre.",
  "items": [],
  "notes": "Ouvrir 75 secondes. Sur téléphone, les étudiants ajoutent les six cartes dans leur ordre et peuvent annuler avant validation. Correction : préparation → détection/analyse → confinement → éradication → rétablissement → retour d’expérience. Ne pas assimiler le modèle à un texte officiel DGSSI.",
  "refs": [],
  "kind": "challenge",
  "challenge": "c4",
  "duration": 95
 },
 {
  "part": 5,
  "title": "The vault",
  "kicker": "Saisissez les quatre chiffres obtenus.",
  "items": [],
  "notes": "Fermer la quatrième manche. Demander aux équipes de vérifier leurs fiches. L’administrateur ouvre le coffre avec le code correct ; les résultats sont ensuite affichés. En cas d’égalité appliquer le classement annoncé et, si souhaité, la question bonus orale.",
  "refs": [],
  "kind": "vault",
  "duration": 75
 },
 {
  "part": 5,
  "title": "Solution commentée · 0–2 h",
  "kicker": "Priorités indicatives de réaction à Atlas.",
  "items": [
   {
    "h": "1 · Accès / DSI",
    "t": "Suspendre les accès suspects, révoquer les sessions et renouveler les secrets depuis un environnement sain."
   },
   {
    "h": "2 · Confinement / SOC",
    "t": "Isoler selon le risque clinique ; préserver les preuves et élargir l’investigation."
   },
   {
    "h": "3 · Gouvernance / RSSI",
    "t": "Mobiliser la direction, le MSP et effectuer les signalements applicables."
   },
   {
    "h": "Pourquoi ?",
    "t": "Stopper la propagation, documenter le périmètre et éviter une reprise prématurée."
   }
  ],
  "notes": "Les délais sont des objectifs pédagogiques, pas des délais légaux. La notification art. 8 ne doit pas être retardée. Répondre aux questions 1 et 4 de la fiche : responsabilité de l’hôpital et premières actions. Ne pas effacer les preuves.",
  "refs": [
   "law",
   "dnssi",
   "huntress"
  ],
  "kind": "case",
  "duration": 90
 },
 {
  "part": 5,
  "title": "Solution commentée · après confinement",
  "kicker": "Plan de remédiation et preuves.",
  "items": [
   {
    "h": "Accès / DSI",
    "t": "Moindre privilège + MFA adapté → matrice et preuves de revue."
   },
   {
    "h": "Fournisseurs / achats + RSSI",
    "t": "Avenant, auditabilité, contrôle des extensions → contrat et rapport de revue."
   },
   {
    "h": "Détection / SOC",
    "t": "Journalisation nominative, EDR → alertes et traces d’administration."
   },
   {
    "h": "Résilience / DSI + métier",
    "t": "PCA, sauvegardes isolées, test PRA → rapport RTO/RPO et validation."
   }
  ],
  "notes": "Répondre aux questions 2 et 3. ACC-SYS/APP-PRIVIL, FOURNIS-REL-EXIG, EXP-JOURN/SURV-PRIVIL et CONTINU-PLAN sont des références vérifiées. Chaque mesure doit être assignée, planifiée et testée ; MFA/bastion sont des moyens proposés. L’éradication précède la remise en service sécurisée.",
  "refs": [
   "dnssi",
   "guide",
   "law"
  ],
  "kind": "matrix",
  "duration": 100
 },
 {
  "part": 5,
  "title": "Les quatre piliers de la mission",
  "kicker": "La cyberrésilience est une responsabilité partagée.",
  "items": [
   {
    "h": "Gouvernance",
    "t": "Coordonner et assumer le risque."
   },
   {
    "h": "Réglementation",
    "t": "Maîtriser les obligations et les preuves."
   },
   {
    "h": "Résilience",
    "t": "Maintenir et rétablir les activités."
   },
   {
    "h": "Réponse",
    "t": "Détecter, contenir, apprendre."
   }
  ],
  "notes": "Conclure : la sécurité d’un prestataire fait partie du risque de l’organisation. Question bonus : pourquoi un réseau bien protégé peut-il être compromis via un MSP ? Réponse : les relations de confiance et accès privilégiés contournent certains contrôles.",
  "refs": [],
  "kind": "pillars",
  "duration": 45
 },
 {
  "part": 5,
  "title": "Références & discussion",
  "kicker": "Sources officielles, investigations et limites.",
  "items": [
   {
    "h": "Sources marocaines",
    "t": "Loi 05-20, décret, DNSSI, stratégie 2030, guide PCA/PRA."
   },
   {
    "h": "Sources techniques",
    "t": "Huntress, avis de sécurité ConnectWise et NIST."
   },
   {
    "h": "Contexte 2026",
    "t": "Médias24 et Hespress : alerte rapportée ; bulletin original non consulté."
   },
   {
    "h": "Questions",
    "t": "Quel contrôle réduirait le plus le risque fournisseur dans votre organisation ?"
   }
  ],
  "notes": "Inviter à consulter les liens dans l’interface et la bibliographie. Rappeler que le cas Atlas est fictif et les résultats internationaux ne prouvent pas une victime marocaine.",
  "refs": [
   "law",
   "decree",
   "dnssi",
   "guide",
   "dgssi",
   "huntress",
   "alert",
   "hespress",
   "vendor",
   "nist",
   "oldnist",
   "cndp",
   "iso",
   "iso22301",
   "passi",
   "macert"
  ],
  "kind": "sources",
  "duration": 200
 }
];
