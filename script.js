let stages = [
  "1. Goal (I want to turn on light)",
  "2. Intention (Press switch)",
  "3. Action (Move hand)",
  "4. Execute (Press switch)",
  "5. Perceive (Light is ON)",
  "6. Interpret (Room is bright)",
  "7. Evaluate (Goal achieved)"
];

let i = 0;

function runStages() {
  i = 0;
  showNext();
}

function showNext() {
  if (i < stages.length) {
    document.getElementById("output").textContent = stages[i];
    i++;
    setTimeout(showNext, 1500);
  }
}
