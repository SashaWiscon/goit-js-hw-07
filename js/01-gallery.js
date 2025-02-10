import { galleryItems } from './gallery-items.js';
// Change code below this line
// модалка  escape  - метод close уже существует, надо выбрать момент огда его вызвать. key?

console.log(galleryItems);

const container = document.querySelector(".gallery");
const markup = galleryItems.map(item => `
   <li class="gallery__item js-target">
     <a class="gallery__link js-target" href="${item.original}">
       <img class="gallery__image js-target" src="${item.preview}" 
        data-source="${item.original}"
        alt="${item.description}">
     </a>
    </li>
`);

container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener("click", onclick);

function onclick(evt) {
     evt.preventDefault();
    if (!evt.target.classList.contains("js-target")) {
        return;
    }
    // `<img src="${galleryItems.original}">`;
  
  const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}">;
`);
  instance.show() 
  window.addEventListener("keydown", onEscapeCloseModal); 
}


function onEscapeCloseModal(event) {
 if (event.key=== "Escape") {

   console.log("Escape works");
   instance.close();
  } 
}



