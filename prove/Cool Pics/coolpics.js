const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');
const gallery = document.querySelector('.gallery');

btn.addEventListener('click', toggleMenu);
gallery.addEventListener('click', viewImage);
document.addEventListener('keydown', closeWithEsc);

function toggleMenu() {
    menu.classList.toggle('hide');
}

function viewImage(event) {
    if (event.target.tagName == 'IMG') {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        modal.innerHTML = `
            <button class="close-viewer">X</button>
            <img src="norris-full.jpg" alt="Norris geyser basin">
        `;

        document.body.appendChild(modal);

        modal.addEventListener('click', closeModal);
    }
}

function closeModal(event) {
    if (event.target.className == 'modal' || event.target.className == 'close-viewer') {
        document.querySelector('.modal').remove();
    }
}

function closeWithEsc(event) {
    if (event.key == 'Escape') {
        const modal = document.querySelector('.modal');

        if (modal) {
            modal.remove();
        }
    }
}