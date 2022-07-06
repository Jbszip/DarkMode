//Botón night-mode
let darkMode = window.localStorage.getItem('mode')
const modes_items = document.querySelector('.mode')
const nmbtn = document.querySelector('.modes');
!darkMode || darkMode === undefined ? console.log('light mode'): modes_items.classList.add('dark-mode')
nmbtn.addEventListener('click', () => {
  modes_items.classList.contains('dark-mode') ? window.localStorage.clear(): window.localStorage.setItem('mode', 'dark-mode');
  modes_items.classList.toggle('dark-mode')
  const menu_items = document.querySelector('.menu_items')
  menu_items.classList.remove('opened')
})
