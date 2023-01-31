<?php
session_start();
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = 'august30';
$DATABASE_NAME = 'jaden_users';

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if ( mysqli_connect_errno() ) {
    // If there is an error with the connection, stop the script and display the error.
    exit('Failed to connect to MySQL: ' . mysqli_connect_error());
} else {
    echo 'success';
}

$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$stmt = $con->prepare("INSERT INTO jaden_users.accounts (username, password, email, firstname, lastname, since) VALUES (?, ?, ?, ?, ?, DEFAULT)");
$stmt->bind_param("sssss", $_POST['user'], $password, $_POST['email'], $_POST['firstname'], $_POST['lastname']);
$stmt->execute();
$stmt->store_result();

