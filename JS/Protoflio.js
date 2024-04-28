// ----About me  -- And --  My Works ----


// description and info cards
let imgPages = document.querySelectorAll(".img-page");
let infoWorks = document.querySelectorAll(".info-work");

imgPages.forEach((page, index) => {
    page.addEventListener("mouseover", () => {
        infoWorks[index].style.display = "block";
    });
    page.addEventListener("mouseleave", () => {
        infoWorks[index].style.display = "none";
    });
});


// display cards
let displayOne = document.getElementById("display-one");
let displayTow = document.getElementById("display-tow");
let moveOne = document.getElementById("move-one");
let moveTow = document.getElementById("move-tow");

function display() {
    moveOne.addEventListener("click", () => {
        displayOne.style.display = "block";
        displayTow.style.display = "none";
    });

    moveTow.addEventListener("click", () => {
        displayOne.style.display = "none";
        displayTow.style.display = "block";
    });

}
display();

// 1 and 2 active

// active polit
// let btns = document.querySelectorAll(".move-btn");
// btns.forEach(btn => {
//     btns[0].addEventListener("click", () => {
//         btns[0].classList.add("active");
//         btns[1].classList.remove("active");
//     })

//     btns[1].addEventListener("click", () => {
//         btns[1].classList.add("active");
//         btns[0].classList.remove("active");
//     })

// });

let btns = document.querySelectorAll(".move-btn");
btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btns.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    });
});