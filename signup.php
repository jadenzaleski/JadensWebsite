<?php

require 'dbConnect.php';

$con = connect();

$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$stmt = $con->prepare("INSERT INTO jaden_users.accounts (username, password, email, firstname, lastname, since) VALUES (?, ?, ?, ?, ?, DEFAULT)");
$stmt->bind_param("sssss", $_POST['user'], $password, $_POST['email'], $_POST['firstname'], $_POST['lastname']);
$stmt->execute();
$stmt->store_result();

