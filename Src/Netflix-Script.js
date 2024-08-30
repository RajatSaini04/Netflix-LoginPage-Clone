// FAQ 

let faq = document.querySelectorAll(".faq")


faq.forEach(faq =>{

    const answer = faq.querySelector(".faq-answer")

    faq.addEventListener("click", () =>{

        answer.classList.toggle("active")
    })
})