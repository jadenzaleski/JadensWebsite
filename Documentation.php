<?php
session_start();
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Documentation</title>
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    <link rel="manifest" href="images/site.webmanifest">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="css/vars.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="main.js"></script>
</head>

<body>

<nav class="navbar navbar-expand-md navbar-main">
    <div class="container-fluid">
        <a class="navbar-brand ms-0 me-2" href="https://jadenzaleski.com">
            <img alt="logo" height="32" src="images/android-chrome-512x512.png" width="32">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item hover-underline">
                    <a class="nav-link" aria-current="page" href="https://jadenzaleski.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-house me-1 mb-1" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                        </svg>
                        Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle hover-underline" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-braces me-1 mb-1" viewBox="0 0 16 16">
                            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"/>
                        </svg>
                        Projects</a>
                    <ul class="dropdown-menu">
                        <li><h6 class="dropdown-header">School:</h6></li>
                        <li><a class="dropdown-item hover-underline" href="school/CSE383/finalProject" target="_blank">CSE383,
                                Weather
                                App <span class="text-muted">(Nov 2022)</span></a></li>
                        <li>
                        <li><a class="dropdown-item hover-underline"
                               href="http://ceclnx01.cec.miamioh.edu/~zaleskjr/cse383/cse383_projects/hw10"
                               target="_blank">CSE383, API Calculator <span class="text-muted">(Oct 2022)</span></a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><h6 class="dropdown-header">Personal:</h6></li>
                        <li><a class="dropdown-item hover-underline" href="/Documentation.php">This Website <span
                                        class="text-muted">(Dec 2022-Present)</span></a></li>
                        <li><a class="dropdown-item hover-underline" href="/personal/CanvasSquares" target="_blank">Canvas
                                Squares <span
                                        class="text-muted">(Apr 2022)</span></a></li>
                        <li><a class="dropdown-item hover-underline" href="/personal/CandyClicker" target="_blank">Candy
                                Clicker <span
                                        class="text-muted">(May 2020)</span></a></li>
                        <li><a class="dropdown-item hover-underline" href="/personal/ColorPicker" target="_blank">Color
                                Picker <span
                                        class="text-muted">(Mar 2018)</span></a></li>
                        <li><a class="dropdown-item disabled text-decoration-line-through" href="/personal/SwimTeamV2"
                               target="_blank">Swim Team V2 <span
                                        class="text-muted">(Feb 2018)</span></a></li>
                        <li><a class="dropdown-item hover-underline" href="/personal/SwimTeamV1" target="_blank">Swim
                                Team V1 <span
                                        class="text-muted">(Jun 2017)</span></a></li>
                    </ul>
                </li>
                <li class="nav-item hover-underline">
                    <a class="nav-link active fw-bolder" aria-current="page" href="/Documentation.php">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-info-circle me-1 mb-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        Documentation</a>
                </li>
                <li class="nav-item hover-underline">
                    <a class="nav-link" aria-current="page" href="https://ceclnx01.cec.miamioh.edu/~zaleskjr/"
                       target="_blank"><img src="images/miami.png" height="16px" class="m-1 mb-2 ms-0" id="miami-logo"
                                            alt="miami logo">Miami Server</a>
                </li>
                <li class="nav-item hover-underline">
                    <a class="nav-link" aria-current="page" href="school/Resume.pdf"
                       target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-person-badge me-1 mb-1" viewBox="0 0 16 16">
                            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
                        </svg>
                        Resume</a>
                </li>
                <?php
                if (isset($_SESSION['loggedin']) && $_SESSION['loggedin']) { ?>
                    <li class="nav-item hover-underline">
                        <a class="nav-link" href="node">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 class="bi bi-speedometer2 me-1 mb-1" style="margin-bottom: 2px;" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                <path fill-rule="evenodd"
                                      d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                            </svg>
                            Node.js
                        </a>
                    </li>
                <?php } ?>
            </ul>

            <span class="navbar-text float-start float-md-none mb-1">
                <?php
                if (isset($_SESSION['loggedin']) && $_SESSION['loggedin']) { ?>
                    Hello, <?php echo $_SESSION['firstname'] ?>

                    </span>
            <div class="dropdown">
                <button type="button"
                        class="btn login-button pt-1 ms-md-0 mb-2 mb-md-0 float-end dropdown-toggle caret-off border-0"
                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </button>
                <div class="dropdown-menu dropdown-menu-end p-4 text-center" style="width: 300px !important;">
                    <h5><?php echo $_SESSION['firstname'] . ' ' . $_SESSION['lastname'] ?></h5>
                    <hr class="dropdown-divider">
                    <div class="text-start">
                        <p class="mb-1">Username: <?php echo $_SESSION['username'] ?></p>
                        <p class="mb-1">Email: <?php echo $_SESSION['email'] ?></p>
                        <p class="mb-1">User since: <?php echo $_SESSION['since'] ?></p>
                    </div>
                    <button class="btn w-100 mt-1" id="logout" onclick="logout()" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-box-arrow-right mb-1 me-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd"
                                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
            <?php } else { ?>
                Login / Sign Up
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-chevron-right m-0" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </span>
                <div class="dropdown">
                    <button type="button"
                            class="btn login-button pt-1 ms-md-0 mb-2 mb-md-0 float-end dropdown-toggle caret-off border-0"
                            data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd"
                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end p-4" id="signInDropdown">
                        <form class="login-form" action="authenticate.php" method="post">
                            <div class="mb-3">
                                <label for="loginFormUsername" class="form-label">Username:</label>
                                <input type="text" name="username" class="form-control" id="loginFormUsername"
                                       placeholder="username">
                                <div class="invalid-feedback">
                                    Username must be between 1 and 255 characters.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="loginFormPassword" class="form-label">Password:</label>
                                <input type="password" name="password" class="form-control" id="loginFormPassword"
                                       placeholder="password">
                                <div class="invalid-feedback">
                                    Password must be between 8 and 255 characters.
                                </div>
                            </div>
                            <button type="button" onclick="signIn();" class="btn w-100">Sign in</button>
                        </form>
                        <div class="alert alert-danger d-flex align-items-center small mt-3 visually-hidden"
                             role="alert"
                             id="incorrectSignIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 role="img" aria-label="Warning:" class="bi bi-exclamation-triangle flex-shrink-0 me-2"
                                 viewBox="0 0 16 16">
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                            </svg>
                            <span>
                            Incorrect username and/or password.
                        </span>
                        </div>
                        <div class="alert alert-success d-flex align-items-center small mt-3 visually-hidden"
                             role="alert"
                             id="signInSuccess">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Success!" width="16"
                                 height="16" fill="currentColor" class="bi bi-check-lg flex-shrink-0 me-2"
                                 viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                            <span>
                            Success!
                        </span>
                        </div>
                        <div class="text-center">
                            <div class="spinner-border mt-3 visually-hidden" role="status" id="signInSpinner">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div class="dropdown-divider mt-3"></div>
                        <p class="dropdown-header">
                            <button class="p-0 m-0 text-decoration-underline border-0 bg-transparent" type="button"
                                    data-bs-toggle="modal" data-bs-target="#SignUpModal">Sign up
                            </button>
                            |
                            <a href="mailto:jadenzaleski@icloud.com?subject=Forgot%20Password&body=Hello%2C%0D%0AI%20have%20forgotten%20my%20password.">Forgot
                                password?</a></p>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</nav>

<!-- Sign Up Modal -->
<div class="modal fade" id="SignUpModal" tabindex="-1" aria-labelledby="SignUpModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Sign Up</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-3">
                <p>Create an account to have access to more features. Username and password must be at least 8
                    characters long.</p>
                <form class="row g-3 signup-form" method="post" action="signup.php">
                    <div class="col-6">
                        <input type="text" id="signUpFirstName" name="firstname" class="form-control"
                               placeholder="First name" aria-label="First name">
                        <div class="invalid-feedback">
                            First name must be between 1 and 255 characters.
                        </div>
                    </div>
                    <div class="col-6">
                        <input type="text" id="signUpLastName" name="lastname" class="form-control"
                               placeholder="Last name" aria-label="Last name">
                        <div class="invalid-feedback">
                            Last name must be between 1 and 255 characters.
                        </div>
                    </div>
                    <div class="col-12">
                        <input type="email" id="signUpEmail" name="email" class="form-control" placeholder="Email"
                               aria-label="Email">
                        <div class="invalid-feedback">
                            Email must be valid and between 1 and 255 characters.
                        </div>
                    </div>
                    <div class="col-6">
                        <input type="text" id="signUpUsername" name="username" class="form-control"
                               placeholder="Username" aria-label="Username">
                        <div class="invalid-feedback">
                            Username must be between 1 and 255 characters.
                        </div>

                    </div>
                    <div class="col-6">
                        <input type="password" id="signUpPassword" name="password" class="form-control"
                               placeholder="Password" aria-label="Password">
                        <div class="invalid-feedback">
                            Password must be between 8 and 255 characters.
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="button" onclick="signUp();" class="btn w-100">Submit</button>
                    </div>
                    <div class="col-12">
                        <div class="text-center">
                            <div class="spinner-border visually-hidden" role="status" id="signUpSpinner">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div class="alert alert-danger d-flex align-items-center visually-hidden" role="alert"
                             id="alreadyTaken">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 role="img" aria-label="Warning:" class="bi bi-exclamation-triangle flex-shrink-0 me-2"
                                 viewBox="0 0 16 16">
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                            </svg>
                            <span>
                            Username already exists, please try again.
                            </span>
                        </div>
                        <div class="alert alert-success d-flex align-items-center visually-hidden" role="alert"
                             id="signUpSuccess">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Success!" width="16"
                                 height="16" fill="currentColor" class="bi bi-check-lg flex-shrink-0 me-2"
                                 viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                            <span>
                            Success! please log in.
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<main class="container">
    <section class="py-5 container">
        <div class="row py-lg-5">
            <div class="col-lg-10 col-md-10 mx-auto">
                <h1 class="fw-light mb-3 text-center">Documentation</h1>
                <h4>Introduction</h4>
                <p>
                    The documentation of this website is divided into two parts: hardware and software. The website
                    serves as a showcase of my personal work and displays my activities during my free time. To easily
                    navigate the site, you can use the navigation bar, which provides access to all the site's features.
                    By creating a personalized account, accessible through the navigation bar, you can explore the
                    Node.js tab. With an account, you can view the creation date, username, and associated email of your
                    profile. The footer of the site contains links to explore my professional presence on <a
                            href="https://github.com/jadenzaleski" class="text-link" target="_blank">GitHub</a> and
                    <a href="https://www.linkedin.com/in/jaden-zaleski" class="text-link" target="_blank"> LinkedIn</a>,
                    as well as a direct contact option via email. Below is a description of each tab in the
                    navigation bar:
                </p>
                <ul>
                    <li>The <b>Projects</b> tab is an extensive showcase of my personal and school projects, offering a
                        glimpse into the diverse range of work I have undertaken in recent years. It features a
                        user-friendly dropdown menu for easy navigation through the various completed projects. Clicking
                        on a specific project directs visitors to the project's dedicated page, which includes a
                        detailed description of the project's purpose, objectives, critiques, and notable features.
                    </li>
                    <li>The <b>Documentation</b> tab is the current page you are on. It provides information on the
                        hardware components used, as well as the required software and frameworks to complete the site.
                        I also explain how I connected the domain and obtained a free SSL. The goal of this page is to
                        provide sufficient information for someone to recreate these projects without having to spend
                        hours searching the internet for specific application connections.
                    </li>
                    <li>The <b>Miami Server</b> tab offers easy access to the Miami Linux server, which hosts individual
                        HTML pages for each student. These pages serve as repositories for a wide range of
                        website-specific projects and assignments completed during my time at Miami. The server serves
                        as a central hub, showcasing the diverse array of skills and accomplishments acquired through
                        various courses and projects at school. Navigating this tab provides insight into innovative and
                        creative projects spanning various web development and design endeavors.
                    </li>
                    <li>The <b>Resume</b> tab provides a direct link to my current resume.</li>
                    <li>The <b>Profile</b> icon is used to create an account on the site. Having an account allows you
                        to access the Node.js tab, as well as view the creation date, username, and associated email of
                        your profile.
                    </li>
                    <li>The <b>Node.js</b> page is currently under development and primarily serves to demonstrate the
                        possibility of running a JavaScript runtime environment within the Apache server's limitations.
                    </li>
                </ul>
                <h4 class="mt-5">Hardware</h4>
                <p>
                    The server consists of a <a href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/"
                                                class="text-link" target="_blank">Raspberry Pi</a>, a <a
                            href="https://a.co/d/6b3m1zU" class="text-link" target="_blank">cooling component</a>, and a
                    case.
                    The Raspberry Pi used is a Raspberry Pi 4 Model B with 8GB of RAM and 32GB of storage.
                    To ensure a faster and more stable connection,
                    the computer is connected to the internet through an ethernet cable.
                    The Raspberry Pi has a maximum operating temperature of 85ºC.
                    To maintain proper cooling, I have installed a large heatsink with a fan on top,
                    which provides plenty of cool air.
                    Currently, the computer's operating temperature is 39ºC,
                    which is cool enough for it to function properly without any concern.
                    Below is a rendered image of the complete case, including all the necessary components.
                </p>
                <img src="/images/render.png" class="" id="render" alt="render of case">
                <p>
                    The case design was created using <a href="https://www.autodesk.com/products/fusion-360/"
                                                         class="text-link" target="_blank">Fusion 360</a> and then 3D
                    printed in PLA.
                    After appropriate
                    sanding and painting,
                    the components are installed and held together securely with screws and
                    spacers.
                    The top part of the case is made of polycarbonate plastic, which I sanded down the edges to
                    achieve a smooth, matte surface that aligns perfectly with the case.
                    To prevent any slipping on
                    smooth surfaces,
                    adhesive pads have been added underneath the case to minimize fan vibrations and
                    ensure stability.
                </p>
                <h4 class="mt-5">Software</h4>
                <p>
                    The Raspberry Pi serves as the foundation for this project, running smoothly on <a
                            href="https://ubuntu.com" class="text-link" target="_blank">Ubuntu</a> 22.04.2 LTS
                    with a comfortable 8GB of RAM and 32GB of storage. This setup provides enough resources for the
                    intended tasks and ensures a stable environment for the various software components.
                </p>
                <p>
                    The website's front end is constructed using a combination of Php, HTML, CSS, and JavaScript. To
                    facilitate easier development and achieve a consistent look and feel across the site, I decided to
                    use the <a href="https://getbootstrap.com" class="text-link" target="_blank">Bootstrap 5</a>
                    framework. Bootstrap brings the added benefit of making the website fully
                    responsive and mobile-friendly, which caters to users accessing the site from different devices.
                </p>
                <p>
                    To manage incoming HTTP requests from Internet users and deliver the appropriate information within
                    the project directory, the website relies on <a href="https://www.apache.org" class="text-link"
                                                                    target="_blank">Apache2</a> software. Apache2 is a
                    widely-used web
                    server software known for its stability and performance. I followed <a
                            href="https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04"
                            class="text-link" target="_blank">this</a>
                    tutorial from DigitalOcean which provides a step-by-step guide on how to install a LAMP stack
                    (Linux, Apache, MySQL, PHP) on Ubuntu. The LAMP stack is a popular web development environment that
                    allows users to run dynamic websites and web applications.
                </p>
                <p>
                    For handling account data, a <a href="https://www.mysql.com" class="text-link"
                                                    target="_blank">MySQL</a> server is utilized. This database stores
                    all the relevant user
                    information securely. To safeguard user passwords, I made use of the <a
                            href="https://en.wikipedia.org/wiki/Argon2" class="text-link" target="_blank">Argon2</a>
                    cryptographic hashing
                    algorithm. This hashing mechanism ensures that the passwords remain protected and cannot be accessed
                    by unauthorized parties outside the system. The implementation of the secure login system using this
                    algorithm was guided by <a href="https://codeshack.io/secure-login-system-php-mysql/"
                                               class="text-link" target="_blank">this tutorial.
                </p>
                <p>
                    Additionally, I added <a href="https://nodejs.org" class="text-link" target="_blank">Node.js</a> on
                    the Raspberry Pi, showcasing it as a proof of concept. Combining
                    Node.js with the Apache server allows users to access Node.js applications through the same website.
                    The process of integrating Node.js with Apache was made possible by following the instructions
                    provided in <a
                            href="https://www.ionos.com/digitalguide/websites/web-development/nodejs-for-a-website-with-apache-on-ubuntu/"
                            class="text-link" target="_blank">this tutorial.
                </p>
                <p>
                    I purchased a domain through <a href="https://www.godaddy.com" class="text-link">GoDaddy</a> and
                    connected it to the current server's IP address. To ensure
                    that the domain always points to the correct address, a script runs on the Raspberry Pi every ten
                    minutes, updating the domain's IP address as needed. This dynamic DNS setup was created with the
                    guidance of the tutorial available <a
                            href="https://www.instructables.com/Quick-and-Dirty-Dynamic-DNS-Using-GoDaddy/"
                            class="text-link" target="_blank">here</a>. Below is the recurring
                    script:
                </p>
                <pre id="code"><code>#!/bin/bash

mydomain=“example.com”
myhostname="gateway"
gdapikey="api_key:key_secret"
logdest="local7.info"

myip=`curl -s "https://api.ipify.org"`
nsdata=`curl -s -X GET -H "Authorization: sso-key ${gdapikey}" "https://api.godaddy.com/v1/domains/${mydomain}/records/A/${myhostname}"`
gdip=`echo $dnsdata | cut -d ',' -f 1 | tr -d '"' | cut -d ":" -f 2`
echo "`date '+%Y-%m-%d %H:%M:%S'` - Current External IP is $myip, GoDaddy DNS IP is $gdip"

if [ "$gdip" != "$myip" -a "$myip" != "" ]; then
    echo "IP has changed!! Updating on GoDaddy"
    curl -s -X PUT "https://api.godaddy.com/v1/domains/${mydomain}/records/A/${myhostname}" -H "Authorization: sso-key ${gdapikey}" -H "Content-Type: application/json" -d "[{\"data\": \"${myip}\"}]"
    logger -p $logdest "Changed IP on ${hostname}.${mydomain} from ${gdip} to ${myip}"
fi</code></pre>
                <p>
                    I obtained a free SSL certificate using <a href="https://certbot.eff.org" class="text-link"
                                                               target="_blank">CertBot</a>. CertBot is a client that
                    interfaces with a
                    nonprofit Certificate Authority responsible for providing TLS certificates to a massive number of
                    websites worldwide. The process of securing Apache with <a href="https://letsencrypt.org"
                                                                               class="text-link" target="_blank">Let's
                        Encrypt</a> using CertBot was documented
                    in the tutorial <a
                            href="https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-20-04"
                            class="text-link" target="_blank">here</a>,
                    enabling the website to offer encrypted and secure communication for free.
                </p>
                <p>
                    Lastly, I utilized <a href="https://github.com/jadenzaleski/JadensWebsite" class="text-link"
                                          target="_blank">GitHub</a> to keep the project organized.
                    Allowing for collaborative development, tracking
                    changes, and ensuring a well-maintained code repository.
                </p>
            </div>
        </div>
    </section>
</main>
<div class="spacer mb-5"></div>

<footer class="container">
    <div class="row py-4">
        <div class="col-12 text-center">
            <p>Made by Jaden Zaleski, 2022/2023.</p>
        </div>
        <div class="col-12 text-center">
            <a type="button" class="btn rounded-circle social-button-link me-2"
               href="mailto:jadenzaleski@icloud.com?subject=Comments%20about%20website" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
            </a>
            <a type="button" class="btn rounded-circle social-button-link me-2" href="https://github.com/jadenzaleski"
               target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
            <a type="button" class="btn rounded-circle social-button-link"
               href="https://www.linkedin.com/in/jaden-zaleski-2a29791aa/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
            </a>
        </div>
    </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
</body>
</html>
