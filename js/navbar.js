// buttons
const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-new-btn');
const contactBtn = document.querySelector('.contact-btn');

// sections
const listSection = document.querySelector('.list-section');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-section');

listBtn.addEventListener('click', () => {
  listSection.classList.remove('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

addNewBtn.addEventListener('click', () => {
  formSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  listSection.classList.add('hidden');
});

contactBtn.addEventListener('click', () => {
  contactSection.classList.remove('hidden');
  contactSection.classList.add('flex');
  formSection.classList.add('hidden');
  listSection.classList.add('hidden');
});
