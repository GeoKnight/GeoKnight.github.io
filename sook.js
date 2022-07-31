console.log('Init Sook');
function sendScore(sookScore) {
    console.log(sookScore);
    if(typeof sookScoreHandler === 'undefined') {

    }
    else {
        sookScoreHandler.postMessage(sookScore);
    }
}
