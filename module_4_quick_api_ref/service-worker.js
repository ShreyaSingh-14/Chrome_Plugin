import './sw-omnibox.js';
import './sw-tips.js';
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.greeting === 'tip') {
    sendResponse({ tip: "Use `chrome.runtime.sendMessage()` to communicate with your background script." });
    return true; // Keep the message channel open for sendResponse
  }
});
