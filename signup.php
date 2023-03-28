<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'dbConnect.php';

    $con = connect();

    // hash password
    // https://stackoverflow.com/questions/47602044/how-do-i-use-the-argon2-algorithm-with-password-hash
    $password = password_hash($_POST['password'], PASSWORD_ARGON2I);

    // check for duplicate account
    $check = $con->prepare("select count(*) from accounts where username = ?");
    $check->bind_param("s", $_POST['username']);
    $check->execute();
    $result = $check->get_result();
    $row = mysqli_fetch_row($result);

    // create account if username is unique
    if (intval($row[0]) == 0) {
        $stmt = $con->prepare("INSERT INTO jaden_users.accounts (username, password, email, firstname, lastname, since) VALUES (?, ?, ?, ?, ?, DEFAULT)");
        $stmt->bind_param("sssss", $_POST['username'], $password, $_POST['email'], $_POST['firstname'], $_POST['lastname']);
        $stmt->execute();
        $stmt->store_result();
    } else {
        echo "failed";
    }
}
