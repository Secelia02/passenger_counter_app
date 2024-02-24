let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");


function save() {
  let savedCount = ` ${count} - `
  saveEl.innerText += savedCount;
  count = 0
  countEl.innerText = count;
}




