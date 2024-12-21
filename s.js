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
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <html>
            <head>
                <title>Nova Stranica</title>
                <style>
                    body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        background-color: #212121;
                        color: white;
                        font-family: Arial, sans-serif;
                    }
                    button {
                        margin-top: 20px;
                        --green: #1BFD9C;
                        font-size: 15px;
                        padding: 0.7em 2.7em;
                        letter-spacing: 0.06em;
                        position: relative;
                        font-family: inherit;
                        border-radius: 0.6em;
                        overflow: hidden;
                        transition: all 0.3s;
                        line-height: 1.4em;
                        border: 2px solid var(--green);
                        background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
                        color: var(--green);
                        box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
                    }
                    button:hover {
                        color: #82ffc9;
                        box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
                    }
                    button:before {
                        content: "";
                        position: absolute;
                        left: -4em;
                        width: 4em;
                        height: 100%;
                        top: 0;
                        transition: transform .4s ease-in-out;
                        background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
                    }
                    button:hover:before {
                        transform: translateX(15em);
                    }
                </style>
            </head>
            <body>
                <p>Deda Mraz je procitao vase pismo i spremio je neka pitanja.</p>
                <img src="p.jpg" alt="Image" style="max-width: 100%; max-height: 100%;">
                <button id="start-test">ZAPOČNI TEST</button>
            </body>
            </html>
        `);
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
