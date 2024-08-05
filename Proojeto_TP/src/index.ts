document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        // Lógica para manipular o login com os valores de 'username' e 'password'
        console.log('Username:', username);
        console.log('Password:', password);
    });
});
