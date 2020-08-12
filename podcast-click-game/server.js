const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

var PORT = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up!');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/assets', express.static('assets'));
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});