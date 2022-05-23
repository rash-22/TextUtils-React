import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#1a1a1a':'white'
  }

  let buttonStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(40 40 40)':'white'
  }

  // const [btnText, setBtnText] = useState("Enable Dark mode");

  // const toggleMode = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //   } else {
  //     setMyStyle({ color: "black", backgroundColor: "white" });
  //   }
  // };

  return (
    <div className="container" style={myStyle} >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne" >
            <button
              className="accordion-button"
              style={buttonStyle} 
              type="button"
              // style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'dark'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Text Utility
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            About
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
              This application allows you to specify a Text Fonts style supplied
              with in Windows and update entire Autodesk® Revit® projects text
              note style, including all the families loaded on the project.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={buttonStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={buttonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button
          className="btn btn-primary my-3"
          type="button"
          onClick={toggleButton}
        >
          {btnText}
        </button> */}
      {/* </div> */}
    </div>
  );
}
