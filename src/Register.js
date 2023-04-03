export function Register() {
  return (
    <div className=" dashpage">
      <div class=" register-row">
        <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>

        <div class="col-lg-7">
          <div class="p-5 account-register">
            <div class="text-center">
              <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
            </div>
            <form class="user">
              <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <input type="text" class="form-control-register form-control-user username-field" id="exampleFirstName" placeholder="First Name"></input>
                </div>
                &nbsp; &nbsp;
                <div class="col-sm-6">
                  <input type="text" class="form-control-register form-control-user" id="exampleLastName" placeholder="Last Name"></input>
                </div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control-email form-control-user email-user" id="exampleInputEmail" placeholder="Email Address"></input>
              </div>
              <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <input type="password" class="form-control-email  form-control-user" id="exampleInputPassword" placeholder="Password"></input>
                </div>
                <div class="col-sm-6">
                  <input type="password" class="form-control-email  form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password"></input>
                </div>
              </div>
              <a href="login.html" class="btn btn-primary btn-user btn-block register-button">
                Register Account
              </a>
              <hr/>
                <a href="index.html" class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a href="index.html" class="btn btn-facebook facebook-register btn-user btn-block">
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
            </form>
            <hr/>
              <div class="text-center">
                <a class="small" href="forgot-password.html">Forgot Password?</a>
              </div>
              <div class="text-center">
                <a class="small" href="login.html">Already have an account? Login!</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
