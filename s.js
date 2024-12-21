document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('.password input');
    const correctPassword = '300824';
    const inputPoruka = document.querySelector('.inputporuka');
    const flipCardInner = document.querySelector('.flip-card-inner');
    const flipCardBackContent = document.querySelector('.flip-card-back p.content');
    const flipCard = document.querySelector('.flip-card');
    let isFlipped = false;

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
        flipCardBackContent.textContent = e.target.value;
        flipCardBackContent.style.whiteSpace = 'pre-wrap'; // Ensure text wraps within the flip card
        adjustCardHeight();
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

    function adjustCardHeight() {
        flipCard.style.height = flipCardBackContent.scrollHeight + 'px';
        document.body.style.height = flipCardBackContent.scrollHeight + 100 + 'px'; // Adjust page height
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
