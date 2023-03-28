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
    const fname = $("#signUpFirstName");
    const lname = $("#signUpLastName");
    const email = $("#signUpEmail");
    const username = $("#signUpUsername");
    const password = $("#signUpPassword");
    let passed = true;

    $("#alreadyTaken").addClass("visually-hidden");
    $("#signUpSpinner").removeClass("visually-hidden");

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

    if (username.val().length > 0 && username.val().length < 255 && username.val().includes("@")) {
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
