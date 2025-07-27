// typewriter effect... 

let typewriterobj = document.querySelector("#typewriter");
const msg = "Your Personal News";

// instructioon pop up logic 
const infobtn = document.getElementById("insbtn");
infobtn.addEventListener("click",()=>{
    openLoginInstruction();
});

function openLoginInstruction() {
  document.getElementById("loginInstructionPopup").classList.remove("hidden");
}

function closeLoginInstruction() {
  document.getElementById("loginInstructionPopup").classList.add("hidden");
}


let charIndex = 0;
function typewriter(){

    if(charIndex<msg.length){
        typewriterobj.textContent += msg.charAt( charIndex);
        charIndex++;
        setTimeout(typewriter,100);
    }else{
        //delete before erasing the msg..
        setTimeout(eraseText,1500);
    }

}

function eraseText(){
    if(charIndex>0){
        typewriterobj.textContent = msg.substring(0,charIndex-1);
        charIndex--;
        // adjust the erasing speed of the text
        setTimeout(eraseText,50);
    }else{
        //delay before typing again
        setTimeout(typewriter,500);
    }
}

// calling the typewriter function 
typewriter();


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit",(event)=>{
    // prevent form from submitting.. 
    event.preventDefault();

    const useremail = document.getElementById("email").value;
    const userpassword = document.getElementById("pass").value;
    const userkey = document.getElementById("apikey").value;

    // setting them to local stoarage. 

    localStorage.setItem("newsProjectUserEmail",useremail);
    localStorage.setItem("newsProjectUserPassword",userpassword);
    localStorage.setItem("newsProjectUserApiKey",userkey);

    // after saving the credentials move the user to the home page
    window.location.href="./homepage.html";
});

