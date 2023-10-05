import React from 'react';

function About() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis, urna at tristique malesuada, dui felis lacinia ex, sit amet bibendum orci nisi sit amet nisl. Proin at urna sit amet mauris tincidunt blandit.</p>
                </div>
                <div className="col-lg-6">
                    <img src="Image.jpg" alt="About Us Image" className="img-fluid rounded-circle" />
                </div>
            </div>
        </div>
    );
}

export default About;
