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
    const fname = $("#signUpFirstName").val();
    const lname = $("#signUpLastName").val();
    const email = $("#signUpEmail").val();
    const username = $("#signUpUsername").val();
    const password = $("#signUpPassword").val();
    let passed = true;

    $("#alreadyTaken").addClass("visually-hidden");
    $("#signUpSpinner").removeClass("visually-hidden");

    if (fname.length > 0 && fname.length < 255) {
        fname.removeClass("is-invalid");
        fname.addClass("is-valid");
    } else {
        fname.addClass("is-invalid");
        fname.removeClass("is-valid")
        passed = false;
    }

    if (lname.length > 0 && fname.length < 255) {
        lname.removeClass("is-invalid");
        lname.addClass("is-valid");
    } else {
        lname.addClass("is-invalid");
        lname.removeClass("is-valid");
        passed = false;
    }

    if (username.length > 0 && username.length < 255) {
        username.removeClass("is-invalid");
        username.addClass("is-valid");
    } else {
        username.addClass("is-invalid");
        username.removeClass("is-valid");
        passed = false;
    }

    if (username.length > 0 && username.length < 255 && username.includes("@")) {
        username.removeClass("is-invalid");
        username.addClass("is-valid");
    } else {
        username.addClass("is-invalid");
        username.removeClass("is-valid");
        passed = false;
    }

    if (password.length > 7 && password.length < 255) {
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
                firstname: fname,
                lastname: lname,
                email: email,
                username: username,
                password: password
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
