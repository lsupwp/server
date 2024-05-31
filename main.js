const express = require("express");

const app = express();
const port = 8080;
const host = "0.0.0.0";

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/keylocker', (req, res) => {
    const { key } = req.query;
    console.log({ date: new Date(), key: key });
    res.json({ key: key });
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
