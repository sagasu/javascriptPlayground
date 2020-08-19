
var fetchStream = async function() {
    const url = 'https://www.test-cors.org/';
    // node.js and pure JavaScript standard of fetch is different, this one is for pure JS.
    const response = await fetch(url, {mode: 'no-cors'});
    if(response.body === null)
        return;

    const reader = response.body.getReader();

    while(true) {
        const {value, done} = await reader.read();
        if(done) break;

        console.log('received', value);
    }

    console.log('Response fully received');
};

fetchStream();

