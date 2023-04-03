import ProgressBar from "@ramonak/react-progress-bar";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import LongMenu from "./LongMenu";
// import 'bootstrap/dist/css/bootstrap.min.css';
export function Cardpage() {
  return (
    <div className=" dashpage dashpage1">
    <h1 class="h3 mb-0 text-gray-800">Cards</h1>
      <div className="row pagecard">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Earnings (Monthly)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    $40,000
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4" style={{ marginleft: "-21px" }}>
          <div
            className="card border-left-primary1 shadow h-100 py-2"
            style={{ marginleft: "-21px" }}
          >
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary1 text-uppercase mb-1">
                    Earnings (Monthly)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    $40,000
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4" style={{ marginleft: "-21px" }}>
          <div className="card border-left-info shadow h-100 py-2 border-left-primary2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Tasks
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        50% &nbsp; &nbsp;{" "}
                        <ProgressBar
                          completed={50}
                          bgColor="#36b9cc"
                          height="10px"
                          width="9.5rem"
                          isLabelVisible={false}
                          labelColor="#e80909" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4" style={{ marginleft: "-21px" }}>
          <div className="card border-left-primary3 shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary3 text-uppercase mb-1">
                    Pending Request
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    18
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="approach card-approach">
      <Card>
        <Card.Header className="text-name">
          <p style={{color:"#a99b9d"
          }}>Default Card Example</p>
        </Card.Header>
        <hr
          style={{
            bordercolor: "1px solid rgb(255,255,255,.15)",
            marginTop: "19px",
            width: "34.5rem",
          }}
        />
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className="card-para">
            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
              classes.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>


    <div className="card-approach1">
      <Card>
        <Card.Header className="text-name">
          <p style={{color:"#4e7ce2"
          }}>Basic Card Example</p>
        </Card.Header>
        <hr
          style={{
            bordercolor: "1px solid rgb(255,255,255,.15)",
            marginTop: "19px",
            width: "41.5rem",
          }}
        />
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{marginTop:"-23px"}}className="card-para">
            The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
              classes.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>


    <div className="card-approach2">
      <Card>
        <Card.Header className="text-name">
          <p style={{color:"#4e7ce2"
          }}>Dropdown Card Example   <LongMenu className="Card-Menu"/> </p>
        </Card.Header>
        <hr
          style={{
            bordercolor: "1px solid rgb(255,255,255,.15)",
            marginTop: "19px",
            width: "41.5rem",
          }}
        />
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{marginTop:"-23px"}}className="card-para">
            Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
    
    </div>
  );
}
