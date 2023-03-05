<!-- <script lang="ts"> -->
<!--     import { storage } from "src/storage"; -->
<!--     import { onMount } from "svelte"; -->
    <!-- import Options from "./Options.svelte"; -->

<!--     let count = 0; -->

<!--     onMount(() => { -->
<!--         storage.get().then((storage) => (count = storage.count)); -->
<!--     }); -->
<!-- </script> -->




<script>

  import Options from "./Options.svelte"

  let mes = "🎊 success 🎊"

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.searchGoogle) {
//       mes = "command recieved "
  // document.addEventListener("selectionchange", function() {
  // Get the selected text
  // var selectedText = window.getSelection().toString();

    // mes = selectedText
  // Send the selected text to the background script
  // chrome.runtime.sendMessage({selectedText: selectedText});
// });
//   }
// });

  document.addEventListener("keyup", function() {
  // Get the selected text
  var selectedText = window.getSelection().toString();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.greeting == "Hello from the background script!") {
      mes = "command recieved "

  // Send the selected text to the background script
  // chrome.runtime.sendMessage({selectedText: selectedText});
      }
});


});


</script>

<div class="overlay">
  {mes}

</div>


<style>
    .overlay {
  position: fixed;
  left: 50%;
  top: 90%;
  width: auto;
  max-width: 32em;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  padding: 1em;
  border-radius: 1em;
  background: white;
    }
</style>


