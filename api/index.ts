import express from 'express';
import { sum } from './sum';

const app = express();

app.get('/api', (req, res) => {
  const itemId = 'something';
  const path = `/api/item/${itemId}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${itemId}</a>`);
});

app.get('/api/test', (req, res) => {
  res.end(`Works :D`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get('/api/sum/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;

  const result = sum(Number(num1), Number(num2));

  res.end(`${num1} + ${num2} = ${result}`);
});

export default app;
