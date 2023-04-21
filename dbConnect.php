<?php
    session_start();
function connect() {
    session_start();
    // TODO remove all sensitive info
    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'JadenUser';
    $DATABASE_PASS = 'jadenzaleski';
    $DATABASE_NAME = 'jaden_users';

    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if (mysqli_connect_errno()) {
        // If there is an error with the connection, stop the script and display the error.
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    return $con;
}