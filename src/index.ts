const app = require('express')();

app.get('/api', (req, res) => {
  const itemId = 'something';
  const path = `/api/item/${itemId}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="qwe">${path}</a>`);
});

app.get('/test', (req, res) => {
  res.end(`Works :D`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;
