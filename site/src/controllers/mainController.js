
// FETCH INSTAGRAM 
const fetch = require('node-fetch');
const token = process.env.IG_ACCESS_TOKEN
const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=50&access_token=${token}`;

module.exports = {
    home: async (req, res) => {
       const instaFetch = await fetch(url)
       const instaJson = await instaFetch.json()
       const instaData = instaJson.data       
       res.render("home", { instaData });
   },
};
