chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab)
    chrome.tabs.create({ url: chrome.extension.getURL('index.html'), selected: true });
});