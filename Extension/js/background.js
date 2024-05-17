let styleLink = null;

function insertCSS(tabId) {
    if (!styleLink) {
        styleLink = document.createElement('link');
        styleLink.href = chrome.runtime.getURL('css/styles.css'); // Corrected path
        styleLink.rel = 'stylesheet';
        const cssCode = 'document.head.appendChild(' + JSON.stringify(styleLink.outerHTML) + ');';
        chrome.tabs.executeScript(tabId, {code: cssCode}, () => {
            console.log('CSS injected!');
        });
    }
}

function removeCSS(tabId) {
    if (styleLink) {
        const cssCode = 'var styleLink = document.querySelector(\'link[href="' + styleLink.href + '"]\'); if (styleLink) document.head.removeChild(styleLink);';
        chrome.tabs.executeScript(tabId, {code: cssCode}, () => {
            styleLink = null;
            console.log('CSS removed!');
        });
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'toggle_css') {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            if (request.data === 'on') {
                if (currentTab.url !== 'https://loop.dcu.ie/login/index.php') {
                    insertCSS(currentTab.id);
                }
            } else if (request.data === 'off') {
                removeCSS(currentTab.id);
            }
        });
    }
});
