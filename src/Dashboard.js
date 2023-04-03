import { IoIosSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  AiFillSetting,
  AiFillFolder,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { MdKeyboardArrowRight, MdExpandMore } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { TiSpanner } from "react-icons/ti";
import { FaTable } from "react-icons/fa";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "@mui/material/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "@ramonak/react-progress-bar";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "react-bootstrap/Card";
import { Buttonpage } from "./Buttonpage";
import { useState } from "react";
import { Cardpage } from "./Cardpage";
import { Colorpage } from "./Colorpage";
import { Borderpage } from "./Borderpage";
import { Animationpage } from "./Animationpage";
import { Otherpage } from "./Otherpage";
import { Login } from "./Login";
import { Register } from "./Register";
import { Forgotpassword } from "./Forgotpassword";
import { Pagenotfound } from "./Pagenotfound";
import { Blankpage } from "./Blankpage";
import Topbarr from "./Topbarr";

export function Dashboard() {
  const navigatepage = useNavigate();
  const [show, setShow] = useState(true);
  const [Utilities, setUtilities] = useState(true);
  const [Pages, setPages] = useState(true);
  return (
    <div className="container">
      <div className="sidebar-brand-icon rotate-n-15">
        <div className="dash-head">
          <i className="fas fa-laugh-wink fa-2x   fa-rotate-45"></i>
          <span className="wink">
            <b>
            <Button color="inherit" onClick={() => navigatepage("/dash")}>
            &nbsp;&nbsp;<h3 style={{ fontSize:"35px" }}>Sb Admin</h3 ><sup style={{ fontSize:"20px" }}>2</sup>
              </Button>
              {/* &nbsp;&nbsp;Sb Admin <sup>2</sup> */}
            </b>
          </span>
        </div>
      </div>

      <hr className="admin" />
      <div className="board">
        <IoIosSpeedometer style={{ color: "#fff", marginLeft: "13px" }} />
        <Button color="inherit" onClick={() => navigatepage("/dash")}>
          <span className="but" style={{ color: "#fff" }}>
            Dashboard
          </span>
        </Button>
      </div>
      <hr className="dash" />
      <div className="dashboard1">
        <h6 className="headings">INTERFACE</h6>
        <AiFillSetting
          className="highlight"
          style={{ color: "rgba(255,255,255,.8)" }}
        />
        &nbsp;
        <span className="highlight" style={{ color: "rgba(255,255,255,.8)" }}>
          Components
          <IconButton
            className="icon-btn"
            aria-label="delete"
            // color="default"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <MdExpandMore style={{ color: "white", marginLeft: "4rem" }} />
            ) : (
              <MdKeyboardArrowRight
                style={{ color: "white", marginLeft: "4rem" }}
              />
            )}
          </IconButton>
          {show ? (
            <div className="custom">
              <h5 className="cust headings">&nbsp;&nbsp;custom components:</h5>
              <Button color="inherit" onClick={() => navigatepage("/button")}>
                <p className="but">&nbsp;&nbsp;Buttons</p>
              </Button>
              <br />
              <Button color="inherit" onClick={() => navigatepage("/card")}>
                <p className="but1">&nbsp;&nbsp;Cards</p>
              </Button>
              {/* <p>&nbsp;&nbsp;Buttons</p> */}
              {/* <p>&nbsp;&nbsp;Cards</p> */}
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
      <br />
      <div className="comp">
        <TiSpanner style={{ color: "rgba(255,255,255,.8)" }} />
        &nbsp;
        <span style={{ color: "rgba(255,255,255,.8)" }}>
          Utilities
          <IconButton
            className="icon-btn"
            aria-label="delete"
            // color="default"
            onClick={() => setUtilities(!Utilities)}
          >
            {Utilities ? (
              <MdExpandMore style={{ color: "white", marginLeft: "6.4rem" }} />
            ) : (
              <MdKeyboardArrowRight
                style={{ color: "white", marginLeft: "6.4rem" }}
              />
            )}
          </IconButton>
          {Utilities ? (
            <div className="custom utiliti">
              <h5 className="cust headings">
                {" "}
                &nbsp;&nbsp;Utiliti components:
              </h5>
              <Button
                color="inherit"
                style={{ margintop: "-15px" }}
                onClick={() => navigatepage("/colors")}
              >
                <p className="but" style={{ margintop: "-15px" }}>
                  &nbsp;&nbsp;Colors
                </p>
              </Button>
              <br />

              <Button color="inherit" onClick={() => navigatepage("/borders")}>
                <p className="but">&nbsp;&nbsp;Borders</p>
              </Button>
              <br />

              <Button
                color="inherit"
                onClick={() => navigatepage("/animation")}
              >
                <p className="but">&nbsp;&nbsp;Animations</p>
              </Button>
              <br />
              <Button color="inherit" onClick={() => navigatepage("/others")}>
                <p className="but">&nbsp;&nbsp;Other</p>
              </Button>
            </div>
          ) : (
            ""
          )}
          {/* <MdKeyboardArrowRight className="icon" /> */}
        </span>
        {/* <div className="custom utiliti">
          <h5 className="cust headings"> &nbsp;&nbsp;Utiliti components:</h5>
          <Button color="inherit"  style={{margintop: "-15px"}} onClick={() => navigatepage("/colors")}>
          <p  className="but" style={{margintop: "-15px"}}>&nbsp;&nbsp;Colors</p>
              </Button>
              <br />

              <Button color="inherit" onClick={() => navigatepage("/borders")}>
              <p className="but">&nbsp;&nbsp;Borders</p>
              </Button>
              <br />

              <Button color="inherit" onClick={() => navigatepage("/animation")}>
              <p className="but">&nbsp;&nbsp;Animations</p>
              </Button>
              <br />
              <Button color="inherit" onClick={() => navigatepage("/others")}>
              <p className="but">&nbsp;&nbsp;Other</p>
              </Button>
          
        </div> */}
      </div>
      <hr className="dash ut" />
      <h6 className="headings">AddOns</h6>
      <br />
      <div className="add">
        <AiFillFolder style={{ color: "rgba(255,255,255,.8)" }} />
        &nbsp;
        <span style={{ color: "rgba(255,255,255,.8)" }}>
          Pages

          <IconButton
            className="icon-btn"
            aria-label="delete"
            // color="default"
            onClick={() => setPages(!Pages)}
          >
            {Pages ? (
              <MdExpandMore style={{ color: "white", marginLeft: "6.4rem" }} />
            ) : (
              <MdKeyboardArrowRight
                style={{ color: "white", marginLeft: "6.4rem" }}
              />
            )}
          </IconButton>
          {Pages ? (
            <div className="custom page">
          <h5 className="cust headings">&nbsp;&nbsp;Login Screens:</h5>

          {/* <Link to="/contactus">login</Link> */}
          <Button color="inherit" onClick={() => navigatepage("/login")}>
            <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Login</p>
          </Button>
          <br />

          <Button color="inherit" onClick={() => navigatepage("/register")}>
            <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Register</p>
          </Button>
          <br />


          <Button color="inherit" onClick={() => navigatepage("/forget")}>
          <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Forgot Password</p>
          </Button>

          <h5 className="cust headings">&nbsp;&nbsp;Other Pages:</h5>

          <Button color="inherit" onClick={() => navigatepage("/404")}>
          <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;404 Page</p>
          </Button>
          <br />
          
          <Button color="inherit" onClick={() => navigatepage("/blankpage")}>
          <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Blank Page</p>
          </Button>
         
        </div>
          ) : (
            ""
          )}

        </span>
        {/* <div className="custom page">
          <h5 className="cust headings">&nbsp;&nbsp;Login Screens:</h5>

          
          <Button color="inherit" onClick={() => navigatepage("/login")}>
            <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Login</p>
          </Button>
          <br />

          <Button color="inherit" onClick={() => navigatepage("/register")}>
            <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Register</p>
          </Button>
          <br />


          <Button color="inherit" onClick={() => navigatepage("/forget")}>
          <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Forgot Password</p>
          </Button>

          <h5 className="cust headings">&nbsp;&nbsp;Other Pages:</h5>

          <Button color="inherit" onClick={() => navigatepage("/404")}>
          <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;404 Page</p>
          </Button>
          <br />
          
          <Button color="inherit" onClick={() => navigatepage("/blankpage")}>
          <p className="but" style={{ margintop: "-15px" }}>&nbsp;&nbsp;Blank Page</p>
          </Button>
         
        </div> */}
      </div>
      <br />
      <br />
      <div className="charts">
        <AiOutlineAreaChart style={{ color: "rgba(255,255,255,.8)" }} />
        &nbsp;
        <span style={{ color: "rgba(255,255,255,.8)" }}>Charts</span>
      </div>
      <br />
      <br />
      <br />
      <div className="table">
        <FaTable style={{ color: "rgba(255,255,255,.8)" }} />
        &nbsp;
        <span style={{ color: "rgba(255,255,255,.8)" }}>Tables</span>
      </div>

      <Routes>
        <Route path="/dash" element={<Dashboardpage />} />
        <Route path="/button" element={<Buttonpage />} />
        <Route path="/card" element={<Cardpage />} />
        <Route path="/colors" element={<Colorpage />} />
        <Route path="/borders" element={<Borderpage />} />
        <Route path="/animation" element={<Animationpage />} />
        <Route path="/others" element={<Otherpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forgotpassword />} />
        <Route path="/404" element={<Pagenotfound/>} />
        <Route path="/blankpage" element={<Blankpage/>} />
        {/* <Route
          path="/books"
          element={<BookList   booklist={booklist}/>}
        />
        <Route
          path="/books/:bookid"
          element={<BookTrailer booklist={booklist} />}
        />
        <Route path="/add-color" element={<Addcolor />} />
        <Route path="/novel" element={<Navigate replace to="/books" />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route
          path="/books/add"
          element={<Addbook booklist={booklist} setBookList={setBookList}/>}
        /> */}
      </Routes>
    </div>
  );
}

function Dashboardpage() {
  const now = 60;
  return (
    // <p className="dash-heading" style={{marginLeft:"40rem"}}>Dashboard</p>

    <div className="dashpage">
   
      <p className="dash-heading">Dashboard</p>

      <div className="row">
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
                          labelColor="#e80909"
                        />
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

      <Progressbar />
      <Colorcodes />
      <Illustrations />
      <Development />
    </div>
  );
}
function Progressbar() {
  return (
    <div className="progress-bars">
      <b>
        <p style={{ color: "#4e7be2", marginLeft: "15px" }}>Projects</p>
      </b>
      <hr className="project" />
      <div className="bars">
        <p>
          Server Migration <span className="Project-progress">20%</span>
        </p>
        <ProgressBar
          completed={20}
          bgColor="#dc383e"
          height="16px"
          width="28rem"
          isLabelVisible={false}
          labelColor=""
        />
        <p>
          Server Tracking <span className="Project-progress">40%</span>
        </p>
        <ProgressBar
          completed={40}
          bgColor="#f6c23e"
          height="16px"
          width="28rem"
          isLabelVisible={false}
          labelColor="#e80909"
        />
        <p>
          Custormer Database<span className="Project-progress">60%</span>
        </p>
        <ProgressBar
          completed={60}
          bgColor="#4e73df"
          height="16px"
          width="28rem"
          isLabelVisible={false}
          labelColor="#e80909"
        />
        <p>
          Pay Out Details<span className="Project-progress">80%</span>
        </p>
        <ProgressBar
          completed={80}
          bgColor="#36b9cc"
          height="16px"
          width="28rem"
          isLabelVisible={false}
          labelColor="#e80909"
        />
        <p>
          Account Setup<span className="Project-progress">100%</span>
        </p>
        <ProgressBar
          completed={100}
          bgColor="#1cc88a"
          height="16px"
          width="28rem"
          isLabelVisible={false}
          labelColor="#e80909"
        />
      </div>
    </div>
  );
}

function Colorcodes() {
  return (
    <div className="color-div">
      <div className="Primary-color"></div>
      <div className="Success-color"></div>
      <div className="info-color"></div>

      <div className="Warning-color"></div>

      <div className="danger-color"></div>

      <div className="Secondary-color"></div>
      <div className="Light-color"></div>
      <div className="Dark-color"></div>
    </div>
  );
}

function Illustrations() {
  return (
    <div className="illustration-card">
      <Card>
        <Card.Header className="text-name">
          <b>Illustrations</b>
        </Card.Header>
        <hr
          style={{
            bordercolor: "1px solid rgb(255,255,255,.15)",
            marginTop: "19px",
            width: "41.5rem",
          }}
        />
        <div className="image">
          <img
            className="img-ill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYzBYD8kdjHe9VnspYlCQ9jfwz4KbBZkBNA&usqp=CAU"
          ></img>
        </div>
        <Card.Body>
          <Card.Text className="text-para">
            Add some quality, svg illustrations to your project courtesy of
            unDraw, a constantly updated collection of beautiful svg images that
            you can use completely free and without attribution!
          </Card.Text>

          <a target="_blank" rel="nofollow" href="https://undraw.co/">
            Browse Illustrations on unDraw →
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

function Development() {
  return (
    <div className="approach">
      <Card>
        <Card.Header className="text-name">
          <b>Development Approach</b>
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
            <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
              order to reduce CSS bloat and poor page performance. Custom CSS
              classes are used to create custom components and custom utility
              classes. Before working with this theme, you should become
              familiar with the Bootstrap framework, especially the utility
              classes.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;
