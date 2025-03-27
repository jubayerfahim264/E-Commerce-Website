import React, { Component, createRef } from "react";
import { Transition } from "react-transition-group";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faStarHalfStroke,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import HeadphoneBlack from "./SingleProducts/HeadphoneBlack";
import Products from "./SingleProducts/Products/Products";
import img1 from "../../assets/images/headpone4.jpg";
import img2 from "../../assets/images/headpone2.jpg";
import img3 from "../../assets/images/headpone3.jpg";
import img4 from "../../assets/images/headpone5.jpg";
import img5 from "../../assets/images/headpone6.jpg";
import img6 from "../../assets/images/headpone7.jpg";

class Home extends Component {
  state = {
    currentIndex: 0,
    images: [img1, img2, img3, img4, img5, img6],
    texts: [
      "Experience Superior Sound with Roco Wireless Headphones.",
      "Comfort and Quality Combined in Roco Wireless Headphones",
      "Stylish Design Meets Unmatched Sound Quality.",
      "Long-lasting Battery Life for Extended Listening Sessions.",
      "Perfect for Workouts: Sweatproof and Durable.",
      "Cutting-edge Technology for Crystal Clear Audio.",
    ], // Corresponding texts for each image
    isHovered: false,
    direction: "right",
  };

  nodeRef = createRef();
  interval = null;
  duration = 500;

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    this.setState((prev) => ({
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
      direction: "right",
    }));
  };

  prevSlide = () => {
    this.setState((prev) => ({
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
      direction: "left",
    }));
  };

  render() {
    const { images, currentIndex, direction, texts } = this.state;

    const defaultStyle = {
      transition: `opacity ${this.duration}ms ease-in-out, transform ${this.duration}ms ease-in-out`,
      opacity: 0,
      transform:
        direction === "right" ? "translateX(100%)" : "translateX(-100%)",
    };

    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1, transform: "translateX(0%)" },
      exiting: { opacity: 0 },
      exited: { opacity: 0 },
    };

    return (
      <>
        <Header />
        <div className="container">
          <div className="row p-md-5 my-md-5">
            <div className="col-md-6">
              <div className="content-col">
                {/* Dynamic h2 Text Change */}
                <h2>{texts[currentIndex]}</h2>
                <div className="btn-rates">
                  <button>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="fas-cart"
                    />
                    Shop Now
                  </button>
                  <div>
                    <FontAwesomeIcon icon={faStar} className="fas-start" />
                    <FontAwesomeIcon icon={faStar} className="fas-start" />
                    <FontAwesomeIcon icon={faStar} className="fas-start" />
                    <FontAwesomeIcon icon={faStar} className="fas-start" />
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      className="fas-half-star"
                    />
                  </div>
                </div>

                <div className="arrow-btn">
                  <button onClick={this.prevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button onClick={this.nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="images-col"
                onMouseEnter={() => this.setState({ isHovered: true })}
                onMouseLeave={() => this.setState({ isHovered: false })}
              >
                {images.map((img, index) => (
                  <Transition
                    in={currentIndex === index}
                    timeout={this.duration}
                    key={index}
                    nodeRef={this.nodeRef}
                  >
                    {(state) => (
                      <div
                        ref={this.nodeRef}
                        style={{
                          ...defaultStyle,
                          ...transitionStyles[state],
                          position: "absolute",
                        }}
                      >
                        <img src={img} alt={`slide-${index}`} width="100%" />
                      </div>
                    )}
                  </Transition>
                ))}
              </div>
            </div>
          </div>
        </div>
        <HeadphoneBlack />
        <Products />
      </>
    );
  }
}

export default Home;
