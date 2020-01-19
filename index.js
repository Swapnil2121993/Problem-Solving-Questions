const express = require('express');
const path = require('path')

const app = express();

const PORT = 8081;

app.use('/static', express.static('./static/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
    console.log(`server running at: http://localhost:${PORT}`);
})