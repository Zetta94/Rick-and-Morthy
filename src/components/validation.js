const validation =(userData)=>{
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {}

    if(!regexEmail.test(userData.username)){
        errors.username ="Email incorrecto"
    }
    if(!userData.username){
        errors.username="Campo incompleto"
    }
    if(userData.username.length>35){
        errors.username="Tamaño excedido de caracteres"
    }
    if(!userData.password.match(/\d/)){//match retorna un booleano, /\d/ es un regex de control
        errors.password="La contraseña debe contener mínimo un número"
    }
    if(userData.password.length>10 || userData.password.length<6 ){
        errors.password="La contraseña debe tener una longityd entre 6 y 10 caracteres"
    }
    
    return errors;
}

export default validation;