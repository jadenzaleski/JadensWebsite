<?php
require 'dbConnect.php';

$con = connect();

if (!isset($_POST['username'], $_POST['password'])) {
    // Could not get the data that should have been sent.
    exit('Please fill both the username and password fields!');
}

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
if ($stmt = $con->prepare('SELECT id, username, password, email, firstname, lastname, since FROM accounts WHERE username = ?')) {
    // Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string, so we use "s"
    $stmt->bind_param('s', $_POST['username']);
    $stmt->execute();
    // Store the result, so we can check if the account exists in the database.
    $stmt->store_result();


//    $stmt->close();
}

if ($stmt->num_rows > 0) {
    $stmt->bind_result($id, $username, $password, $email, $firstname, $lastname, $since);
    $stmt->fetch();
    // Account exists, now we verify the password.
    // Note: remember to use password_hash in your registration file to store the hashed passwords.
    if (password_verify($_POST['password'], $password)) {
        // Verification success! User has logged-in!
        // Create sessions, so we know the user is logged in, they basically act like cookies but remember the data on the server.
        session_regenerate_id();
        $_SESSION['loggedin'] = TRUE;
        $_SESSION['firstname'] = $firstname;
        $_SESSION['lastname'] = $lastname;
        $_SESSION['email'] = $email;
        $_SESSION['username'] = $username;
        $_SESSION['id'] = $id;
        $_SESSION['since'] = $since;
        echo 'Welcome ' . $firstname . '!';
    } else {
        // Incorrect password
        echo 'failed';
    }
} else {
    // Incorrect username
    echo 'failed';
}
