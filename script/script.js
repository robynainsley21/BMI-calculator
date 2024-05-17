let allDomItems = {
    screen: document.querySelector('[readonly]'),
    weightInput: document.getElementById('weight'),
    heightInput: document.getElementById('height'),
    calculateBtn: document.querySelector('[calculate-btn]')
}

allDomItems.calculateBtn.addEventListener('click', () => {
    let weight = allDomItems.weightInput.value
    let height = allDomItems.heightInput.value

    const calculate = parseFloat(weight / height**2).toFixed(2)
    allDomItems.screen.value = `${calculate}`
})