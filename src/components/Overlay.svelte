<script>

  import { createEventDispatcher, onDestroy } from 'svelte';
  import Draggable from './Draggable.svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  // @ts-ignore
  let modal;

  // @ts-ignore
  const handle_keydown = e => {
    if (e.key === 'Escape') {
      close();
      return;
    }

    if (e.key === 'Tab') {
      // trap focus
      // @ts-ignore
      const nodes = modal.querySelectorAll('*');
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused = typeof document !== 'undefined' && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      // @ts-ignore
      previously_focused.focus();
    });
  }
  export let left = 20
    export let top = 20

    let dragging ;

    function start() {
        dragging = true
    }

    function stop() {
        dragging = false
    }

    function moveComponent( event ) {
        if ( dragging ) {
            left = left + event.movementX;
            top = top + event.movementY;
        }
    }


</script>


<svelte:window on:keydown={handle_keydown}  on:mouseup="{stop}" on:mousemove="{moveComponent}"/>


<div class=" modal-bg" on:click={close}> close </div>


<div class="float"  role="dialog" aria-modal="true" bind:this={modal} on:mousedown={start}>


  <div>

    <slot/>

  </div>


</div>






<style>

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

