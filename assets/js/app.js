const icon = document.querySelector('#icon');
const button = document.querySelector('#button');
const textIcon = document.querySelector('.text__icon');
const carreRouge = document.querySelector('.carre__rouge');
const carresRouges = document.querySelectorAll('.carre__rouge');


/**
 * @description Fonction pour changer la couleur de fond pour violet si plus petit que 768px, et vert si plus grand ou égal.
 * @param {MediaQueryList} mediaQueryList 
 */

function switchBackgroundColor(mediaQueryList) {
    mediaQueryList.matches ? document.body.style.backgroundColor = 'violet' : document.body.style.backgroundColor = 'green';
}

const mediaQueryList768px = window.matchMedia('(min-width: 768px)');

switchBackgroundColor(mediaQueryList768px);

mediaQueryList768px.addEventListener('change', () => {switchBackgroundColor(mediaQueryList768px)});



/**
 * @description Fonction pour faire apparaître le bouton si plus grand que 1024px.
 * @param {MediaQueryList} mediaQueryList 
 */

function showButton(mediaQueryList) {
    if (mediaQueryList.matches) {
        button.classList.remove('hidden');
    }
    button.classList.toggle('hidden');
}

const mediaQueryList1024px = window.matchMedia('(max-width: 1024px)');

showButton(mediaQueryList1024px);

mediaQueryList1024px.addEventListener('change', () => {showButton(mediaQueryList1024px)});


/**
 * @description Fonction pour faire apparaître l'icône si plus petit que 640px. Si plus grand ou égal, on affiche le string "connection".
 * @param {MediaQueryList} mediaQueryList 
 */

function showIcon(mediaQueryList) {
    if (mediaQueryList.matches) {
        icon.classList.remove('hidden');
    } else {
        textIcon.classList.remove('hidden');
        textIcon.textContent = 'connection';
    }
    icon.classList.toggle('hidden');
    textIcon.classList.toggle('hidden');
}

const mediaQueryList640px = window.matchMedia('(min-width: 640px)');

showIcon(mediaQueryList640px);

mediaQueryList640px.addEventListener('change', () => {showIcon(mediaQueryList640px)});


/**
 * @description Fonction pour faire apparaître les autres carrés rouges.
 * @param {MediaQueryList} mediaQueryList 
 */

function showCarresRouges(mediaQueryList) {
    if (mediaQueryList.matches) {
        for(let carreRouge of carresRouges) {
            carreRouge.classList.remove('hidden');
        } 
    } else {
        for(let i = 3; i <= 7; i++) {
            carresRouges[i].classList.add('hidden');
        }
    }
}

const mediaQueryListMax1024px = window.matchMedia('(min-width: 1024px)');

showCarresRouges(mediaQueryListMax1024px);

mediaQueryListMax1024px.addEventListener('change', () => {showCarresRouges(mediaQueryListMax1024px)});











/*Notes*/
/*function switchBackgroundColor(mediaQueryList) {
    if(mediaQueryList.matches) {
        document.body.style.flexDirection = 'row';
    } else {
        document.body.style.flexDirection = 'column';
    }
}

const mediaQueryList = window.matchMedia('(min-width: 700px)');

switchBackgroundColor(mediaQueryList);

mediaQueryList.addEventListener('change', () => {switchBackgroundColor(mediaQueryList)}); */
