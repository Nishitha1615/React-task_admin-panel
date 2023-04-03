import ProgressBar from "@ramonak/react-progress-bar";
import Button from "@mui/material/Button";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

export function Otherpage() {
  const [show, setShow] = useState(true);
  const dropdown= {
    display: show ? "none" : "block",
  };
  return (
    <div className=" dashpage">
    <h1 class="h3 mb-1 text-gray-800">Other Utilities</h1>
    <p class="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                        below were created to extend this theme past the default utility classes built into Bootstrap's
                        framework.</p>
      <div class="card mb-4 other-card">
        <div class="card-header py-3 others">
          <h6 class="m-0 font-weight-bold text-primary">
            Overflow Hidden Utilty
          </h6>
        </div>
        <div class="card-body">
          Use <code>.o-hidden</code> to set the overflow property of any element
          to hidden.
        </div>
      </div>

      <div class="card mb-4 other-card">
        <div class="card-header other-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            Progress Small Utility
          </h6>
        </div>
        <div class="card-body">
          <div class="mb-1 small">Normal Progress Bar</div>
          <ProgressBar
            completed={67}
            bgColor="#4e73df"
            height="18px"
            width="25rem"
            isLabelVisible={false}
            baseBgColor="#eaecf4"
            labelColor="#e80909"
          />
          <br />
          <div class="mb-1 small">Small Progress Bar</div>
          <ProgressBar
            completed={68}
            bgColor="#4e73df"
            height="15px"
            isLabelVisible={false}
            baseBgColor="#eaecf4"
            labelColor="#e80909"
          />
          Use the <code>.progress-sm</code> class along with{" "}
          <code>.progress</code>
        </div>
      </div>

      <div class="card mb-4 other-card">
        <div class="card-header other-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Dropdown - No Arrow</h6>
        </div>
        <div class="card-body">
          <div class="dropdown no-arrow mb-4">
            <button
              className="other-button btn-secondary"
              style={{ backgroundcolor: "#858796", bordercolor: "#858796" }}
              onClick={() => setShow(!show)} 
            >
            Dropdown (no arrow)
              {/* <span>Dropdown (no arrow)</span> */}
            </button>

            {/* <IconButton
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
          </IconButton> */}

          {/* {show ? (
            <div className="button-other-div dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          ) : (
            ""
          )} */}

            <div className="button-other-div dropdown-menu" style={dropdown}>
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          Add the <code>.no-arrow</code> class alongside the{" "}
          <code>.dropdown</code>
        </div>
      </div>
    </div>
  );
}
