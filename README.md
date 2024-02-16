# Beatiful React Material-UI Portfolio | Resume | CV

Feel free to change `resume.json` in `src` folder and use it as your own SEO optimized CV :smile:
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

1. Clone this repository via `git clone`.
2. Edit `src/resume.json` file with you own data.
2. Deploy app with `yarn` and `yarn deploy` commands - [Deploying a React App* to GitHub Pages created using create-react-app](https://github.com/gitname/react-gh-pages)
4. Set up your new [EmailJS](emailjs.com) account with new root file `.env`, like in `.env.example` to get emails from `Contact` form.

P.S. `SEO`, `cv.html` and `cv.pdf` are automatically applied.

P.S.2. Unfortunately `cv.docx` is not auto generated... Try smth like [CloudConvert](https://cloudconvert.com) or [pdf2docx](https://pdf2docx.com/) and update `public/cv.docx` file if you need that.

## Linkedin tutorial

1. Update LinkedIn profile.
2. Either export LinkedIn data and use [linkedin-to-resume-json](https://jmperezperez.com/linkedin-to-json-resume/)/[resumonk.com](https://www.resumonk.com) to transform `linkedin.zip` to `resume.json` OR update `resume.json` manually.
3. Generate Standard `cv.doc` by [Resume Fodder](https://resumefodder.com) (upload updated `resume.json` and download `cv.doc`).
4. Convert `cv.doc` to `cv.docx` and `cv.pdf` by [CloudConvert](https://cloudconvert.com).
5. If you want to change structure/design in docx/pdf, upload docx to [Google Docs](https://docs.google.com/document/d/1wbSc1S7JoPLY9iR4js4_gAePr65JO-SWYp7DaJ_QaYc), change and export to PDF/DOCX.
6. Put converted files to `public` folder as `public/cv.docx` and `public/cv.pdf`.
7. `yarn deploy` and check your site via `https://{username}.github.io/{repo-name}`.

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

```
$ yarn deploy
```

or

```
$ npm run deploy
```


No magic, build folder contains only static resources - html, js,.scss, images.

Github pages deploy build folder on gh-pages branch.

## Built With

- [Github Pages](https://github.com/gitname/react-gh-pages) deployment
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
