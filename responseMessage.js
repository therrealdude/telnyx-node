exports.responseMessage = function responseMessage(text) {
    switch(text)
    {
        case 'Hi': return 'Think of something better';
        case 'U up?': return 'No I am asleep';
        case 'Sup?': return 'Nothing much';
        case 'Knock knock': return 'Who is there?';
        default: return `You wrote ${text}`;
    }
}