const burger = document.querySelector("#burger");

const menu  = document.querySelector('#mob_menu');

const closer = document.querySelector("#close");

burger.addEventListener('click', function(){
    menu.style.left = 0
})
closer.addEventListener('click', function(){
    menu.style.left = "100%"
})

let a = [];

for (let i = 2; i <= 1000; i += 2) {
    a.push(i);
}

console.log();