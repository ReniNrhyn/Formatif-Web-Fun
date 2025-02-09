let captchaText = document.getElementById('captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";


let userText = document.getElementById('textBox');
let submitButton = document.getElementById('submitButton');
let output = document.getElementById('output');
let refreshButton = document.getElementById('refreshButton');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
                'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                'q', 'r', 's', 't', 'u', 'v', 'w', 
                'x', 'y', 'z', '0', '1', '2', '3', 
                '4', '5', '6', '7', '8', '9'];

let emptyArr = [];
for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''), captchaText.width/4, captchaText.height/2);

userText.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            output.innerHTML = "Correct!";
            setTimeout (
                function(){
                    window.location='dashboard.html';
                },3000
            )
        } else {
            output.classList.add("incorrectCaptcha");
            output.innerHTML = "Incorrect, please try again!";
        }
    }
});

submitButton.addEventListener('click', function() {
    if (userText.value === c) {
        output.classList.add("correctCaptcha");
        output.innerHTML = "Correct!";
        setTimeout (
            function(){
                window.location='dashboard.html';
            },3000
        )
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Incorrect, please try again!";
    }
});

refreshButton.addEventListener('click', function() {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
    output.innerHTML = "";
});