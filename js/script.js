const askbutton= document.getElementById("askbutton");
const askInput= document.getElementById("askInput");

const answerdiv = document.getElementById("answer");
const questiondiv = document.querySelector(".question");
const questionText = document.querySelector(".questionText");
const questionDisplay = document.querySelector(".questionDisplay");
const askAgain = document.querySelector(".askAgain");


askbutton.addEventListener("click", askFn)
askAgain.addEventListener("click", askAgainFN)

function askFn() {
    const randomNum = Math.floor(Math.random() * 20)+1;  // 
    const imgsrc = "../magic/magic8ball_" + randomNum + ".png";
    console.log(imgsrc)

    const imgtag = document.createElement("img")


    imgtag.setAttribute("src", imgsrc);
    // answerdiv.innerHTML= ""
    answerdiv.appendChild(imgtag);
  questiondiv.classList.toggle("hidden");
  questionDisplay.innerHTML= askInput.value;
  questionText.classList.toggle("hidden");
}

function askAgainFN(){
    askInput.value = ""
    answerdiv.innerHTML= ""
    questiondiv.classList.toggle("hidden");
    questionText.classList.toggle("hidden");

}

