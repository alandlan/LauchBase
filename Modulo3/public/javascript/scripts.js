const modalOverlay = document.querySelector('.modal-overlay');
const habilits = document.querySelectorAll('.habilidade');

for(let habilit of habilits){
    habilit.addEventListener("click", function(){

        const header = habilit.querySelector(".habilidade__content").textContent;
        const section = habilit.querySelector(".habilidade__info").textContent; 

        console.log(header);

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('header').textContent = header;
        modalOverlay.querySelector('section').textContent = section;
    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove('active');
})