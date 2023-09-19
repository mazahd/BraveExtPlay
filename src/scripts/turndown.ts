
// For Node.js
import TurndownService from 'turndown'

// A helper function to get the selected text in HTML format
function getSelectedHTML() {
  let sel = window.getSelection();
  let range = sel.getRangeAt(0);
  let div = document.createElement('div');
  div.appendChild(range.cloneContents());
  return div.innerHTML;
}

// A function to convert selected HTML to Markdown
function htmlToMarkdown(html) {
  let turndownService = new TurndownService();
  return turndownService.turndown(html);
}

// Get the selected HTML and convert it to Markdown
document.addEventListener('mouseup', () => {
  let selectedHTML = getSelectedHTML();
  let markdown = htmlToMarkdown(selectedHTML);
  console.log(markdown);
});

