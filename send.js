const telnyx = require('telnyx')(process.env.TELNYX_API_KEY);

exports.send = function send(from, to, text) {
    const createObject = {
        'from': from,
        'to': to,
        'text': text
    };
    console.log(createObject);
    telnyx.messages.create(createObject,
    function(err, response) {
        //console.log(err);
        //console.log(response);
    });
}