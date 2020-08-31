const modalOverlay = document.querySelector('.modal-overlay');
const habilits = document.querySelectorAll('.produto');

for(let habilit of habilits){
    habilit.addEventListener("click", function(){

        const image = habilit.querySelector(".recipe__image").src;
        const header = habilit.querySelector(".recipe__title").textContent;
        const section = habilit.querySelector(".recipe__description").textContent; 

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = image;
        modalOverlay.querySelector('header').textContent = header;
        modalOverlay.querySelector('section').textContent = section;
    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove('active');
})