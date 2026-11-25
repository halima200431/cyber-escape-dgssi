# Validation live — 25 novembre 2026

## Exécuté sur le vrai projet Firebase

Projet : cyber-escape-dgssi. Realtime Database : europe-west1.

- Connexion administrateur saisie manuellement par le propriétaire, autorisation vérifiée par l'application.
- Création d'une salle supplémentaire QASEC26 depuis le tableau de bord.
- Salle 4V9FV3 : deux équipes indépendantes QA Lavandes et QA Orchidées, avec authentification anonyme et inscriptions visibles en direct.
- Quatre challenges exécutés depuis les formulaires réels. Une réponse correcte et une incorrecte par manche. Compteurs : 2 réponses / 1 correcte sur chaque manche.
- Scores : QA Lavandes 100/100 et code 7392 ; QA Orchidées 0/100 et code 4645.
- Navigation bloquée pendant une manche ; chronomètres admin et étudiant observés à 00:40 simultanément.
- Mauvais code 0000 refusé ; code 7392 accepté. Ouverture du coffre visible dans la projection et les interfaces étudiantes. Classement final publié.
- Les 40 slides ont été pilotées depuis l'admin et leur compteur vérifié dans la projection synchronisée.
- Export CSV téléchargé et contrôlé : deux équipes, quatre réponses chacune, scores et codes conformes.
- Actualisation de l'interface QA Orchidées : session récupérée après validation du pseudonyme et résultat final retrouvé.
- Sécurité via requêtes REST réelles avec deux comptes anonymes temporaires : lecture publique et lecture anonyme de la racine refusées ; état de salle lisible après authentification ; données de l'autre équipe et liste des joueurs privées ; ajout de privilège admin, modification d'état et du classement refusés.
- Réponses : envoi avant ouverture refusé ; réponse au nom d'autrui refusée ; valeur invalide refusée ; réponse propre valide acceptée ; doublon refusé ; lecture et modification de la réponse d'autrui refusées.
- Expiration réelle de la manche de 45 secondes : bouton étudiant désactivé à 00:00 ; première réponse tardive refusée par le serveur.
- Les deux comptes anonymes REST temporaires ont été supprimés. Les salles QA sont conservées pour revue.
- Responsive : accueil, formulaire de connexion admin, challenge étudiant et présentation inspectés à 390 px ; pas de débordement horizontal constaté. Interfaces bureau et résultat final inspectés visuellement. Palette et contenu inchangés.
- Tests Node : 7/7 réussis. Tous les fichiers JavaScript passent node --check. Aucune erreur console relevée dans le tableau de bord lors de la dernière inspection.

## Limites et opérations restantes

Les tests utilisent plusieurs sessions d'onglets indépendantes sur le PC, reliées au vrai service Firebase. Un essai sur deux téléphones physiques et leurs réseaux reste à faire avant la présentation. La récupération après actualisation de l'admin n'a pas été testée. Les pages mobiles ont été inspectées sur un viewport simulé, pas sur un téléphone physique.

Les règles actives ont été éprouvées par leur comportement ; leur identité exacte avec le fichier local n'a pas été relue via une API administrative. Aucun mot de passe ni jeton privé n'a été lu ou enregistré dans le dépôt.

GitHub Pages : prêt localement, non déployé. Voir DEPLOIEMENT.md. Le domaine Firebase GitHub Pages reste à ajouter : halima200431.github.io.
