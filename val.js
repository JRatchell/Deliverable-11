function checkNmb() {
    let passwordValue= document.getElementById('password').value;
    let numberpattern = /[0-9]/g ;
    let answerNmb = numberpattern.test(passwordValue);
    if (answerNmb === true) {
        document.getElementById('messageNmb').innerHTML='Password contains a number';
    }
    else {
        document.getElementById('messageNmb').innerHTML='Please include a number in your passcode';
        
    }
}
function checkUC(){
    let passwordValue= document.getElementById('password').value;
    let uppercasepattern = /[A-Z]/g ;
    let answerUC = uppercasepattern.test(passwordValue);
   if (answerUC === true) {
        document.getElementById('messageUC').innerHTML='Password contains a capital letter';
    
   }
   else {
        document.getElementById('messageUC').innerHTML='Please include a capital letter';
    
   }
}
function checkLC(){
    let passwordValue= document.getElementById('password').value;
    let lowercasepattern = /[a-z]/g ;
    let answerLC = lowercasepattern.test(passwordValue);
    if (answerLC === true) {
        document.getElementById('messageLC').innerHTML='Password contains a lowercase letter';
    }
    else {
        document.getElementById('messageLC').innerHTML='Please include at least 1 lowercase letter'; 
    }
}
function checkLength(){
    let passwordValue= document.getElementById('password').value;
    if (passwordValue.length >= 8) {
        document.getElementById('messageLength').innerHTML='Your password is a sufficient length';
    } 
    else {
        document.getElementById('messageLength').innerHTML='Your password is not long enough, please have a minimum of 8 characters in your password';
    }
}