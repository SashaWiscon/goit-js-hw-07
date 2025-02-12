import { galleryItems } from './gallery-items.js';
// Change code below this line


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
 
  
  const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}">;
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscapeCloseModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscapeCloseModal);
      },
    },
  
  );
 
  instance.show() 
 

  function onEscapeCloseModal(event) {
 if (event.key=== "Escape") {
  //  console.log("Escape works");
   instance.close();
  } 
}
}












