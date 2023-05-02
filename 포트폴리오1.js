const welcometext = "Welcome!";
const welcome = document.querySelector(".hometext1")

let index = 0;

function Welcome() {
    if (welcometext.length > index) {
        welcome.textContent += welcometext[index++];
    }
    else {
        clearInterval(StopWelcome);
    }
} // welcome 타이핑 함수

const StopWelcome = setInterval(Welcome, 150); // welcome 시간 조절

/* ---------------- Welcome Typing ---------------- */
