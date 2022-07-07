const inputBox = document.querySelector(".input-box")
const checkBox = document.querySelector(".check") 

checkBox.addEventListener("click", ()=>{
    if(inputBox.type === 'password'){
        return inputBox.type = 'text'
    }else{
        return inputBox.type = 'password'
    }
})