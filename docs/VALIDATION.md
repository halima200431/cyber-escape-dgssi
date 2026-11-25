# Validation avant le jour J

## Validation actuelle

Voir [VALIDATION_LIVE.md](VALIDATION_LIVE.md) pour les tests réellement exécutés sur Firebase le 25 novembre 2026, leurs résultats et leurs limites.

## Bilan initial avant configuration (historique)

- Tests Node : voir `npm test`. Ils couvrent le modèle, les 40 slides, le code, le classement, la sanitation et une session démo complète via le stockage simulé.
- Vérification de syntaxe : `node --check js/*.js` (exécuter fichier par fichier).
- Test navigateur fourni dans `tests/browser_demo.py`, mais non exécuté jusqu'au bout dans l'environnement de création : Chromium renvoie `ERR_BLOCKED_BY_ADMINISTRATOR` à l'ouverture du serveur local. Le rendu visuel et le parcours UI doivent être confirmés sur votre PC.
- Mode Firebase live : non testé sur une vraie base, car aucun projet Firebase ni identifiants utilisateur n'ont été fournis. Les règles ont été écrites, mais non validées contre l'émulateur ou le service réel. Ne pas assimiler ces tests locaux à un audit de sécurité.

## Checklist fonctionnelle (PC et 2 téléphones)

- [ ] Remplacer les valeurs Firebase, activer Auth, créer le compte admin, ajouter son UID et publier les règles.
- [ ] Créer une salle live et vérifier le statut connecté.
- [ ] Vérifier que le code inconnu est refusé et que le pseudonyme est correctement affiché.
- [ ] Inscrire deux équipes différentes et vérifier les compteurs.
- [ ] Avant ouverture, aucun formulaire actif ; ouvrir la première manche.
- [ ] Vérifier que la projection et les deux téléphones se synchronisent.
- [ ] Soumettre une réponse juste et une fausse ; vérifier le résultat en temps réel.
- [ ] Tenter une seconde réponse (doit être impossible), et une réponse après expiration (doit être refusée).
- [ ] Exécuter les quatre types de jeu et vérifier 100/100 pour les quatre bonnes réponses.
- [ ] Clôturer les manches, saisir un mauvais code puis le bon code ; contrôler l'ouverture et la publication du classement.
- [ ] Télécharger le CSV, l'ouvrir et comparer avec le classement.
- [ ] Actualiser la page étudiant puis admin pour vérifier récupération de session ; l'étudiant peut devoir saisir son pseudonyme, qui restera celui déjà enregistré.
- [ ] Vérifier qu'un compte Firebase non autorisé ne peut pas modifier l'état.
- [ ] Avec Firebase Rules Playground ou l'émulateur : vérifier lecture/écriture propre, interdiction lecture des autres réponses, interdiction modification admin, write tardive et réponse dupliquée. Ne pas mettre la base en mode test public pour contourner un problème.
- [ ] Vérifier l'affichage 16:9 et mobile, le plein écran, la lisibilité des textes et la fiche imprimable.
- [ ] Exporter les résultats utiles et supprimer les anciennes salles.

## Diagnostic

`Firebase non configuré` : remplir js/config.js et redéployer. `PERMISSION_DENIED` en admin : vérifier l'UID booléen dans `/admins`, le projet et les règles. `auth/operation-not-allowed` : activer le fournisseur de connexion. `auth/unauthorized-domain` : vérifier Authorized domains. Salle introuvable : même mode et même code de salle. Connexion hors ligne : vérifier Internet et accès aux domaines Firebase. Éviter plusieurs admins qui pilotent simultanément la même salle. Toujours garder les supports papier.

