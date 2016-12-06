# kick-off-ng2-foundation6

kick-off is a directory of templates developed by projekt:kreatywa for series of blog posts by impertinent creations

this incarnation of kick-off template is an [angular2](https://angular.io/), single page web app built with [angular-cli](https://cli.angular.io/) and [foundation 6](http://foundation.zurb.com/sites.html)

---

kick-off-ng2-md is packed with all that stuff that usually comes with [angular-cli](https://cli.angular.io/)'s `ng new ...` command:

- [typescript](https://www.typescriptlang.org/) and
- [webpack](https://webpack.github.io/). already mentioned
- [foundation 6](http://foundation.zurb.com/sites.html) and
- [scss](http://sass-lang.com/). baked in tests by:
- [jasmine](https://jasmine.github.io/),
- [karma](https://karma-runner.github.io/1.0/index.html),
- [istanbul](https://istanbul.js.org/) for coverage and 
- [protractor](http://www.protractortest.org/#) for e2e tests and
- loads of other stuff so check out [package.json](/blob/master/package.json) to get better idea about what's in.

---

# KickOffNg2Md

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---


## Updating angular-cli

To update `angular-cli` to a new version, you must update both the global package and your project's local package.

Global package:
```bash
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
```

Local project package:
```bash
rm -rf node_modules dist tmp
npm install --save-dev angular-cli@latest
npm install
ng init
```

Running `ng init` will check for changes in all the auto-generated files created by `ng new` and allow you to update yours. You are offered four choices for each changed file: `y` (overwrite), `n` (don't overwrite), `d` (show diff between your file and the updated file) and `h` (help).

Carefully read the diffs for each code file, and either accept the changes or incorporate them manually after `ng init` finishes.

**The main cause of errors after an update is failing to incorporate these updates into your code**.

You can find more details about changes between versions in [CHANGELOG.md](https://github.com/angular/angular-cli/blob/master/CHANGELOG.md).



---

<script src="https://gist.github.com/rafszul/29e74b0eafe0cd8f2d923ef60d9053bd.js"></script>

