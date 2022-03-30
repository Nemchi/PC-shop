const modalWindow = document.querySelector('.modal');
const modalButton = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');

/*Вешаем цикл на кнопки "Оставить заявку" открытие и закрытие модалки*/
modalButton.forEach((item) => {
  item.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    body.classList.add('noscroll')
  })
});

/*Делаем закрытие модального окна по нажатию в пустое место*/
modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll')
  }
});

/*Делаем закрытие модального окна по нажатию накрестик*/
modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  body.classList.remove('noscroll')
})