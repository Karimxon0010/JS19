let elModalWrapper = document.createElement("div");

elModalWrapper.classList.add("modal_wrapper");

document.body.appendChild(elModalWrapper);

window.onclick = (e) => {
    if(e.target == elModalWrapper){
        elModalWrapper.style.display = "none";
    }    
};

function openModal(){
    elModalWrapper.style.display = "flex";

    let modal = document.createElement("div");
    let button01 = document.createElement("button");

    modal.classList.add("modal");
    button01.classList.add("button01");
    button01.textContent = "X"

    elModalWrapper.appendChild(modal);
    modal.appendChild(button01);
    button01.textContent = "X"
    button01.onclick = closeModal
}

function closeModal(){
    elModalWrapper.style.display = "none";
}







// let cardWrapper = document.createElement("div")

// cardWrapper.classList.add("card_wrapper")

// for(let i = 0; i < 12; i++){
//     let addCard = document.createElement("div")
//     let cardImg = document.createElement("img")
//     let cardH3 = document.createElement("h3")
//     let cardP = document.createElement("p")
    
    // addCard.classList.add("card")
//     cardImg.src = "https://picsum.photos/200/200"
//     cardH3.textContent = "Title"
//     cardP.textContent = "Lorem ipsum dolor sit amet."

//     cardWrapper.appendChild(addCard)
//     addCard.appendChild(cardImg)
//     addCard.appendChild(cardH3)
//     addCard.appendChild(cardP)
// }

// document.body.appendChild(cardWrapper)





// let addUl = document.querySelector(".ul")

// for(let i = 0; i < 10; i++) {
//     let addLi = document.createElement("li")
    
    
//     addUl.appendChild(addLi)    
// }
    
