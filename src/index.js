import './css/style.css';
import './css/mobile/mobile-style.css'
import './css/pen/style.css';
import './css/shapes/style.css';
import './css/3D-shapes/style.css';
// import './css/square/style.css';


import './js/app';

const itemListFocus = document.querySelectorAll('.sub-tool-panel__item-list');
itemListFocus.forEach(item => {
    item.addEventListener('click', () => {

        import('./css/square/style.css').then(() => {
            console.log('Style changed!');
        });
        // let squareLink = document.createElement('link');
        // squareLink.id = 'squareLink';
        // squareLink.rel = 'stylesheet';
        // squareLink.href = './css/square/style.css';
        // document.head.appendChild(squareLink);
        // console.log(item);
    })
})
