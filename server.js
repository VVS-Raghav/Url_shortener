import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ShortUrl from './models/shortUrls.js';

const app = express();

dotenv.config();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL);

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index",{urls : shortUrls });
});


app.post('/shorten', async (req, res) => {
  const givenUrl = req.body.url;
  await ShortUrl.create({ originalUrl : givenUrl });
  res.redirect('/');
});


app.get('/:shortUrl',async (req,res)=>{
  const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });
  if(shortUrl== null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.originalUrl);
} );


app.listen(process.env.PORT, async () => {
  // await ShortUrl.deleteMany();
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
