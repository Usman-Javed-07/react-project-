import { FaArrowRightLong } from "react-icons/fa6";
export const HeroSection = ()=> {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the world, One country at a time 
                    </h1>
                    <p className="paragraph">
                       Discover the history , culture and beauty of every nation,
                       search and filter through every country to find the details
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                   Start Exploring <FaArrowRightLong />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.png" alt="world image"  className="banner-image"/>
                </div>

            </div>

        </main>
    )
}