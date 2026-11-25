# Architecture et sécurité

## Flux

L'admin authentifié crée une salle, puis pilote `state`. Les écrans projection et étudiants observent ce nœud. Le formulaire de jeu est activé lorsque `phase=open` pour la manche courante ; le compte à rebours utilise le décalage d'heure serveur Firebase. Les réponses sont écrites une seule fois à leur emplacement dédié, l'admin observe les inscriptions et réponses et calcule le classement. Après clôture des quatre manches et validation du code final, une mise à jour atomique publie `results` et passe `final=true`. Les étudiants ne reçoivent pas les réponses brutes des autres équipes. Les équipes voient leurs chiffres candidats ; les quatre défis attribuent 25 points chacun. Le classement utilise score, nombre de réponses, dernière réponse la plus ancienne puis nom. La clé obtenue correspond à l'avancement collectif, pas au fait que tous ont répondu correctement.

## Modèle de confiance

- Firebase Auth : email/mot de passe admin, anonyme pour étudiants/projection ; allowlist `/admins/{uid}` administrée depuis la console. Il n'existe pas de mot de passe admin codé en dur.
- RTDB : règles deny-by-default, lecture des résultats agrégés publiés pour les utilisateurs authentifiés, lecture des réponses brutes par l'admin ou leur propriétaire, écritures de réponses append-only limitées à la manche ouverte et au temps serveur. Validation des longueurs, types et valeurs. Le backend ne valide pas le sens d'un puzzle ; l'admin calcule le score avec vérification du modèle.
- Toute personne avec un code de salle et une authentification valide peut lire son état, s'inscrire si non terminée et voir le classement publié. Pas de protection forte contre les inscriptions multiples ou les noms dupliqués. Ne pas partager de données confidentielles. Utiliser un code aléatoire et un pseudonyme par équipe ; surveiller la liste d'inscrits.
- L'admin est de confiance et peut piloter toutes les salles du projet. Ne créer que des comptes admin nécessaires. Utiliser des mots de passe uniques, fermer la session après usage. Ne jamais afficher le tableau de bord au public.
- Les réponses correctes, la correction et le code sont visibles dans les fichiers statiques. Aucune promesse anti-triche. Un vrai concours exige un calcul backend privé et une authentification/validation des inscriptions.
- Le mode démo n'a pas de contrôle d'accès et utilise le stockage local ; il peut subir des courses d'écriture entre onglets simultanés. Réservé à la répétition ; le mode Firebase utilise des chemins individuels par équipe.
- Les réponses ne contiennent que des choix et pseudonymes ; aucun nom complet, email étudiant, donnée de patient, journal d'incident réel ni information médicale. Utiliser un projet Firebase dédié. Supprimer les sessions anciennes et, si utile, supprimer les comptes anonymes dans Authentication. Les administrateurs peuvent supprimer les données via la console. Le CSV reste local sur la machine de l'admin.

## Politique de reprise

La fermeture d'une manche est manuelle (l'admin clique Clôturer), mais les règles Firebase rejettent les réponses après la deadline même si le statut n'a pas encore changé. En cas de connexion perdue, les réponses ne doivent pas être considérées comme enregistrées sans accusé de réception. Vérifier les compteurs et le classement. Si la connexion générale tombe, continuer en mode répétition avec cartes imprimées et correction manuelle, sans prétendre à une synchronisation multi-appareils.

## Évolutions possibles

App Check, limitation des abus, invitations de salle par jeton, serveur de correction privé, identité d'équipe, statistiques agrégées publiques et test des règles via Firebase Local Emulator Suite. Non inclus dans cette version pédagogique.
