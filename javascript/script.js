const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

document.addEventListener("DOMContentLoaded", async () => {
    if (!localStorage.getItem("animationPlayed")) {
        // Run the intro animation
        runIntroAnimation();
    } else {
        // Skip the animation and directly show the main content
        const homepage = document.getElementById("homepage");
        homepage.style.display = "block";
        document.getElementById("intro").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
});

const runIntroAnimation = async () => {
    const terminal = document.getElementById("terminal");
    const homepage = document.getElementById("homepage");
    const introText = "run 0xDEAD10CK_Porfotlio.html\n"; // Deliberate mistake here
    const correction = "Portfolio"; // Corrected part
    let i = 0;
    let j = introText.length;

    terminal.innerHTML += "User/> ";

    await sleep(1000);

    const typeWriter = async () => {
        if (i < introText.length) {
            terminal.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Typing speed
        } else if (i === introText.length) {
            await sleep(300); // Pause before realizing the mistake
            backspace(); // Start backspacing
        }
    }

    const backspace = async () => {
        if (j > 15) { // Backspace up to the mistake
            terminal.innerHTML = terminal.innerHTML.slice(0, -1);
            j--;
            setTimeout(backspace, 50); // Backspacing speed
        } else {
            await sleep(300); // Pause before retyping the correct word
            correctText(); // Start typing the correction
        }
    }

    const correctText = async () => {
        for (let k = 0; k < correction.length; k++) {
            terminal.innerHTML += correction.charAt(k);
            await sleep(100); // Typing speed for correction
        }
        terminal.innerHTML += ".html\n"; // Complete the line
        await sleep(1000);
        // You can add further actions or animations here
        exitAnimation(); // Trigger the exit animation here
        homepage.classList.remove("hidden"); // Show homepage content after animation
    }

    typeWriter();

    localStorage.setItem("animationPlayed", "true");
}

const exitAnimation = () => {
    const intro = document.getElementById("intro");
    intro.classList.add("fade-out"); // Apply the fade-out class to the intro section
    setTimeout(() => {
        intro.style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust timing to match your animation
}
