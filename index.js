const express = require('express');
const puppeteer = require('puppeteer');

async function printPDF(html) {
  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluateHandle('document.fonts.ready');

    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdf;
  } catch (e) {
    debug('puppeteer pdf error:', e);
    throw new Error(`puppeteer pdf error: ${e}`);
  }
}

const app = express();

app.use(express.json());

app.use('/.ping', (req, res) => {
  res.json('pong!');
});

app.post('/EmployeeBulkCreate', (req, res) => {
  const { hashValue } = JSON.parse(req.body);
  console.log(hashValue);
  res.json(hashValue);
});

app.post('/pdf', (req, res) => {
  const { html } = req.body;
  printPDF(html)
    .then(pdf => {
      res.send(pdf);
    })
    .catch(err => {
      res.status(500).end();
    });
});

app.use((req, res) => {
  res.send('restricted area!');
});

const { port = 3001 } = process.env;

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});
