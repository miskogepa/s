document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('.password input');
    const correctPassword = '300824';
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

    function checkPassword() {
        const enteredPassword = Array.from(inputs).map(input => input.value).join('');
        if (enteredPassword === correctPassword) {
            document.getElementById('text').style.display = 'none';
            document.getElementById('password').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.card').style.display = 'block';
                document.querySelector('button').style.display = 'block';
            }, 500); // Delay showing the card and button by 0.5 seconds
        }
    }
});
