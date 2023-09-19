
<style>
  h1 {
    font-family: Arial, sans-serif;
  }
  input {
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .modal-bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);}


.float {
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

<script>
  import { onMount } from 'svelte';

  let inputElement;

  export let values = [];

  onMount(() => {
    inputElement.focus();
  });
</script>

<div class=" modal-bg" on:click={close}> close </div>


<div class="float"  role="dialog" aria-modal="true" >

<input 
    bind:this={inputElement} 
    bind:value={values.map(item => values.name)} 
    type="text" placeholder="Focus on me!"/>



  <div>

    

  </div>


</div>


