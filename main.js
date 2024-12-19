let select_from = document.querySelector('.select_from')
let select_to = document.querySelector('.select_to')
let amountInput = document.querySelector('#amount')
let converterBtn = document.querySelector('.converter-btn')
let money = document.querySelector('.money')
let fromImg = document.querySelector('.fromImg')
let toImg = document.querySelector('.toImg')

const SelectData = async () => {
    const res = await fetch(url, options)
    const { result } = await res.json()

    for (const key in result) {
        const option = document.createElement('option')
        option.key = key
        option.textContent = key

        select_from.appendChild(option)
    }

    for (const key in result) {
        const option = document.createElement('option')
        option.key = key
        option.textContent = key

        select_to.appendChild(option)
    }
}

SelectData();

select_from.addEventListener("change", (e) => {
    let dinamicURL = e.target.value.toLowerCase().slice(0,2)
    fromImg.src = `https://flagcdn.com/20x15/${dinamicURL}.png`
})

select_to.addEventListener("change", (e) => {
    let dinamicURL = e.target.value.toLowerCase().slice(0,2)
    toImg.src = `https://flagcdn.com/20x15/${dinamicURL}.png`
})

// api +?from=${'USD'}&to=${'UZS'}&amount=${100},options

converterBtn.addEventListener('click', () => {
    if(!amountInput.value) {
        alert('Tupay amount inputni toldir')
    } else {
        pull()
    }
})

const pull = async () => {
    const response = await fetch(`api +?from=${select_from.value}&to=${select_to.value}&amount=${amountInput.value},options`)
    const data = await response.json()
    console.log(data);
}
