# Django/react project with multiple entry points
This project displays how to create a django project with multiple entry points for react components.
This allows an application to be built with the django template system, and then selectively use react components
in any given template.

## Run project
`npm run watch` or `npm start` to use web-dev-server
`source venv/bin/activate`
`python manage.py runserver`

## django-react-webpack
Repository created as an update to the ["Set up react in your django project with webpack"](https://medium.com/uva-mobile-devhub/set-up-react-in-your-django-project-with-webpack-4fe1f8455396) tutorial

### use react component in django template
- Pass context from the view through a django template and into a nested react component.
- This doesn't allow for multiple entry points
- This method could be used to use react for a single app in a django project.

### use manifest file to create multiple entrypoints
https://www.vinta.com.br/blog/2022/building-your-project-using-django-webpack-loader-and-webpack-bundle-tracker/
https://github.dev/tpmac1990/atlas-prod/blob/main/gp/static/index.html

## adding python-webpack-manifest (Not included)
https://github.com/markfinger/python-webpack-manifest
this is not done yet, but has the following benefits:
- Load references to webpack assets
- Uses relative paths to ensure that manifests+assets can be pre-built and deployed across environments
- Caches file reads to reduce overhead in production environments
- Provides an opt-in debug mode which disables caching and blocks the python process as webpack completes re-builds
- Designed to be optionally packaged with redistributable apps+libraries that need to avoid dependency-hell.
