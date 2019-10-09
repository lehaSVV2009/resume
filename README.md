# Beatiful React Material-UI Portfolio | Resume | CV

Feel free to change `resume.json` in `src` folder and use it as your own CV :smile:
P.S. [JSON Resume](https://jsonresume.org/schema/) is used here.

## Resume Example

```json
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "picture": "https://pickaface.net/gallery/avatar/20120117_083743_291_Demo.png",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "A summary of John Doe...",
    "location": {
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "username": "john",
        "url": "http://twitter.com/john"
      }
    ]
  },
  "work": [
    {
      "company": "Company",
      "position": "President",
      "website": "http://company.com",
      "startDate": "2013-01-01",
      "endDate": "2019-01-01",
      "summary": "Description...",
      "highlights": ["Started the company", "And more"]
    }
  ],
  "education": [
    {
      "institution": "University",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01"
    }
  ],
  "awards": [
    {
      "title": "Award",
      "date": "2014-11-01",
      "awarder": "Company",
      "summary": "There is no spoon."
    }
  ],
  "publications": [
    {
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "website": "http://publication.com",
      "summary": "Description..."
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "keywords": ["Master"]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ],
  "interests": [
    {
      "name": "Wildlife"
    },
    {
      "name": "Sports"
    }
  ]
}
```

## Steps to use

1. `Fork` this repository.
2. Deploy app with `github-pages` + `travis`, i.e. sync github account with travis.
   1. Go to https://github.com/settings/tokens and generate new token with `repo` scope. (With any name like `travis-resume`)
   2. Copy this access token.
   3. Login via github to https://travis-ci.org/.
   4. Click `+` and `Sync account`.
   5. Find and enable `resume` repository in travis repositories list.
   6. Click `resume` settings in Travis.
   7. In section `Environment Variables` add input name `GITHUB_TOKEN`, input access token as value and click `Add`. (Don't enable display value in build logs!)
   8. Click `More options` -> `Trigger build` -> `Trigger custom build` in Travis and wait for a couple of minutes.
   9. Go to https://*yourgithubaccount*.github.io/resume and you'll see resume of Aliaksei Saroka.
3. Change `resume.json`
   1. Go to https://github.com/*YourGithubAccount*/resume/blob/master/src/resume.json
   2. Click `Edit` and change to smth you want (e.g. [paste this](#resume-example)).
   3. Click `Commit Changes`, wait for 1-2 minutes and open https://*yourgithubaccount*.github.io/resume.
4. Sign up to https://formspree.io/ to get emails from `Contact` form.

P.S. `SEO` and `cv.html` are automatically applied.

P.S.2. Unfortunately `cv.pdf` and `cv.docx` are not auto generated... Try [Resume Fodder](https://resumefodder.com) + [CloudConvert](https://cloudconvert.com) and update `public/cv.docx` and `public/cv.pdf` files if you need that.

## Linkedin tutorial

1. Update LinkedIn profile.
2. Either export LinkedIn data and use [linkedin-to-resume-json](https://jmperezperez.com/linkedin-to-json-resume/)/[resumonk.com](https://www.resumonk.com) to transform `linkedin.zip` to `resume.json` OR update `resume.json` manually.
3. Generate Standard `cv.doc` by [Resume Fodder](https://resumefodder.com) (upload updated `resume.json` and download `cv.doc`).
4. Convert `cv.doc` to `cv.docx` and `cv.pdf` by [CloudConvert](https://cloudconvert.com).
5. If you want to change structure/design in docx/pdf, upload docx to [Google Docs](https://docs.google.com/document/d/1wbSc1S7JoPLY9iR4js4_gAePr65JO-SWYp7DaJ_QaYc), change and export to PDF/DOCX.
6. Put converted files to `public` folder as `public/cv.docx` and `public/cv.pdf`.
7. `git push` and check build/deployment status on [travis](https://travis-ci.org/lehaSVV2009/resume) (`cv.html` will be updated automatically).

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

**Aliaksei Saroka** - https://github.com/lehaSVV2009

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Great thanks [Katerina Soroka](https://github.com/KaterinaSoroka) and [Pavel Evleev](https://github.com/PavelEvleev) for inspiration!
