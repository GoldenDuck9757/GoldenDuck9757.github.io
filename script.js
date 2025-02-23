document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const words = ["anonimato", "privacidade", "criptografia", "ChatGram"];
    let wordIndex = 0;

    function typeWord() {
        title.innerHTML = "";
        const word = words[wordIndex];
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            title.innerHTML += word[charIndex];
            charIndex++;
            if (charIndex === word.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    wordIndex = (wordIndex + 1) % words.length;
                    typeWord();
                }, 3000);
            }
        }, 200);
    }

    typeWord();
});
