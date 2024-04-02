const name = document.getElementById("name")
const passwd = document.getElementById("passwd")
const form = document.getElementById("form")


const errorElement = document.getElementById("error")




// handle submit
form.addEventListener("submit",(e)=>{


    let messages = []
    // equals to all of our error messages


    // user did not pass nay name
    if(name.value === '' || name.value == null){
        messages.push("Name is required")
    }



    if (passwd.value.length <= 6){
        
        messages.push("password must be longer than 6 char")

    }


    if (passwd.value.length >= 20){
        
        messages.push("password must be less than 20c har")

    }


    if (passwd.value === "password"){
        
        messages.push("password can not be password")

    }



    if(messages.length >0){
        e.preventDefault()// prevent the form to submit
        errorElement.innerText = messages.join(" , ")
    }

    // however all this can be done in html, just put a required in the name field
    //like
    //<input id="name" name="name" type="text" required>
    // the above js code do the same thing but HTML can just do it simply

    
    
})