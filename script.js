
function operation() {

    const n1 = document.querySelector('#n1').value;
    const n2 = document.querySelector('#n2').value;
    const seletor = document.querySelector('#seletor').value;

    const total = document.querySelector('#total');

    if (seletor === 'sum')total.innerHTML = +n1 + +n2;
    if (seletor === 'sub')total.innerHTML = +n1 - +n2;
    if (seletor === 'mul')total.innerHTML = +n1 * +n2;
    if (seletor === 'div')total.innerHTML = +n1 / +n2;
};