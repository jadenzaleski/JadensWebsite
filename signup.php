<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'dbConnect.php';

    $con = connect();

    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // check for duplicate account TODO finish check duplicate account creations
    $check = $con->prepare("select count(*) from accounts where username = ?");
    $check->bind_param("s", $_POST['username']);
    $check->execute();
    $result = $check->get_result();

    echo $result->fetch_assoc();

    // create account
    $stmt = $con->prepare("INSERT INTO jaden_users.accounts (username, password, email, firstname, lastname, since) VALUES (?, ?, ?, ?, ?, DEFAULT)");
    $stmt->bind_param("sssss", $_POST['username'], $password, $_POST['email'], $_POST['firstname'], $_POST['lastname']);
    $stmt->execute();
    $stmt->store_result();
}
