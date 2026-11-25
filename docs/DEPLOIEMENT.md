# Publication GitHub Pages

Compte retenu à partir de l'URL fournie : halima200431.
Dépôt cible : https://github.com/halima200431/cyber-escape-dgssi
URL attendue après déploiement : https://halima200431.github.io/cyber-escape-dgssi/

## Publier

1. Sur GitHub, créer un dépôt vide nommé cyber-escape-dgssi. Ne pas initialiser de README, licence ou .gitignore supplémentaire.
2. Dans le dossier du projet déjà initialisé et commité, exécuter :

```cmd
git push -u origin main
```

3. Dans le dépôt : Settings > Pages > Build and deployment > Source : GitHub Actions.
4. Le workflow .github/workflows/pages.yml exécute npm test puis déploie uniquement les HTML, .nojekyll, assets et js. En cas d'échec initial lié à l'activation de Pages, relancer le workflow depuis Actions > Deploy static site to GitHub Pages > Run workflow.
5. Dans Firebase Authentication > Settings > Authorized domains : ajouter halima200431.github.io, sans https et sans chemin. Conserver localhost pour les essais locaux.
6. Vérifier le workflow vert et l'URL publiée ; refaire un essai depuis un téléphone Internet avec une nouvelle salle live.

## Identifiants

La configuration Web Firebase dans js/config.js est publique et nécessaire au navigateur. Le contrôle d'accès dépend des règles Firebase et de /admins. Aucun compte de service, mot de passe, jeton d'accès privé ou export de session ne doit être ajouté au dépôt. .gitignore exclut les formats usuels de secrets et sessions locales.

Les fichiers de palette et le contenu académique sont conservés. Les résultats QA ne sont pas inclus dans le site déployé.
