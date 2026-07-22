window.alert("Welcome to My Portfolio Website!");

console.log("Portfolio loaded.");

window.onload = function () {

    const title = document.getElementById("title");

    if (title) {
        title.innerText = "Welcome to Precious B. Marquez Portfolio";
        title.style.color = "purple";
        title.style.fontSize = "40px";
    }

    console.log("Page loaded.");

};
let darkmode = false;

function changeTheme() {
    if(!darkmode){
        document.body.style.backgroundColor ="#3c074d";
        document.body.style.color = "white";
        darkmode = true;
        console.log("Dark Mode Enable");
    }else{
        document.body.style.backgroundColor ="black";
        document.body.style.color = "purple";
        darkmode = false
        console.log("Lightmode Enable");

        

    }


}

function showInfo() {

    alert(
        "PERSONAL INFORMATION\n\n" +
        "Name: Precious B. Marquez\n" +
        "Age: 20\n" +
        "Course: Bachelor of Science in Information Technology\n" +
        "School: Holy Child Central Colleges Inc.\n" +
        "Address: Prk. Andam, Liwanay, Bo.1, Banga, South Cotabato\n" +
        "Email: pbmarquez2024@hccci.edu.ph\n" +
        "Phone: 09702264070\n" +
        "Favorite Color: Purple\n" +
        "Hobby: Playing Volleyball\n" +
        "Goal: To become a successful IT Professional."
    );

    console.log("Personal information displayed.");

}

function changeHeading() {

    const title = document.getElementById("title");

    if (title) {
        title.innerHTML = "BSIT Student Portfolio";
    }

    console.log("Heading changed.");

}

function changeBackground() {

    const about = document.getElementById("about");

    if (about) {
        about.style.backgroundColor = "#d8b4e2";
    }

    console.log("Background color changed.");

}

function resetBackground() {

    const about = document.getElementById("about");

    if (about) {
        about.style.backgroundColor = "#efcff6";
    }

    console.log("Background reset.");

}

function greetVisitor() {

    alert("Thank you for visiting my portfolio!");

    console.log("Greeting displayed.");

}
