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

  let mes = "this is a message from ts "


  document.addEventListener("selectionchange", function() {
  // Get the selected text
  var selectedText = window.getSelection().toString();

    mes = selectedText

  // Send the selected text to the background script
  chrome.runtime.sendMessage({selectedText: selectedText});
});


</script>

<div class="overlay">
  {mes}

</div>


<style>
    .overlay {
  position: fixed;
  left: 50%;
  top: 50%;
  width: calc(100vw - 4em);
  max-width: 32em;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  padding: 1em;
  border-radius: 1em;
  background: white;
    }
</style>


