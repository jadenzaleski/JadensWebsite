function OpenDash() {
    $.ajax({
        url: 'startnodejs.php',
        method: "GET"
    }).done(function (data) {
        console.log('done' + data);
    }).fail(function (data) {
        console.log(data);
    });
}
