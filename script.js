


function encrypt() {
    const element = document.querySelector('.encryptor__result__container__text').innerText
    console.log("encrypt");
}

function decrypt() {
    console.log("decrypt");
}

function copyResult() {
    const text = document.querySelector('.encryptor__result__container__text').innerText
    navigator.clipboard.writeText(text)
    console.log(text);

}