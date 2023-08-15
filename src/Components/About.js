import React, { useState } from 'react'

export default function About(props) {

    // const DarkMode=()=>{
    //           if(mystyle.color==='white')
    //           {
    //             setmyStyle({
    //                 color:'black',
    //                 backgroundColor:'white',
    //                 border:'1px solid black',
    //                 borderRadius:'10px'
    //             })
    //             settheme('Dark Mode')
    //           }else
    //           {
    //             setmyStyle({
    //                 color:'white',
    //                 backgroundColor:'black',
    //                 border:'1px solid white',
    //                 borderRadius:'10px'
    //             })
    //             settheme('light Mode')
    //           }
    // }
    
   let mystyle= {
      color:props.mode==='light'?'black':'white',
      backgroundColor:props.mode==='light'?'white':'#067a97',
      border:`1px solid ${props.mode==='light'?'#067a97':'white'}`,
      borderRadius:'10px'
     }
    
   

   
     
  return (
<div>
    {/* <div className="container my-4" style={mystyle}> */}
        <h2>About Us</h2>
        <div className="accordion my-4" id="accordionExample" style={mystyle} >
            <div className="accordion-item" style={mystyle} >
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                        <strong>Almonds(Badaam)</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Boosts Mental Health
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                    <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong> Cashew Nuts(Kaju)</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Good Source of Calcium
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                    <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Walnuts</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     Boosts Mental Health
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={DarkMode} className="btn btn-primary">{theme}</button>
        </div> */}
        
    {/* </div>   */}
</div>
  )
}
