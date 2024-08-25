document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("animationPlayed")) {
        // Run the intro animation
        runIntroAnimation();
    } else {
        // Skip the animation and directly show the main content
        document.getElementById("intro").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
});

function runIntroAnimation() {
    const terminal = document.getElementById("terminal");
    const introText = "User/> run 0xDEAD10CK_Porfolio.html\n";
    let i = 0;

    function typeWriter() {
        if (i < introText.length) {
            terminal.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Typing speed
        } else {
            setTimeout(exitAnimation, 1000); // Delay before exit animation
        }
    }

    typeWriter();
    
    localStorage.setItem("animationPlayed", "true");
}

function exitAnimation() {
    const intro = document.getElementById("intro");
    intro.classList.add("fade-out"); // Apply the fade-out class to the intro section
    setTimeout(() => {
        intro.style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust timing to match your animation
}
