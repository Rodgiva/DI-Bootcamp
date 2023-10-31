// 1. Create a form with two fields (name, last name) and a submit button.
// 2. When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// 3. The output should be:

const form = document.forms["myform"]

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        name: this.fname.value,
        lastname: this.lname.value
    }
    
    let stringObj= JSON.stringify(obj, null, 4)

    document.getElementById("container").textContent = stringObj
})