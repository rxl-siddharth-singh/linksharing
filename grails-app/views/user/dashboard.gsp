<!doctype html>
<html lang="en">
<head>
    <meta name="layout" content="mymain">
    <style>
    .divider:after,
    .divider:before {
        content: "";
        flex: 1;
        height: 2px;
        background: #eee;
    }
    </style>
    <title>Link Sharing - Dashboard</title>
</head>

<body>
<g:render template="/_templates/navbar"/>
<div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center  h-100"> <!-- align-items-center -->
        <div class="col-md-6 col-lg-7 col-xl-7">
            <div class="card mt-5 mb-5" style="border-radius: 15px;">
                <div class="card-body">
                    <h3 class="card-title mb-4">Recent shares</h3>
                </div>
            </div>

            <div class="card mb-5" style="border-radius: 15px;">
                <div class="card-body">
                    <h3 class="card-title mb-4">Top posts</h3>
                </div>
            </div>

        </div>
        <div class="col-md-8 col-lg-4 col-xl-4 ml-5">
            <div class="card mt-5" style="border-radius: 15px;">
                <div class="card-body">
                    <h3 class="card-title mb-4">Sign In</h3>
                    <form controller="User" action="signIn" method="post">
                        <div class="form-outline mb-3">
                            <label class="form-label" for="signInUsername">Email or Username</label>
                            <input type="text" id="signInUsername" name="signInUsername"class="form-control form-control-md" />
                        </div>
                        <div class="form-outline mb-2">
                            <label class="form-label" for="signInPass">Password</label>
                            <input type="password" id="signInPass" name="signInPass" class="form-control form-control-md" />
                        </div>
                        <div class="d-flex justify-content-between align-items-center pt-4">
                            <div class="form-check mb-0">
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>
                            <button type="submit" class="btn btn-outline-primary"
                                    style="padding: 0.7rem 1.7rem 0.7rem 1.7rem;">Sign In</button>
                        </div>
                    </form>

                </div>
            </div>

            <!--  ==================================================================== -->
            <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <!--  ==================================================================== -->

            <div class="card mb-5" style="border-radius: 15px;">
                <div class="card-body">
                    <h3 class="card-title mb-4">Sign Up</h3>
                    <form action="">
                        <div class="form-outline mb-3">
                            <label class="form-label" for="SignUpFname">First name</label>
                            <input type="text" id="SignUpFname" class="form-control form-control-md" />
                        </div>
                        <div class="form-outline mb-3">
                            <label class="form-label" for="SignUpLname">Last name</label>
                            <input type="text" id="SignUpLname" class="form-control form-control-md" />
                        </div>
                        <div class="form-outline mb-3">
                            <label class="form-label" for="SignUpEmal">Email</label>
                            <input type="email" id="SignUpEmal" class="form-control form-control-md" />
                        </div>
                        <div class="form-outline mb-3">
                            <label class="form-label" for="SignUpUsername">Username</label>
                            <input type="text" id="SignUpUsername" class="form-control form-control-md" />
                        </div>
                        <div class="form-outline mb-3">
                            <label class="form-label" for="SignUpPass">Password</label>
                            <input type="password" id="SignUpPass" class="form-control form-control-md" />
                        </div>
                        <div class="form-outline mb-2">
                            <label class="form-label" for="SignUpPassRe">Confirm Password</label>
                            <input type="password" id="SignUpPassRe" class="form-control form-control-md" />
                        </div>
                        <div class="form-outline mb-3">
                            <label class="form-label" for="SignUpPfp">Photo</label>
                            <input type="file" class="form-control" id="SignUpPfp" aria-describedby="SignUpPfp"
                                   aria-label="Upload">
                        </div>
                        <div class="d-flex justify-content-between align-items-center pt-4">
                            <div>
                            </div>
                            <!-- <button type="button" class="btn btn-outline-primary btn-lg"
                                    style="padding-left: 2.5rem; padding-right: 2.5rem;">SignUp</button> -->

                            <button type="button" class="btn btn-outline-primary"
                                    style="padding: 0.7rem 1.7rem 0.7rem 1.7rem;">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>