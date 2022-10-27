import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "./portfolio.css"

const Portfolio = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        }
    return(
        <div className="innerBox">
            <div className="container">
                <h2>PORTFOLIO</h2>
                <div className="portfolioWrap">
                    <Slider {...settings}>
                    <div>
                        <img src="images/port1.jpg" />
                        <p><a href="https://leewoonhee.github.io/port1/" target="_blank">사이트보기</a></p>
                    </div>
                    <div>
                        <img src="images/port2.jpg" />
                        <p><a href="https://leewoonhee.github.io/port2/" target="_blank">사이트보기</a></p>
                    </div>
                    <div>
                        <img src="images/port3.jpg" />
                        <p><a href="https://leewoonhee.github.io/portfolio/" target="_blank">사이트보기</a></p>
                    </div>
                    </Slider>
                </div>
            </div>        
        </div>
    )
}
export default Portfolio;
