function clearErrors() {
    for(var loopCounter = 0; loopCounter < document.forms["contactUs"].elements.length; loopCounter++){
        if(document.forms["contactUs"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["contactUs"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function validateItems() {
    clearErrors();
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var phone = document.forms["contactUs"]["phone"].value;
    if(name == ""){
        alert("Name is required.");
        document.forms["contactUs"]["name"]
            .parentElement.className = "form-group has-error";
        document.forms["contactUs"]["name"].focus();
        return false;
    }
    if(email == ""){
        alert("Email is required.");
        document.forms["contactUs"]["email"]
            .parentElement.className = "form-group has-error";
        document.forms["contactUs"]["email"].focus();
        return false;
    }
    if(phone == "" || isNaN(phone)){
        alert("A valid phone number is required.");
        document.forms["contactUs"]["phone"]
            .parentElement.className = "form-group has-error";
        document.forms["contactUs"]["phone"].focus();
        return false;
    }
}