let changedVisibility = false;
const encryptDictionary = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}
const decryptDictionary = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
}
function changeVisibility() {
    if (changedVisibility || (document.querySelector('.encryptor__view__textarea').value == '')) return;
    document.querySelector('.encryptor__result__container__img').style.display = 'none'
    document.querySelector('.encryptor__result__container__title').style.display = 'none'
    document.querySelector('.encryptor__result__container__subtitle').style.display = 'none'
    document.querySelector('.encryptor__result__container__text').style.display = 'block'
    document.querySelector('.encryptor__result__container__button').style.display = 'block'
    document.querySelector('.encryptor__result__container').style.justifyContent = 'space-between'
    changedVisibility = true;
}

function encrypt() {
    changeVisibility();
    
    const text = document.querySelector('.encryptor__view__textarea').value.toLowerCase()
    let encrypted = text.split(''); // Creamos un Array con todas las letras del texto
    encrypted = encrypted.map(letter => { // Utilizamos "map" para transformar cada letra en su debido conjunto de "letras encriptadas" 
        if (encryptDictionary[letter]) {
            return encryptDictionary[letter]
        }
        return letter
    })

    document.querySelector('.encryptor__result__container__text').innerText = encrypted.join('')
}

function decrypt() {
    changeVisibility();
    const text = document.querySelector('.encryptor__view__textarea').value.toLowerCase()
    let decrypt = text;
    for (const key in decryptDictionary) { // For con cada Key del diccionario
        decrypt = decrypt.split(key) // Creamos un Array separado por la Key que usamos
        decrypt = decrypt.join(decryptDictionary[key]) // Creamos un nuevo string uniendo todos los elementos del Array y de separador usamos la Key
        // En síntesis creamos un Array eliminando las "letras encriptadas" y dividiéndolo, donde se encontraban. Luego unimos el Array en un solo string y como separador usamos la letra que correspondía a esas "letras encriptadas"
    }
    document.querySelector('.encryptor__result__container__text').innerText = decrypt
}

function copyResult() {
    const text = document.querySelector('.encryptor__result__container__text').innerText
    navigator.clipboard.writeText(text)
}