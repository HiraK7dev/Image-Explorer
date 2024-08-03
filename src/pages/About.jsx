import Header from "../components/Header"
import './About.css'

function About() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="about-container">
                    <h1>About Image Explorer</h1>
                    <p>
                        Welcome to Image Explorer, your ultimate destination for discovering and exploring stunning images. Powered by the Unsplash API, our web application offers a seamless experience for finding high-quality photographs that cater to your every need.
                    </p>
                    <p>
                        Whether you are looking for inspiration, need images for your next project, or simply enjoy browsing through beautiful photography, Image Explorer has got you covered. Dive in and explore the world of images with ease and convenience.
                    </p>
                </div>
            </div>
        </>
    )
}
export default About