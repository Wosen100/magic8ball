const askbutton= document.getElementById("askbutton");
const askInput= document.getElementById("askInput");
const answers = ["yes" ,"No", "MayBe", "Ask Later"]
const answerdiv = document.getElementById("answer")
const asklaterImg = "https://wisernow.com/wp-content/uploads/2020/08/magic8ball.png"
const ballImage = document.getElementById("ball")
askbutton.addEventListener("click", askFn)

function askFn() {
    const index = Math.floor(Math.random() * answers.length);
    console.log(answers[index]);
    document.querySelector('#askInput').value = answers[index]
    ballImage.setAttribute("src", asklaterImg);
}

