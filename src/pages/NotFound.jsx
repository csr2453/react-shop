import React from "react";
import '../styles/error404.scss';

const NotFound = () => {
    return(  
        <div>
            <h1>404 Error Page #1</h1>
            <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section class="error-container">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </section>
            <div class="link-container">
                <a target="_blank" href="#" class="more-link">Visit the original article</a>
            </div>
        </div>
    );
}
export default NotFound;