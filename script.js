const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const submit = document.getElementById('submit')
const errorElement = document.getElementById('error') 

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === "" || name.value == null) {
        messages.push('Name is required!')
    }
    else if (name.value === "Aaron") {
        console.log("Correct")
    }

    if (password.value === 'aer123ar') {
        console.log('Passwordok')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
   
})