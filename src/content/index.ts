import Content from '../components/Content.svelte'

const overlay = new Content({
          target: document.body,
        });

let f = false

if (f){
  overlay.$destroy;
}

