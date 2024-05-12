const num = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const input = document.querySelector("input");

num.forEach(a => {
    a.addEventListener('click', ()=>{
        input.textContent = (`${a.innerText}`);
    })
})

operator.forEach(b => {
    b.addEventListener('click', ()=>{
        console.log(`${b.innerText}`);
    })
})