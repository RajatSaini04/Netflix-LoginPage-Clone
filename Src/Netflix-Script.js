// // FAQ 

let faq = document.querySelectorAll(".faq-item")

faq.forEach(faqitem => {

    const answer = faqitem.querySelector(".faq-answer")
    const icon = faqitem.querySelector(".icon-plus")
    const icon2 = faqitem.querySelector(".icon-plus2")

    faqitem.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent this click from propagating to the document

        faq.forEach(item => {
            if (item !== faqitem) {
                item.querySelector(".faq-answer").classList.remove("active")
                item.querySelector(".icon-plus").classList.remove("active")
                item.querySelector(".icon-plus2").classList.remove("active")
            }
        });

        answer.classList.toggle("active")
        icon.classList.toggle("active")
        icon2.classList.toggle("active")
    })
});
