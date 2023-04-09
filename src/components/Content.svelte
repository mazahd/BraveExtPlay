<script>


  

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

const handleKeyDown = async e => {
  if (e.key !== "c") return;

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
};

document.addEventListener('keydown', handleKeyDown);


</script>
