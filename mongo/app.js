const firebaseConfig = {
    apiKey: "AIzaSyCfJMh10fztBrGpXGs9PzxGGyc76m4i_Og",
    authDomain: "projeto2mib3tri.firebaseapp.com",
    projectId: "projeto2mib3tri",
    storageBucket: "projeto2mib3tri.appspot.com",
    messagingSenderId: "483761032677",
    appId: "1:483761032677:web:4f5c70c6a5acd1cd6bb30c"
};

firebase.initializeApp(firebaseConfig)

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Usuário logado com sucesso
            const user = userCredential.user;
            console.log('Usuário logado:', user);
        })
        .catch((error) => {
            // Tratar erros de autenticação
            const errorMessage = error.message;
            console.error('Erro de autenticação:', errorMessage);
        });
});