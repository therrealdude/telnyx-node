const express = require('express');
const bodyParser = require('body-parser');
const _send = require('./send');
const _responseMessage = require('./responseMessage');

const app = express();
app.use(bodyParser.json());

app.post('/receivemessage', (req, res) => {
    var message = _responseMessage.responseMessage(req.body.data.payload.text);
    var from = req.body.data.payload.to[0].phone_number;
    var to = req.body.data.payload.from.phone_number;
    console.log(to);
    console.log(process.env.TELNYX_NUMBER);
    if (to !== process.env.TELNYX_NUMBER)
    {
        _send.send(from, to, message);
    }
});

app.listen(80);