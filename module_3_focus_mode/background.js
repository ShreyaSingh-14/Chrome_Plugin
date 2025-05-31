

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF'
  });
});

const extensions = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide';
const webstore = 'https://developer.chrome.com/docs/webstore';

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
  
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';


    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState
    });

    if (nextState === 'ON') {

      await chrome.scripting.insertCSS({
        files: ['focus_mode.css'],
        target: { tabId: tab.id }
      });
    } else if (nextState === 'OFF') {
  
      await chrome.scripting.removeCSS({
        files: ['focus_mode.css'],
        target: { tabId: tab.id }
      });
    }
  }
});