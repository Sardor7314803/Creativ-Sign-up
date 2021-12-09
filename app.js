const defalutIcon = document.querySelector('.defalut');
const IconsOne = document.querySelector('.icons-1');
const IconsTwo = document.querySelector('.icons-2');
const NameInput = document.querySelector('.name');
const PassInput = document.querySelector('.password');


NameInput.addEventListener('click', () => {
    defalutIcon.style.display = 'none';
    IconsOne.style.display = 'block';
    IconsTwo.style.display = 'none';
})

PassInput.addEventListener('click', () => {
    defalutIcon.style.display = 'none';
    IconsOne.style.display = 'none';
    IconsTwo.style.display = 'block';
})