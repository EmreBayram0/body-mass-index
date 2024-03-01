let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let calculator = document.querySelector(".calculator")
let result = document.querySelector(".textResult")
let container = document.querySelector(".container")
let image = document.querySelector(".image")
calculator.addEventListener("click", calculatorBMI)

function calculatorBMI() {
    let weightValue = Number(weight.value);
    let heightValue = Number(height.value);
    if (isNaN(weightValue) || isNaN(heightValue)) {
        result.textContent = "Lütfen Sadece Sayı Giriniz"
        weight.value = ""
        height.value = ""
        setTimeout(() => {
            result.textContent = ""
        }, 3000);
    } else {
        heightValue = heightValue/100   
        let bmi = weightValue / (heightValue * heightValue)
        if (bmi <= 18.5) result.textContent = "Zayıfsınız"
        else if (bmi > 18.5 && bmi <= 24.9) result.textContent = "Normal Kilolusunuz"
        else if (bmi >= 25 && bmi <= 29.9) result.textContent = "Fazla Kilolusunuz"
        else if (bmi >= 30 && bmi <= 34.9) result.textContent = "Obez(1. Derece Obezite)"
        else if (bmi >= 35 && bmi <= 39.9) result.textContent = "Aşırı Obez(2. Derece Obezite)"
        else if (bmi >= 40) {
            image.style.display = "block"
        }

        setTimeout(() => {
            result.textContent = ""
            image.style.display = "none"
        }, 3000);
        weight.value = ""
        height.value = ""
    }

}