
function insertCSSWhenElementAppears() {
    let checkExist = setInterval(function() {
        let element = document.querySelector('.modal.fade');
        if (element) {
            clearInterval(checkExist);
            let link = document.createElement('link');
            link.href = chrome.runtime.getURL('../css/styles.css');
            link.rel = 'stylesheet';
            document.head.appendChild(link);
            console.log('CSS injected!');
        }
        else {
            console.log('Waiting for webpage to load...');
        }
    }, 1000); // checks every 1000ms
}

insertCSSWhenElementAppears();