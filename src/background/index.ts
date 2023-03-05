import { storage } from "../storage";

chrome.runtime.onInstalled.addListener(() => {
    storage.get().then(console.log);
});


// chrome.commands.onCommand.addListener((command) => {
   // if (command === "googleSearch") {
  // Get the active tab
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // Send a message to the content script
  // chrome.tabs.sendMessage(tabs[0].id, {greeting: "Hello from the background script!"});
// });

  // }
  // }
// );
const url = 'https://127.0.0.1:27124/active/';
const accessToken = '330706b3eb6d6c2b3b20ccf932099f9437f224218faaaece43af939c02cc1dda';
const contentType = 'text/markdown';


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    const data = message.data
  if (message.messageType === "search") {
    const selectedText = encodeURIComponent(data.selectedText);
    const searchUrl = `https://www.google.com/search?q=${selectedText}`;
    const youtubeUrl = `https://www.youtube.com/results?search_query=${selectedText}`;
    const googleImage = `https://www.google.com/search?q=${selectedText}&tbm=isch&source=lnms&sa=X&ved=0ahUKEwjmso2E18T9AhW6SaQEHQIYCP4Q_AUIjwkoAQ&biw=1280&bih=700&dpr=2`;

    chrome.tabs.create({ url: searchUrl , active: false });
    chrome.tabs.create({ url: youtubeUrl  , active: false});
    chrome.tabs.create({ url: googleImage  , active: false});

    sendResponse({success : true})
  }
  else if (message.messageType === "insert"){

    fetch(url, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': contentType,
      },
      body: data.selectedText,
    })
      .then(response => {
        // handle response
      })
      .catch(error => {
        // handle error
      });

        sendResponse({success: true})
  }
});
//


// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.selectedText) {
//     const data = message.selectedText

//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'accept': '*/*',
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': contentType,
//       },
//       body: data,
//     })
//       .then(response => {
//         // handle response
//       })
//       .catch(error => {
//         // handle error
//       });

//   }
// });


// Listen for messages from the content script

// chrome.commands.onCommand.addListener((run-money) => {
//   console.log(`Command "${run-money}" triggered`);
// });
