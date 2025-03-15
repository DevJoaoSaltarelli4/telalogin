document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validação simples (exemplo)
    if (username === 'admin' && password === '12345') {
        alert('Login bem-sucedido!');
        errorMessage.textContent = ''; // Limpar qualquer mensagem de erro
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos!';
    }
});
