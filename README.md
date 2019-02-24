# Beatiful React Material-UI Portfolio | Resume | CV

Feel free to change `resume.json` in `src` folder and use it as your own CV :smile:
P.S. [JSON Resume](https://jsonresume.org/schema/) is used here.

## Owner tutorial

1. Update LinkedIn profile.
2. Either export LinkedIn data and use [resumonk.com](https://www.resumonk.com) to transform `linkedin.zip` to `resume.json` OR update `resume.json` manually.
3. Generate Standard `cv.doc` by [Resume Fodder](https://resumefodder.com) (upload updated `resume.json` and download `cv.doc`).
4. Convert `cv.doc` to `cv.docx` and `cv.pdf` by [CloudConvert](https://cloudconvert.com).
5. Put converted files to `public` folder as `public/cv.docx` and `public/cv.pdf`.
6. `git push` and check build/deployment status on [travis](https://travis-ci.org/lehaSVV2009/resume) (`cv.html` will be updated automatically).

## Getting Started

<a href="http://lehasvv2009.github.io/resume" target="_blank">Live demo</a>

Made with HATE :smiling_imp: (I'm tired of phrases 'Made with love')

## Installing

```
$ git clone https://github.com/lehaSVV2009/resume.git
```

```
$ yarn
$ yarn start
```

or

```
$ npm install
$ npm start
```

## Running tests

```
$ yarn test
```

or

```
$ npm test
```

## Deployment

No magic, build folder contains only static resources - html, js, css, images.

Travis deploys build folder on Github Pages.

Configurations are here - `.travis.yml`.

## Built With

- [Travis](https://travis-ci.org/) CI and deployment
- [Yarn](https://yarnpkg.com/) builds web client

## Contributing

Help wanted :smile:

If you want to contribute - just create issues and/or pull requests and let's discuss there. No hard rules.

## Versioning

No stress about versioning :smile:

Application is still too small for it.

## Authors

**Alex Soroka** - https://github.com/lehaSVV2009

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Great thanks [Katerina Draenkova](https://github.com/KaterinaDraenkova) and [Pavel Evleev](https://github.com/PavelEvleev) for inspiration!
