import React from 'react'

export default function About(props) {
  // const [btnText, setbtnText] = useState("Enable Dark Mode")
  // const [myStyle, setMyStyle] = useState({
  //   color: 'back',
  //   backgroundColor: 'white'
  // })
  // const [btnStyle2, setBtnStyle2] = useState({
  //   color: 'back',
  //   backgroundColor: 'white'
  // })
  // const [bodyStyle, setBodyStyle] = useState({
  //   color: 'back',
  //   backgroundColor: 'white'
  // })
  // const toggleColor = () => {
  //   if (myStyle.backgroundColor === 'white') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'grey'
  //     })
  //     // setBtnStyle2({
  //     //   color: 'black',
  //     //   backgroundColor: 'darkgrey'
  //     // })
  //     // setbtnText("Enable Light Mode")
  //     // setBodyStyle({
  //     //   color: 'white',
  //     //   backgroundColor: '#2d2f30'
  //     // })
  //   } else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '2px solid white'
  //     })
  //     // setBtnStyle2({
  //     //   color: 'black',
  //     //   backgroundColor: 'white'
  //     // })
  //     // setbtnText("Enable Dark Mode")
  //     // setBodyStyle({
  //     //   color: 'black',
  //     //   backgroundColor: 'white'
  //     // })
  //   }
  // }
    let myStyle={
      color:props.mode==='dark'?'white':'#61666a',
      backgroundColor:props.mode==='dark'?'#61666a':'white',
      border:"2px Solid",
      borderColor:props.mode==='dark'?'white':'#61666a'
    }


  return (
    <div className='container'>
      <div style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
        <h1>About  Us</h1>
        <div className="accordion" id="accordionExample" >
          {/* style={myStyle}> */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {/*   */}
                Analyse Your Text
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
                Text App gives you a way to Analyse your text quickly and efficiently 
                </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {/* style={myStyle}  */}
                Free To use
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body"> 
              {/* style={bodyStyle} */}
                Text App is a free character counter tool that provides instant count and word count statistics for a given text.
                 </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              {/* // style={myStyle}  */}
                Browser Compatible
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                 {/* style={bodyStyle}> */}
                This word counter software worls in any web browser such as Chrome, Firefox, Internet Explorer, Safari,Opera. It suits to count character in facebook blogs, books,excel document,pdf docs etc.
                </div>
            </div>
          </div>
        </div>
        {/* <div className='container my-3'>
          <button style={btnStyle2} onClick={toggleColor}>{btnText}</button>
        </div> */}
      </div>
      </div>
      )
}
