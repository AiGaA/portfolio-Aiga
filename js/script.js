const open_modal = document.getElementById('open_modal');
const modal_container = document.getElementById('modal_container');
const close_modal = document.getElementById('close');

open_modal.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close_modal.addEventListener('click', () => {
    modal_container.classList.remove('show');
});