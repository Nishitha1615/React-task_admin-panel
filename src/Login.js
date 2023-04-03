export function Login() {
  return (
    <div className=" dashpage">
      <div class=" login-row">
        <div class="col-lg-6 d-none d-lg-block bg-login-image">
          <div class="col-lg-6 login-cont">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
              </div>
              <form class="user">
                <div class="form-group">
                  <input type="email" class="form-control-login form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."></input>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control-login form-control-user" id="exampleInputPassword" placeholder="Password"></input>
                </div>
                <div class="form-group">
                  <div class="custom-control custom-checkbox small">
                    <input type="checkbox" class="custom-control-input" id="customCheck"></input>
                      <label class="custom-control-label" for="customCheck">Remember
                        Me</label>
                  </div>
                </div>
                <a href="index.html" class="btn btn-primary btn-user btn-block-login">
                  <span className="login-span">login</span>
                </a>
                <hr/>
                  <a href="index.html" class="btn btn-google btn-user btn-block-login">
                    <i class="fab fa-google google fa-fw"></i> <span className="login-span-google">Login with Google</span>
                  </a>
                  <a href="index.html" class="btn btn-facebook btn-user btn-block-login">
                    <i class="fab fa-facebook-f facebook fa-fw"></i> <span className="login-span-facebook"> Login with Facebook</span>
                  </a>
              </form>
              <hr/>
                <div class="text-center">
                  <a class="small" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div class="text-center">
                  <a class="small" href="register.html">Create an Account!</a>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
