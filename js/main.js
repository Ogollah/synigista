//event listeners
function eventListeners() {
    const ui = new UI();

    // feedback control
    document.addEventListener("click", function(){
        ui.onTestimonialChange();
    })


}

// constructor function
function UI(){  

}

UI.prototype.onTestimonialChange = function() {
    let firstChild, lastChild;
    const prevArrow = document.querySelector("#cf-feedback-prev");
    const nextArrow = document.querySelector("#cf-feedback-next");
    const feedback = document.querySelector(".cf-feedback ul");

    if(event.target === prevArrow) {
        lastChild = feedback.lastElementChild;
        feedback.insertAdjacentElement("afterbegin", lastChild);
    } else if (event.target === nextArrow) {
        firstChild = feedback.firstElementChild;
        feedback.insertAdjacentElement("beforeend", firstChild);
}

}
//calling event listeners
eventListeners();