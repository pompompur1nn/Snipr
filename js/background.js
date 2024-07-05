function injectContentScript(tabId) {
    browser.tabs.executeScript(tabId, {
        file: "js/background/browseraction.js"
    });
}

// Listen for tab updates
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /roblox\.com/.test(tab.url)) {
        injectContentScript(tabId);
    }
});