### Update Notion Keys

You need to add the following to your env.local file (and in the environment variables in Vercel/Netlify when deployed).

```
MY_NOTION_TOKEN=
DATABASE_ID=
```

You can find more details on how to get these [here](https://developers.notion.com/).


### Update Colors

You can update the color palette in tailwind.config.js file.

```
colors: {
  palette: {
    light: '',
    primary: '',
    dark: '',
  },
},
```

### Update Progressive Web App (PWA) data

Update the manifest.json file and the icons under the public/images/icons folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.
