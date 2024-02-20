let clickCount = 0;
const clickDelay = 400;
let clickTimer = null;

// Listen for clicks on the extension icon
chrome.action.onClicked.addListener((tab) => {
  clickCount++;

  if (clickTimer) clearTimeout(clickTimer);

  clickTimer = setTimeout(() => {
    if (clickCount === 1) {
      chrome.tabs.sendMessage(tab.id,
        {
            message: "copyPreview"
        }, function(response) {})
    } else if (clickCount === 2) {
      chrome.tabs.sendMessage(tab.id,
        {
            message: "copyThemeEditor"
        }, function(response) {})
    } else if (clickCount >= 3) {
      chrome.tabs.sendMessage(tab.id,
        {
            message: "copyCurrentPageURL"
        }, function(response) {})
    }

    clickCount = 0;
  }, clickDelay);
});
