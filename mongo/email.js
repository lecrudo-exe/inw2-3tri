function createLogin(){
    var email = document.getElementById('email').value;
    var passoword = document.getElementById('passoword').value;
    
    firebase.auth().CreateUserWithEmailAndPassword(email, passoword).then(user =>{
        console.log('Usuario', user);
        alert('usuario criado e feito o loging')
    }).cath(error =>{
        console.log('erro', error);
    })

}
function loginEmail(){
    var email = document.getElementById('email').value;
    var passoword = document.getElementById('password').value;
    firebase.auth().signInEmailAndPassword(email, passoword).then(()=>{
        alert('Usuario Logado!')
    }).cath(error =>{
        console.error('error', error)
    });
}

currentUser = firebase.auth().currentUser

function deleteUser(){
    if(currentUser){
        currentUser.delete().then(()=>{
            alert('Usuario deletado')
        })
    }
}
