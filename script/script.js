let allDomItems = {
  screen: document.querySelector("[readonly]"),
  weightInput: document.getElementById("weight"),
  heightInput: document.getElementById("height"),
  calculateBtn: document.querySelector("[calculate-btn]"),
  output: document.querySelector("[output]"),
  reset: document.querySelector("[reset]")
};

allDomItems.calculateBtn.addEventListener("click", () => {
    allDomItems.output.textContent = 'Output'

  let weight = allDomItems.weightInput.value;
  let height = allDomItems.heightInput.value;

  allDomItems.output.classList.remove("error", "good", "regular");


  if (weight && height) {
    const calculate = parseFloat(weight / height ** 2).toFixed(2);
    
    if (calculate <= 18.5) {
      allDomItems.output.textContent = "You are underweight😢";
      allDomItems.output.classList.add("error");
    } else if (calculate > 18.5 && calculate <= 24.9) {
      allDomItems.output.textContent = "Your weight is healthy😊";
      allDomItems.output.classList.add("good");
    } else if (calculate >= 25 && calculate <= 29.9) {
      allDomItems.output.textContent = "You are overweight😓";
      allDomItems.output.classList.add("error");
    } else {
      allDomItems.output.textContent = "You are obese😶";
      allDomItems.output.classList.add("error");
    }
  } else if (weight && !height) {
    allDomItems.output.textContent = 'Output'
    allDomItems.output.textContent = "Please enter height";
    allDomItems.output.classList.add("error");
  } else if (!weight && height) {
    allDomItems.output.textContent = "Please enter weight";
    allDomItems.output.classList.add("error");
  }
  allDomItems.screen.value = `${calculate}`;
});

allDomItems.reset.addEventListener('click', () => {
    allDomItems.output.textContent = 'Output'
    allDomItems.output.classList.remove("error", "good");
    allDomItems.output.classList.add('regular')
})