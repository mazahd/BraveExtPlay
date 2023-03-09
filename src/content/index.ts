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
//


let multiSelect = []

const handleKeyDown = async e => {

  const element = document.activeElement;
  if(element.tagName === "INPUT" || element.tagName === "TEXTAREA")
  return;

    const message = !multiSelect.length
      ? { selectedText: getSelectedText() }
      : { selectedText: multiSelect };


  if (message.selectedText === "")
  return;


  if (e.key === "a") {
    chrome.runtime.sendMessage({messageType: "search" , data: message}, function(response) {
      if (response.success){
        const overlay = new Overlay({
          target: document.body
        });

        setTimeout(() => {
          overlay.$destroy();
        }, 2500);
      }
    });
  }
  if (e.key === "o") {
    // message = "m" + message
    const message2 = { "selectedText": `\n${message.selectedText}` };
    chrome.runtime.sendMessage({messageType: "insert", data: message2}, function(response) {
      if (response.success){
        const overlay = new Overlay({
          target: document.body
        });

        setTimeout(() => {
          overlay.$destroy();
        }, 2500);
      }
    });
  }
  if (e.key === "w") {
    // message = "m" + message
    // const message2 = { "selectedText": `\n${message.selectedText}` };
    chrome.runtime.sendMessage({messageType: "word", data: message}, function(response) {
      if (response.success){
        const overlay = new Overlay({
          target: document.body
        });

        setTimeout(() => {
          overlay.$destroy();
        }, 2500);
      }
    });
  }
  if (e.key === "p") {
    // message = "m" + message
    // const message2 = { "selectedText": `\n${message.selectedText}` };
    chrome.runtime.sendMessage({messageType: "phrase", data: message}, function(response) {
      if (response.success){
        const overlay = new Overlay({
          target: document.body
        });

        setTimeout(() => {
          overlay.$destroy();
        }, 2500);
      }
    });
  }
}

    // multiSelect = [];


const handleMouseUp = async e => {
  if (e.metaKey){
    const selectedText = getSelectedText();
    multiSelect = [...multiSelect, selectedText]

  }
  // else if (!e.metaKey){
  //   multiSelect = [];
  // }
}

    // const message = !multiSelect.length
    //   ? { selectedText: getSelectedText() }
    //   : { selectedText: multiSelect };


// const handleMouseDown = async e => {
//   if (e.metaKey){
//     const selectedText = getSelectedText(); 
//     multiSelect = [...multiSelect, selectedText]
//   }
// }

document.addEventListener("keydown", handleKeyDown);

document.addEventListener("mouseup", handleMouseUp)
// document.addEventListener("mousedown", handleMouseDown)

const getSelectedText = () => {
  const element = document.activeElement;
  const isInTextField = element.tagName === "INPUT" || element.tagName === "TEXTAREA";
  const selectedText = isInTextField
    ? element.value.substring(element.selectionStart, element.selectionEnd)
    : window.getSelection()?.toString() ?? "";
  return selectedText;
};

// const keysDown = {};

// document.addEventListener("keydown", function(e) {
//   keysDown[e.key] = true;

//   if (keysDown["A"] && keysDown["G"]) {
//     const selectedText = getSelectedText();
//     chrome.runtime.sendMessage({selectedText: selectedText});
//   }
// });

// document.addEventListener("keyup", function(e) {
//   keysDown[e.key] = false;
// });

// new Overlay({ target: document.body });
// Some svelte component on the page
//
//
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.success) {
  }
});

