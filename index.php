<?php
session_start();

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Home</title>
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
        <a class="navbar-brand ms-0 me-2" href="#">
            <img alt="logo" height="32" src="images/android-chrome-512x512.png" width="32">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <a class="nav-link active fw-bolder" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">Projects</a>
                    <ul class="dropdown-menu">
                        <li><h6 class="dropdown-header">School:</h6></li>
                        <li><span class="dropdown-item-text">Dropdown item text</span></li>
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><h6 class="dropdown-header">Personal:</h6></li>
                        <li><a class="dropdown-item" href="/personal/CanvasSquares" target="_blank">Canvas Squares <span
                                        class="text-muted">(Apr 2022)</span></a></li>
                        <li><a class="dropdown-item" href="/personal/CandyClicker" target="_blank">Candy Clicker <span
                                        class="text-muted">(May 2020)</span></a></li>
                        <li><a class="dropdown-item" href="/personal/ZaleskiPage" target="_blank">Zaleski Page <span
                                        class="text-muted">(Oct 2019)</span></a></li>
                        <li><a class="dropdown-item" href="/personal/ColorPicker" target="_blank">Color Picker <span
                                        class="text-muted">(Mar 2018)</span></a></li>
                        <li><a class="dropdown-item" href="/personal/SwimTeamV2" target="_blank">Swim Team V2 <span
                                        class="text-muted">(Feb 2018)</span></a></li>
                        <li><a class="dropdown-item" href="/personal/SwimTeamV1" target="_blank">Swim Team V1 <span
                                        class="text-muted">(Jun 2017)</span></a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="info.php" target="_blank">Info</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="https://ceclnx01.cec.miamioh.edu/~zaleskjr/"
                       target="_blank">Miami Server</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="node">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-speedometer2" style="margin-bottom: 2px;" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                        </svg>
                    </a>
                </li>
            </ul>

            <span class="navbar-text float-start float-md-none mb-1">
                <?php
                if (isset($_SESSION['loggedin']) && $_SESSION[loggedin]) { ?>
                    Hello, <?php $_SESSION['firstname'] ?>
                <?php } else { ?>
                    Login / Sign Up <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" fill = "currentColor" class="bi bi-chevron-right m-0" viewBox = "0 0 16 16" ><path fill - rule = "evenodd" d = "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg >
                <?php } ?>
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
                <div class="dropdown-menu dropdown-menu-end p-4">
                    <form class="login-form" action="authenticate.php" method="post">
                        <div class="mb-3">
                            <label for="loginFormUsername" class="form-label">Username:</label>
                            <input type="text" name="username" class="form-control" id="loginFormUsername"
                                   placeholder="username" required>
                        </div>
                        <div class="mb-3">
                            <label for="loginFormPassword" class="form-label">Password:</label>
                            <input type="password" name="password" class="form-control" id="loginFormPassword"
                                   placeholder="password" required>
                        </div>
                        <button type="submit" class="btn w-100">Sign in</button>
                    </form>
                    <div class="dropdown-divider mt-3"></div>
                    <p class="dropdown-header"><button class="p-0 m-0 text-decoration-underline border-0 bg-transparent" type="button" data-bs-toggle="modal" data-bs-target="#SignUpModal">Sign up</button> | <a href="mailto:jadenzaleski@icloud.com?subject=Forgot%20Password&body=Hello%2C%0D%0AI%20have%20forgotten%20my%20password.">Forgot password?</a></p>
                </div>
            </div>
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
                <p>Create an account to have access to more features.</p>
                <form class="row g-3 signup-form" method="post" action="signup.php">
                    <div class="col-6">
                        <input type="text" name="firstname" class="form-control" placeholder="First name"  aria-label="First name" required>
                    </div>
                    <div class="col-6">
                        <input type="text" name="lastname" class="form-control" placeholder="Last name" aria-label="Last name" required>
                    </div>
                    <div class="col-12">
                        <input type="email" name="email" class="form-control" placeholder="Email" aria-label="Email" required>
                    </div>
                    <div class="col-6">
                        <input type="text" name="user" class="form-control" placeholder="Username" aria-label="Username" required>
                    </div>
                    <div class="col-6">
                        <input type="password" name="password" class="form-control" placeholder="Password" aria-label="Password" required>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn w-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<main class="container">
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Album example</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the
                    creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
                    entirely.</p>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the
                    creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
                    entirely.</p>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the
                    creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
                    entirely.</p>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the
                    creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
                    entirely.</p>

                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a>
                    <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
        </div>
    </section>
</main>
<div class="spacer mb-5"></div>

<footer class="container">
    <div class="row py-4">
        <div class="col-12 text-center">
            <p>Made by Jaden Zaleski, 2022.</p>
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
