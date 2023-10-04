import React from 'react'

export default function TextForm(props) {
    const upscale  = () => {
        console.log("The function in working to upscaling the text ")
        
        

    }

    const downscale = ()  => {
        console.log("downscale")
    }
    return (
        <div>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                <button className="btn btn-primary " onClick={upscale} >Click</button>
            </div>
    
        </div>
    )
}
