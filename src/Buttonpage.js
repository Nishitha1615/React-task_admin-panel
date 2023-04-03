import Card from "react-bootstrap/Card";

export function Buttonpage() {
  return (
    <div className="button-page">
    <h1 class="h3 mb-4 text-gray-800">Buttons</h1>
      <div className="social">
      
        <Card>
          <Card.Header className="text-name">
            <b>Circle Buttons</b>
          </Card.Header>
          <hr
            style={{
              bordercolor: "rgb(255,255,255,.15)",
              marginTop: "19px",
              width: "38.5rem",
            }}
          />
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ marginLeft: "-3rem", marginTop: "-29px" }}>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>

              <div class="mb-2">
                <p>.btn-circle</p>
              </div>

              <div className="button-circle">
                <a href="#" class="btn btn-primary btn-circle">
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a href="#" class="btn btn-success btn-circle">
                  <i class="fas fa-check"></i>
                </a>

                <a href="#" class="btn btn-info btn-circle">
                  <i class="fas fa-info-circle"></i>
                </a>

                <a href="#" class="btn btn-warning btn-circle">
                  <i class="fas fa-exclamation-triangle"></i>
                </a>

                <a href="#" class="btn btn-danger btn-circle">
                  <i class="fas fa-trash"></i>
                </a>
              </div>

              <div class="mb">
                <p>.btn-circle .btn-sm</p>
              </div>

              <div class="small-buttons">
                <a href="#" class="btn btn-primary btn-circle btn-sm">
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a href="#" class="btn btn-success btn-circle btn-sm">
                  <i class="fas fa-check"></i>
                </a>

                <a href="#" class="btn btn-info btn-circle btn-sm">
                  <i class="fas fa-info-circle"></i>
                </a>

                <a href="#" class="btn btn-warning btn-circle btn-sm">
                  <i class="fas fa-exclamation-triangle"></i>
                </a>

                <a href="#" class="btn btn-danger btn-circle btn-sm">
                  <i class="fas fa-trash"></i>
                </a>
              </div>

              <div class="mb-large">
                <p>.btn-circle .btn-lg</p>
              </div>

              <div class="large-buttons">
                <a href="#" class="btn btn-primary btn-circle btn-lg">
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a href="#" class="btn btn-success btn-circle btn-lg">
                  <i class="fas fa-check"></i>
                </a>

                <a href="#" class="btn btn-info btn-circle btn-lg">
                  <i class="fas fa-info-circle"></i>
                </a>

                <a href="#" class="btn btn-warning btn-circle btn-lg">
                  <i class="fas fa-exclamation-triangle"></i>
                </a>

                <a href="#" class="btn btn-danger btn-circle btn-lg">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      <div className="button-with icon">
        <Card>
          <Card.Header className="text-name">
            <b>Split Buttons with Icon</b>
          </Card.Header>
          <hr
            style={{
              bordercolor: "rgb(255,255,255,.15)",
              marginTop: "19px",
              width: "35.5rem",
            }}
          />
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ marginLeft: "-3rem", marginTop: "-29px" }}>
                Works with any button colors, just use the .btn-icon-split class
                and the markup in the examples below. The examples below also
                use the .text-white-50 helper class on the icons for additional
                styling, but it is not required.
              </p>

              <div className="split-button-container">
                <a href="#" class="btn btn-primary btn-icon-split">
                  <div className="flag-icon">
                    <i class="fas fa-flag my-flag"></i>
                  </div>

                  <span class="text" style={{ marginleft: "10px" }}>
                    Split Button Primary
                  </span>
                </a>
                <br />
                <a href="#" class="btn btn-success  btn-icon-split">
                  <div className="flag-icon green">
                    <i class="fas fa-check my-flag"></i>
                  </div>

                  <span class="text" style={{ marginleft: "10px" }}>
                    Split Button Success
                  </span>
                </a>
                <br />
                <a href="#" class="btn btn-info   btn-icon-split">
                  <div className="flag-icon blue">
                    <i class="fas fa-info-circle my-flag"></i>
                  </div>

                  <span class="text" style={{ marginleft: "10px" }}>
                    Split Button Info
                  </span>
                </a>
                <br />
                <a href="#" class="btn btn-warning   btn-icon-split">
                  <div className="flag-icon yellow">
                    <i class="fas fa-exclamation-triangle my-flag"></i>
                  </div>

                  <span class="text" style={{ marginleft: "10px" }}>
                    Split Button Warning
                  </span>
                </a>
                <br />
                <a href="#" class="btn btn-danger   btn-icon-split">
                  <div className="flag-icon red">
                    <i class="fas fa-trash my-flag"></i>
                  </div>

                  <span class="text" style={{ marginleft: "10px" }}>
                    Split Button Danger
                  </span>
                </a>
                <br />
                <a href="#" class="btn  btn-secondary   btn-icon-split">
                  <div className="flag-icon gray">
                    <i class="fas fa-arrow-right my-flag"></i>
                  </div>

                  <span class="text" style={{ marginleft: "10px" }}>
                    Split Button Secondary
                  </span>
                </a>
                <br />
                <a href="#" class="btn btn-light   btn-icon-split">
                  <div className="flag-icon white">
                    <i class="fas fa-arrow-right my-flag"></i>
                  </div>

                  <span class="text" style={{ marginleft: "10px" }}>
                    Split Button Light
                  </span>
                </a>
                <br /> <br />
                <p>Also works with small and large button classes!</p>
                <br />
                <a href="#" class="btn btn-primary btn-icon-split-small">
                  <div className="flag-icon-small">
                    <i class="fas fa-flag my-flag-small"></i>
                  </div>

                  <span class="text-small" style={{ marginleft: "10px" }}>
                    Split Button Small
                  </span>
                </a>
                <br />
                <a href="#" class="btn btn-primary btn-icon-split-large">
                  <div className="flag-icon-large">
                    <i class="fas fa-flag my-flag-large"></i>
                  </div>

                  <span class="text-large" style={{ marginleft: "10px" }}>
                    Split Button Large
                  </span>
                </a>
              </div>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      <div className="brand-component">
        <Card>
          <Card.Header className="text-name">
            <b>Brand Buttons</b>
          </Card.Header>
          <hr
            style={{
              bordercolor: "rgb(255,255,255,.15)",
              marginTop: "19px",
              width: "38.5rem",
            }}
          />
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ marginLeft: "-3rem", marginTop: "-29px" }}>
                Google and Facebook buttons are available featuring each
                company's respective brand color. They are used on the user
                login and registration pages.
              </p>
              <p>
                You can create more custom buttons by adding a new color
                variable in the _variables.scss file and then using the
                Bootstrap button variant mixin to create a new style, as
                demonstrated in the _buttons.scss file.
              </p>

              <a href="#" class="btn btn-google btn btn-danger btn-block">
                <i class="fab fa-google fa-fw google-img"></i>
                .btn-google
              </a>

              <a href="#" class="btn btn-primary btn-facebook btn-block"><i class="fab fa-facebook-f fa-fw facebook-img"></i> .btn-facebook</a>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
