 // Pop up box and input name
 var guestName = prompt("What is your name?");
 if (guestName == null || guestName == "") {
    Text = "Hey STRANGER! <br>Come, take a seat.<br>😌";
    document.getElementById("greeting").innerHTML = Text;
 } else {
    Text = "Hello, " + guestName + "! <br>Welcome to my web site.<br>🤯";
    document.getElementById("greeting").innerHTML = Text;
 }
window.onload = greeting ;

// Change font color of the guest name every 1 second
var colors = ["#000000", "#393E46", "#6D9886", "#F2E7D5", "#264653", "#2a9d8f", "#e76f51"];
 var currentColorIndex = 0;

 function changeColor() {
    var textElement = document.getElementById("greeting");
    textElement.style.color = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
 }
 setInterval(changeColor, 1000);

// Change font family of my nickname every 1 second
 var fonts = ["sans-serif","impact", "Times New Roman", "Verdana", "Courier New", "monospace"];
 var currentFontIndex = 0;
 
 function changeFont() {
   var textElement = document.getElementById("nont");
   textElement.style.fontFamily = fonts[currentFontIndex];
 
   currentFontIndex = (currentFontIndex + 1) % fonts.length; 
 }
 setInterval(changeFont, 1000);

// below this is for onmouseover and onmouseout events to change the picture of mine
function changeMe() {
    document.getElementById("me").src ="img/me2.jpg";
    document.getElementById("me2").innerHTML = "This was me in 2018"
}

function returnMe () {
    document.getElementById("me").src ="img/me1.png";
    document.getElementById("me2").innerHTML = "";
}

// My fullname
var fullName = "Piyapat Mekrungsimun";
var nickName = "Nont";

// My date of birth
let age = {
    day: 26,
    month: "September",
    year: 1993,
}

console.log(fullName);
console.log(nickName);

// below this is for changing text by pressing the button
function changeText() {
    document.getElementById("name").innerHTML = "My full name is " + fullName + " (PI • YA • PAT)" + "<br>" + " and my nickname is " + nickName + " (It sounds like 'bone,' but change the first letter to 'n' and say it shorter)." + "<br>" + "(hope this helps 🤷🏻‍♂️)";
}
function changeText2() {
    document.getElementById("name").innerHTML = age.day + " " + age.month + " " + age.year + " (I know-I know 🙂‍↕️)";
}

// below this are alert popup when click the images on work section
function popupImg() {
    alert("I had been playing the clarinet for 15 years and graduated with a degree in Classical Music from the Faculty of Fine and Applied Arts at Chulalongkorn University. I had worked as a musician until the pandemic in 2020. Then, I made the decision to change my career and leave my clarinet behind. 🥲 ");
}
function popupImg1() {
    alert("In 2020, I decided to leave my clarinet behind and pick up a camera instead. I became a videographer and video editor.📹");
}
function popupImg2() {
    alert("After a few years, I became interested in color grading and have been trying to improve at it, but I still have many things to learn. For now, I'm a freelance videographer, video editor, and working hard to get better at color grading.🎨");
}
