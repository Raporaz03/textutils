import React, {useState} from 'react'

export default function About(props) {
    // const  [myStyle, setMyStyle] = useState( {
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    //  const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border:"1px solid white "
    //         })
    //         setBtnText("Enable light mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable dark mode")
    //     }
    // }

    let myStyle = {
      color : props.mode ==='dark'?'white':'#1c16b7',
      backgroundColor: props.mode ==='dark'?'#1c16b7':'white'
    }
    
  return (
      <div className='container' style={{ color : props.mode ==='dark'?'white':'#1c16b7'}}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Our Mission
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={myStyle}>
        {/* <strong>This is the first item's accordion body.</strong>  */}
         This section can briefly describe the company's mission and how it relates to the text converter website. For example, "Our mission is to help people easily convert their text files to various formats to make their work easier and more efficient." 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Our Values
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        {/* <strong>This is the second item's accordion body.</strong> */}
        This section can describe the company's values and how they are reflected in the website's services. For example, "We value simplicity and efficiency, and strive to provide our users with the easiest and most convenient way to convert their text files."
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Privacy Policy and Terms of Use
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This section can provide details about the website's privacy policy and terms of use. You can include information about how user data is collected and used, as well as any legal disclaimers or limitations of liability.
      </div>
    </div>
  </div>
</div>
{/* <div className="container">

<button type="button" onClick={toggleStyle} className="btn btn-primary mx-2 my-2">{btntext}</button>
</div> */}
    </div>
  )
}
