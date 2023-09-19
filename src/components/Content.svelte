<script>
    import Overlay from "./Overlay.svelte";

    let money = [];
const systemPrompt = 'correct and optimize text bellow'
// const userPrompt = 'auto layut : create designs that grow to fill or shrink to fit, and reflow as their contents chanage.'

const OPENAI_API_KEY = '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';
const url = 'https://api.openai.com/v1/chat/completions';
const requestBody = {
  model: 'gpt-3.5-turbo',
  messages: [],
  temperature: 0.7,
};

const getSelectedText = () => {
  const element = document.activeElement;
  const isInTextField = element.tagName === "INPUT" || element.tagName === "TEXTAREA";
  return isInTextField
    ? element.value.substring(element.selectionStart, element.selectionEnd)
    : window.getSelection()?.toString() ?? "";
};


let overlay = false

const handleKeyDown = async e => {

      if (e.key === "s"){
        const selectedText = getSelectedText();
        money = [...money, selectedText]

      }
  if (e.key === "x") {
    overlay = true

  }
      if (e.key === 'Escape'){
        overlay = false
      }

  if (e.key === 'a'){
  const selectedText = getSelectedText();
  if (!selectedText) return;

  // const element = document.activeElement;
  // if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") return;

  requestBody.messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: selectedText }
  ];

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
 const activeEl = document.activeElement;
  if (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA') {
    activeEl.value = messageContent
  } else {
    navigator.clipboard.writeText(messageContent);
  }
} catch (error) {
  console.error('Error fetching data from API:', error);
}
}

};

document.addEventListener('keydown', handleKeyDown);
  function init(el){
    el.focus()
  }
    let left = 100;
	 let top = 100;
	
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}

</script>

<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
  money
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

{#if overlay}

  <Overlay> <textarea use:init type="text" bind:value={money}></textarea></Overlay>
  
{/if}



  <style>

  textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        resize: none;
      }

  </style>
