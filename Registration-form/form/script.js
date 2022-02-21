let check = document.getElementById('checkbox')
let password = document.getElementById('password')

check.addEventListener('click', function(){
    if(this.checked){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
})
