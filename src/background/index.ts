import { storage } from "../storage";

chrome.runtime.onInstalled.addListener(() => {
    storage.get().then(console.log);
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Log the selected text
  console.log(message.selectedText);
});

// chrome.commands.onCommand.addListener((run-money) => {
//   console.log(`Command "${run-money}" triggered`);
// });
