const button = document.getElementById("button");
const numberInput = document.getElementById("number");

button.addEventListener("click", function () {
  const numDice = parseInt(numberInput.value) || 1;
  const diceContainer = document.getElementById("diceContainer");
  const result = document.getElementById("result");

  // Clear previous results
  diceContainer.innerHTML = "";
  result.textContent = "";

  // Restrict number of dice between 1 and 4
  if (numDice < 1 || numDice > 6) {
    alert("Please enter a number between 1 and 6!");
    return;
  }

  let rolls = [];

  // Generate dice images
  for (let i = 0; i < numDice; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    rolls.push(randomNumber);

    const img = document.createElement("img");
    img.src = `dice${randomNumber}.png`; // make sure image names match
    img.classList.add("dice");
    diceContainer.appendChild(img);
  }

  // Display result text
  result.textContent = `You rolled: ${rolls.join(", ")}`;
});
