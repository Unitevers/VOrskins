const namef = document.getElementById('name-txt')
const email = document.getElementById('email-txt')
const phone = document.getElementById('phone-txt')
const preferences = document.getElementById('preferences-txt')
const femaleB = document.getElementById('female-txt')
const maleB = document.getElementById('male-txt')
const checkBox = document.getElementById('checkbox-txt')
const form = document.getElementById('register-form')

const errorName = document.getElementById('error-name')
const errorEmail = document.getElementById('error-email')
const errorPhone = document.getElementById('error-phone')
const errorPreferences = document.getElementById('error-pref')
const errorFeOMa = document.getElementById('error-FeMa')
const errorCB = document.getElementById('error-CB')
const error = document.getElementById('error-submit')

form.addEventListener('submit',(e) => {
    let msgN = []
    let msgE = []
    let msgP = []
    let msgPr = []
    let msgFM = []
    let msgCB = []

    if (!namef.value) {
        msgN.push('Please fill your name!')
    }
    else if(namef.value.length < 5) {
        msgN.push('Name must be more than 5 characters!')
    }

    if (!email.value) {
        msgE.push('Please fill your email address!')
    }
    else if(!email.value.endsWith('@gmail.com')) {
        msgE.push('Email address must end with @gmail.com')
    }

    if(!phone.value){
        msgP.push('Please fill your phone number!')
    }

    if(!preferences.value){
        msgPr.push('Please choose your preferences!')
    }

    if(!femaleB.checked && !maleB.checked){
        msgFM.push('Please choose your gender!')
    }

    if(!checkBox.checked){
        msgCB.push('You must tick the checkbox to subscribe!')
    }

    if(msgN.length > 0) {
        e.preventDefault()
        errorName.innerText = msgN.join(', ')
    }
    if(msgE.length > 0) {
        e.preventDefault()
        errorEmail.innerText = msgE.join(', ')
    }
    if(msgP.length > 0) {
        e.preventDefault()
        errorPhone.innerText = msgP.join(', ')
    }
    if(msgPr.length > 0) {
        e.preventDefault()
        errorPreferences.innerText = msgPr.join(', ')
    }
    if(msgFM.length > 0) {
        e.preventDefault()
        errorFeOMa.innerText = msgFM.join(', ')
    }
    if(msgCB.length > 0) {
        e.preventDefault()
        errorCB.innerText = msgCB.join(', ')
    }
})