<script>
  import hotkeys from 'hotkeys-js';

  let keyRecorder;
  let shortcutArray = [];

  const modifiers = ['Meta', 'Control', 'Alt', 'Shift'];
  const keyReplacements = {
    'Meta': '⌘',
    'Command': '⌘',
    'Control': '⌃',
    'Alt': '⌥',
    'Shift': '⇧'
  };

  function updateShortcutPreference(newShortcut) {
    const newShortcutString = newShortcut.join('+').replace(/Meta|Command|Control|Alt|Shift/g, match => keyReplacements[match]);
    if (newShortcutString !== localStorage.getItem('shortcut')) {
      localStorage.setItem('shortcut', newShortcutString);
    }
  }

  function recordShortcut() {
    shortcutArray = [];
    hotkeys.unbind();

    hotkeys('*', { keyup: true }, (event) => {

      console.log(event.key)

      // if (type === 'keydown') {
      //   if (shortcutArray.length < 3) {
      //     if (shortcutArray.length === 0 && modifiers.includes(key) || !modifiers.includes(key)) {
      //       shortcutArray.push(key === ' ' ? 'Space' : key);
      //       shortcutArray = [...new Set(shortcutArray)];
      //     }
      //   } else {
      //     updateShortcutPreference(shortcutArray);
      //     hotkeys.unbind();
      //   }
      // } else if (type === 'keyup') {
        // if (shortcutArray.length === 1) {
          // shortcutArray = ['Command', 'Shift', 'G'];
          // updateShortcutPreference(shortcutArray);
          // hotkeys.unbind();
        // } else if (shortcutArray.length > 1) {
        //   shortcutArray.pop();
        // }
      // }
    });
  }

  function init() {
    const savedShortcut = localStorage.getItem('shortcut');
    shortcutArray = savedShortcut ? savedShortcut.split('+') : [];
  }

  init();
</script>
<div class="shortcut-control">
  <p>Hotkey:</p>
  <input
    bind:this="{keyRecorder}"
    id="key-recorder"
    type="button"
    value="{shortcutArray.length > 0
      ? shortcutArray
          .map(key => keyReplacements[key] || key)
          .join(' + ')
      : 'Recording...'}"
    on:click="{recordShortcut}"
  />
</div>
<style>
  .shortcut-control {
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-size: 16px;
    color: violet;
    margin: 0;
  }
  #key-recorder {
    background: white;
    border-radius: 4px;
    padding: 8px;
    border: none;
    color: black;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>

