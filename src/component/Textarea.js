import React, { useState } from "react";


export default function TextForm(props) {

    const [text, setText] = useState('Enter text here')

    setText("fiushdfiph")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div>
                <textarea className="form-control" id="myBox" cols="30" rows="10">Hello</textarea>
            </div>
            <button className="btn-primary">Click</button>
        </div>

    )

}