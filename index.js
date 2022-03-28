//index.js
//var number = 5;
//let name = S

//document.writeln(number)
//alert("Hello World");

let hasJob = true;
if (hasJob) {
    document.writeln("Thanks for visiting, i'm currently employed.")
} else {
    document.writeln("Please look around, i'm currently looking for a position.")
}

let today = new Date();
let dayOfWeek = today.getDate();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since its the weekend, please be patient with my returning your mail.")
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const first = "first";

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    showMessage("Sending your message...");
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #999999;";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}