
<script lang="ts">
    // import { onMount } from "svelte";

    //       let tabss = [];

      // chrome.windows.getAll({populate: true}, (windows: chrome.windows.Window[]) => {
      //   windows.forEach((window) => {
      //   let loopNumber = 1;
      //   windowss = [...windowss, { windowId : window.id , windowNumber: loopNumber }]
      //   loopNumber += 1
      //     window.tabs.forEach((tab) => {
      //     windowss[]
      //     });
      //   });
      //   });
      
      // chrome.windows.getAll({populate: true}, (windows: chrome.windows.Window[]) => {
      //   windows.map((window , index) => {
      //   windowss = [...windowss, { windowId : window.id , windowNumber: index + 1 }]
        // console.log(window.id , index)

        // });
        // });

      // chrome.windows.getAll({populate: true}, (windows: chrome.windows.Window[]) => {
      //   windows.forEach((window) => {
      //     window.tabs.forEach((tab) => {
      //       tabss = [...tabss, { windowId: window.id, tabId: tab.id, fav: tab.favIconUrl, title: tab.title , tabURL: tab.url }]
      //     });
      //   });
      //   });
      

    // chrome.windows.onCreated.addListener(function(window){
    //   window.tabs.forEach((tab) => {
    //     tabss = [...tabss, { windowId: window.id, tabId: tab.id, fav: tab.favIconUrl, title: tab.title , tabURL: tab.url }]
    //   });
    // });


    // chrome.tabs.onCreated.addListener(function(tab){
    //     tabss = [...tabss, {  tabId: tab.id, fav: tab.favIconUrl, title: tab.title , tabURL: tab.url }]
    // })



// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab ) {
//   let index = tabss.findIndex(obj => obj.tabId === tabId);
//       if (index !== -1) {
//         console.log(tab.status)
        // if(tab.status == 'complete') {
          // console.log(tabss[index].title + " New Title is : " + tab.title)
          // tabss[index].title =  tab.title 
          //           tabss[index].fav =  tab.favIconUrl 
          //           tabss[index].tabId =  tab.id 

          //           tabss[index].tabURL =  tab.url 

        // }
//       }
//     });


// chrome.tabs.onRemoved.addListener(function(tabId) {
//   let index = tabss.findIndex(obj => obj.tabId === tabId);
//       console.log("removeds " + index)
//       if (index !== -1) {
//         console.log(tabss[index].title)
//         tabss.splice(index, 1)
//         tabss = tabss
        // if(tab.status == 'complete') {
          // console.log(tabss[index].title + " New Title is : " + tab.title)
          // tabss[index].title =  tab.title 
          //           tabss[index].fav =  tab.favIconUrl 
          //           tabss[index].tabId =  tab.id 

          //           tabss[index].tabURL =  tab.url 

        // }
    //   }
    // });

  // function createTab(){
  //   chrome.tabs.create({ url: "https://example.com" });
  // }

  // function groupTab(){
  //     const tabIds = tabs.map(({ id }) => id);
  // const group = await chrome.tabs.group({ tabIds });
  // await chrome.tabGroups.update(group, { title: "DOCS" });
  // }


    let money = "money"

</script>


  <div>{money}</div>

  this is a popup




    <style>


  div{
    width: 20rem;
  }

    </style>
