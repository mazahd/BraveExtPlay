import Overlay from "../components/Overlay.svelte";
import { storage } from "../storage";

// Some global styles on the page
import "./styles.css";

// Some JS on the page
// storage.get().then(console.log);

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === "getSelectedText") {
//     var selection = window.getSelection().toString();
//     sendResponse({ selectedText: selection });
//   }
// });
//

// Listen for selection changes
document.addEventListener("selectionchange", function() {
  // Get the selected text
  var selectedText = window.getSelection().toString();
  // Send the selected text to the background script
  chrome.runtime.sendMessage({selectedText: selectedText});
});

// Some svelte component on the page
new Overlay({ target: document.body });
