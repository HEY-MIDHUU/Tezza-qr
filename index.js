const chalk = require('chalk');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__path, 'public')));

app.get('/pair', (req, res) => {
    res.sendFile(path.join(__path, '/public/pair.html'));
});

app.get('/qr', (req, res) => {
    res.sendFile(path.join(__path, '/public/qr.html'));
});

let qrCode = require('./qr');
app.use('/qr-code', qrCode);

let pair = require('./pair');
app.use('/code', pair);

app.get('/', (req, res) => {
    res.sendFile(path.join(__path, '/public/index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:' + PORT);
    open('http://localhost:8000');
});

module.exports = app;
