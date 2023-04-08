import { create_slot } from "svelte/internal";
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


const systemPrompt = 'correct and optimize text bellow'
const userPrompt = 'auto layut : create designs that grow to fill or shrink to fit, and reflow as their contents chanage.'

const OPENAI_API_KEY = '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';
const url = 'https://api.openai.com/v1/chat/completions';
const requestBody = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'system', content: systemPrompt },
             { role: 'user', content: userPrompt}],
  temperature: 0.7,
};

(async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    const messageContent = data.choices[0].message.content;
    console.log(messageContent);
  } catch (error) {
    console.error('Error:', error);
  }
})();

let multiSelect = []

const handleKeyDown = async e => {

  const element = document.activeElement;
  if(element.tagName === "INPUT" || element.tagName === "TEXTAREA")
  return;

    // const message = !multiSelect.length
    //   ? { selectedText: getSelectedText() }
    //   : { selectedText: multiSelect };

  // const message = { selectedText: !multiSelect?.length ? multiSelect : getSelectedText() }

  const message = { selectedText : getSelectedText() }


  if (!message.selectedText) return;


  if (e.key === "a") {
    chrome.runtime.sendMessage({messageType: "search" , data: message}, function(response) {
      if (response.success){
        const overlay = new Overlay({
          target: document.body,
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

