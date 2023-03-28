$(document).ready(function(){

    // jQuery methods go here...

});

// TODO clear text from boxes
function SignIn() { // TODO finish sign in verification
    const username = $("#loginFormUsername");
    const password = $("#loginFormPassword");
    let passed = true;

    if (username.val().length > 0 && username.val().length < 255) {
        username.removeClass("is-invalid");
        username.addClass("is-valid");
    } else {
        username.addClass("is-invalid");
        username.removeClass("is-valid");
        passed = false;
    }

    if (password.val().length > 7 && password.val().length < 255) {
        password.removeClass("is-invalid");
        password.addClass("is-valid");
    } else {
        password.addClass("is-invalid");
        password.removeClass("is-valid");
        passed = false;
    }

    if (passed) {
        $("#signInSpinner").removeClass("visually-hidden");
        $("#signInSuccess").addClass("visually-hidden");
        $("#incorrectSignIn").addClass("visually-hidden");

        a = $.ajax({
            url: 'authenticate.php',
            method: "POST",
            data: {
                username: username.val(),
                password: password.val()
            }
        }).done(function (data) {
            $("#signInSpinner").addClass("visually-hidden");
            if (data === "failed") {
                $("#incorrectSignIn").removeClass("visually-hidden");
            } else {
                $("#signInSuccess").removeClass("visually-hidden");
                setTimeout(function () {
                    $("#signInSuccess").addClass("visually-hidden");
                }, 1000)

            }
            console.log(data);
        }).fail(function (error) {
            console.log("error", error.statusText);
            $("#incorrectSignIn").removeClass("visually-hidden");
        });
    }
    console.log("SignIn fired")
}

function SignUp() {
    const fname = $("#signUpFirstName");
    const lname = $("#signUpLastName");
    const email = $("#signUpEmail");
    const username = $("#signUpUsername");
    const password = $("#signUpPassword");
    let passed = true;

    $("#alreadyTaken").addClass("visually-hidden");

    if (fname.val().length > 0 && fname.val().length < 255) {
        fname.removeClass("is-invalid");
        fname.addClass("is-valid");
    } else {
        fname.addClass("is-invalid");
        fname.removeClass("is-valid")
        passed = false;
    }

    if (lname.val().length > 0 && fname.val().length < 255) {
        lname.removeClass("is-invalid");
        lname.addClass("is-valid");
    } else {
        lname.addClass("is-invalid");
        lname.removeClass("is-valid");
        passed = false;
    }

    if (username.val().length > 0 && username.val().length < 255) {
        username.removeClass("is-invalid");
        username.addClass("is-valid");
    } else {
        username.addClass("is-invalid");
        username.removeClass("is-valid");
        passed = false;
    }

    if (email.val().length > 0 && email.val().length < 255 && email.val().includes("@")) {
        email.removeClass("is-invalid");
        email.addClass("is-valid");
    } else {
        email.addClass("is-invalid");
        email.removeClass("is-valid");
        passed = false;
    }

    if (password.val().length > 7 && password.val().length < 255) {
        password.removeClass("is-invalid");
        password.addClass("is-valid");
    } else {
        password.addClass("is-invalid");
        password.removeClass("is-valid");
        passed = false;
    }

    if (passed) {
        $("#signUpSpinner").removeClass("visually-hidden");
        a = $.ajax({
            url: 'signup.php',
            method: "POST",
            data: {
                firstname: fname.val(),
                lastname: lname.val(),
                email: email.val(),
                username: username.val(),
                password: password.val()
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
                    $("#signUpSuccess").addClass("visually-hidden");
                }, 1000)


            }
        }).fail(function (error) {
            $("#signUpSpinner").addClass("visually-hidden");
            console.log("error", error.statusText);
        });
    }
    console.log("SignIn fired")
}
