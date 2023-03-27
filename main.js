$(document).ready(function(){

    // jQuery methods go here...

});

function SignIn() {
    a = $.ajax({
        url: 'authenticate.php',
        method: "POST",
        data: {
            username: $("[name='username']").val(),
            password: $("[name='password']").val()
        }
    }).done(function (data) {
        console.log(data);
    }).fail(function (error) {
        console.log("error", error.statusText);
    });
    console.log("SignIn fired")
}

function SignUp() {
    $("#signUpSpinner").removeClass("visually-hidden");
    a = $.ajax({
        url: 'signup.php',
        method: "POST",
        data: {
            firstname: $("#signUpFirstName").val(),
            lastname: $("#signUpLastName").val(),
            email: $("#signUpEmail").val(),
            username: $("#signUpUsername").val(),
            password: $("#signUpPassword").val()
        }
    }).done(function (data) {
        $("#signUpSpinner").addClass("visually-hidden");
        if (data === "failed") {
            $("#alreadyTaken").removeClass("visually-hidden");
        } else {
            $("#alreadyTaken").addClass("visually-hidden");
            $("#signUpSuccess").removeClass("visually-hidden");
            setTimeout(function () {
                location.reload();
            }, 500)
            $("#signUpSuccess").addClass("visually-hidden");

        }
    }).fail(function (error) {
        $("#signUpSpinner").addClass("visually-hidden");
        console.log("error", error.statusText);
    });
    console.log("SignIn fired")
}
