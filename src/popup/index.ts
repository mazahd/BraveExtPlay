import Options from "src/components/Options.svelte";
import PopUp from "src/components/PopUp.svelte"
import { storage } from "src/storage";

const target = document.getElementById("app");

// function render() {
//     // storage.get().then(({ count }) => {
//     //     new Options({ target, props: { count } });
//     // });
//   new PopUp({target})
// }

// document.addEventListener("DOMContentLoaded", render);


new PopUp({target})
