import React from 'react';

function About() {
    return (
        <div className="container">
        <header>
            <h1>My Responsive Page</h1>
        </header>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <section>
            <h2>Welcome to our website</h2>
            <p>This is a responsive page created using Bootstrap.</p>
        </section>
        <footer>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
    </div>

    );
}

export default About;
