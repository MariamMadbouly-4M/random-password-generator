const btn1=document.querySelector(".btn");
const input1=document.getElementById("input");
const copyIcon1= document.querySelector(".fa-copy");
const alertContainer1=document.querySelector(".alert-container")

btn1.addEventListener("click",()=>{
    createPassword();
})

copyIcon1.addEventListener("click",()=>{
    copyPassword();
    if (input1.value) {
        alertContainer1.classList.remove("active");
    setTimeout(() => {
        alertContainer1.classList.add("active")
    }, 2000);
    }
    
});

function createPassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordlength=14;
    let password="";
    for (let index = 0; index < passwordlength; index++) {
        const randomNum =Math.floor(Math.random()*chars.length);
        password+= chars.substring(randomNum,randomNum+1);
    }
    
    input1.value=password;
    alertContainer1.innerText= password+" "+"Copied"
}

function copyPassword(){
    input1.select();
    input1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input1.value);
    
}

