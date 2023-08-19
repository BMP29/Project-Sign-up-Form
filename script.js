const inputPwd = document.getElementById("pwd");
const inputPwdConf = document.getElementById('pwdConfirmation');
const pwdConfSpan = document.getElementById('pwdConfSpan');

inputPwdConf.addEventListener('input', () => {
    if(inputPwd.value === inputPwdConf.value && inputPwd.checkValidity() && inputPwdConf.checkValidity()) {
        inputPwdConf.style.border = "1px solid rgb(90, 173, 79);";
    }
});