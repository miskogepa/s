document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('.password input');
    const correctPassword = '300824';
    const inputPoruka = document.querySelector('.inputporuka');
    const flipCardInner = document.querySelector('.flip-card-inner');
    const flipCardBackContent = document.querySelector('.flip-card-back p.content');
    const flipCard = document.querySelector('.flip-card');
    const submitButton = document.querySelector('button');
    let isFlipped = false;

    // Initial text
    flipCardBackContent.textContent = "Ono sto sam pozeleo u prosloj novoj godini to mi se ostvarilo.Našao sam nekog do koga mi je previse stalo, nekog koga sam mnogo zavoleo, osobu koja zeli da provodi svaki moguci trenutak u mom zivotu i da delimo sve nase uspehe i padove, srecu i tugu. Zeleo bih u novoj godini da zadrzim mog Medu puu uz sebe i da krenemo da zivimo zajedno i ako nam finansije budu dozvolile da putujemo sto vise budemo mogli. Tvoj Gušter.";

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === input.maxLength) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
            checkPassword();
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '') {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    inputPoruka.addEventListener('input', (e) => {
        const value = e.target.value;
        flipCardBackContent.textContent = "Ono sto sam pozeleo u prosloj novoj godini to mi se ostvarilo.Našao sam nekog do koga mi je previse stalo, nekog koga sam mnogo zavoleo, osobu koja zeli da provodi svaki moguci trenutak u mom zivotu i da delimo sve nase uspehe i padove, srecu i tugu. Zeleo bih u novoj godini da zadrzim mog Medu puu uz sebe i da krenemo da zivimo zajedno i ako nam finansije budu dozvolile da putujemo sto vise budemo mogli. Tvoj Gušter. " + value;
        flipCardBackContent.style.whiteSpace = 'pre-wrap'; // Ensure text wraps within the flip card
        adjustCardHeight();
        adjustInputHeight();
    });

    flipCardInner.addEventListener('transitionend', () => {
        if (flipCardInner.style.transform === 'rotateY(180deg)') {
            isFlipped = true;
            flipCardInner.classList.add('flipped');
        }
    });

    document.querySelector('.flip-card').addEventListener('mouseenter', function() {
        if (!isFlipped) {
            flipCardInner.style.transform = 'rotateY(180deg)';
        }
    });

    submitButton.addEventListener('click', () => {
        document.querySelector('body').innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh;"><img src="p.jpg" alt="Image" style="max-width: 100%; max-height: 100%;"></div>';
    });

    function adjustCardHeight() {
        flipCard.style.height = flipCardBackContent.scrollHeight + 'px';
        document.body.style.height = flipCardBackContent.scrollHeight + 100 + 'px'; // Adjust page height
    }

    function adjustInputHeight() {
        inputPoruka.style.height = 'auto'; // Reset height
        inputPoruka.style.height = inputPoruka.scrollHeight + 'px'; // Set new height
    }

    function checkPassword() {
        const enteredPassword = Array.from(inputs).map(input => input.value).join('');
        if (enteredPassword === correctPassword) {
            document.getElementById('text').style.display = 'none';
            document.getElementById('password').style.display = 'none';
            setTimeout(() => {
                document.getElementById('test-text').style.display = 'block';
                document.querySelector('.flip-card').style.display = 'block';
                document.querySelector('button').style.display = 'block';
                document.querySelector('.inputporuka').style.display = 'block';
            }, 500); // Delay showing the test-text, flip-card, button, and input by 0.5 seconds
        }
    }
});
