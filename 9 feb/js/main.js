let age = 17;
const ageBtn = document.querySelector('.age-btn');
const ageText = document.querySelector('.show-age');

ageBtn.addEventListener('click', increaseAge);

function increaseAge() {
    age++;
    if (age <= 21) {
        showAge();
    }
}

function showAge() {
    ageText.textContent = `<h1> ${age} </h1>`;
}