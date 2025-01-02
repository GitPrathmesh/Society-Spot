import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Home.css';

const Home = () => {
    const nav = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userInfo1")) {
            nav('/s');
        }
    }, [nav]);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.46/build/spline-viewer.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup script
        };
    }, []);

    return (
        <div className="homepage">
            {/* Spline background */}
            <div className="jumbotron">
                <div className="container">
                    <h1>SocietySpot</h1>
                    <a className="btn btn-light btn-lg" href="/register" role="button">
                        Register
                    </a>
                    <a className="btn btn-dark btn-lg" href="/login" role="button">
                        Login
                    </a>
                </div>
            </div>
            <spline-viewer
                url="https://prod.spline.design/bBt1Gc0FcFxkJIeA/scene.splinecode"
                
            ></spline-viewer>

            {    window.onload = function() {
        var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
        shadowRoot.querySelector('#logo').remove();
    }}
            
        </div>
    );
};

export default Home;
