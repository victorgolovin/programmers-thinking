let usdFromUser = prompt('Введите сумму в долларах', 1);

let usd = parseInt(usdFromUser);

let rub = usdToRub(usd);

const usdToRub = (usd) => {
    let rub = usd * 91.67;
    
    return rub;
}

alert(`В рублях это: ${rub} руб.`);