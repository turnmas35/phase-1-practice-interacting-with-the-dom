const counter = document.getElementById("counter")
let number = 0
let intervalID = setInterval(countUp, 1000);

function countUp() {
 number = number + 1
 counter.innerText = number
}

const minusBtn = document.getElementById("minus")

minusBtn.addEventListener("click", function (event) {
    number = number - 1
    counter.innerText = number
})

const plusBtn = document.getElementById("plus")

plusBtn.addEventListener("click", function (event) {
    number = number + 1
    counter.innerText = number
})

const heartBtn = document.getElementById("heart")
const likes = document.getElementById('likes');

  heartBtn.addEventListener('click', function () {
    const likeItem = document.createElement('li');

  });