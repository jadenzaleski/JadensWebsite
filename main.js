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
}
