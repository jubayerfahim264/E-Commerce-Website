import "./Products.css";
import { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
  CardHeader,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductsSecond from "./ProductsSecond";

class Products extends Component {
  render() {
    return (
      <>
        <div className="container my-4">
          <p className="products-title">Our Products</p>
          <h2 className="text-capitalize">Explore our Products</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="products-col">
                <Card
                  style={{
                    margin: "10px 0",
                  }}
                >
                  <img alt="Sample" src="/img/headpone1.jpg" />
                  <CardBody>
                    <CardTitle tag="h5" className="card-title">
                      <div className="font-icon">
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                      </div>
                      <p>(8.5 rating)</p>
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Some quick example text to build on the card title
                    </CardSubtitle>
                    <CardFooter
                      style={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "space-between",
                        padding: ".5rem",
                        background: "transparent",
                      }}
                    >
                      <CardHeader
                        style={{
                          borderBottom: "none",
                          marginTop: "13px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "transparent",
                        }}
                      >
                        <strong>$20 </strong>
                        <span
                          style={{
                            textDecorationLine: "Line-through",
                            opacity: ".5",
                          }}
                        >
                          $40
                        </span>
                      </CardHeader>
                      <Button className="mt-3 rounded-0">Buy Now</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="products-col">
                <Card
                  style={{
                    margin: "10px 0",
                  }}
                >
                  <img alt="Sample" src="/img/headpone2.jpg" />
                  <CardBody>
                    <CardTitle tag="h5" className="card-title">
                      <div className="font-icon">
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                      </div>
                      <p>(8.5 rating)</p>
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Some quick example text to build on the card title
                    </CardSubtitle>
                    <CardFooter
                      style={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "space-between",
                        padding: ".5rem",
                        background: "transparent",
                      }}
                    >
                      <CardHeader
                        style={{
                          borderBottom: "none",
                          marginTop: "13px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "transparent",
                        }}
                      >
                        <strong>$20 </strong>
                        <span
                          style={{
                            textDecorationLine: "Line-through",
                            opacity: ".5",
                          }}
                        >
                          $40
                        </span>
                      </CardHeader>
                      <Button className="mt-3 rounded-0">Buy Now</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="products-col">
                <Card
                  style={{
                    margin: "10px 0",
                  }}
                >
                  <img alt="Sample" src="/img/headpone3.jpg" />
                  <CardBody>
                    <CardTitle tag="h5" className="card-title">
                      <div className="font-icon">
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                      </div>
                      <p>(8.5 rating)</p>
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Some quick example text to build on the card title
                    </CardSubtitle>
                    <CardFooter
                      style={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "space-between",
                        padding: ".5rem",
                        background: "transparent",
                      }}
                    >
                      <CardHeader
                        style={{
                          borderBottom: "none",
                          marginTop: "13px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "transparent",
                        }}
                      >
                        <strong>$20 </strong>
                        <span
                          style={{
                            textDecorationLine: "Line-through",
                            opacity: ".5",
                          }}
                        >
                          $40
                        </span>
                      </CardHeader>
                      <Button className="mt-3 rounded-0">Buy Now</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="products-col">
                <Card
                  style={{
                    margin: "10px 0",
                  }}
                >
                  <img alt="Sample" src="/img/headpone4.jpg" />
                  <CardBody>
                    <CardTitle tag="h5" className="card-title">
                      <div className="font-icon">
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                        <FontAwesomeIcon icon={faStar} className="fas" />
                      </div>
                      <p>(8.5 rating)</p>
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Some quick example text to build on the card title
                    </CardSubtitle>
                    <CardFooter
                      style={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "space-between",
                        padding: ".5rem",
                        background: "transparent",
                      }}
                    >
                      <CardHeader
                        style={{
                          borderBottom: "none",
                          marginTop: "13px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "transparent",
                        }}
                      >
                        <strong>$20 </strong>
                        <span
                          style={{
                            textDecorationLine: "Line-through",
                            opacity: ".5",
                          }}
                        >
                          $40
                        </span>
                      </CardHeader>
                      <Button className="mt-3 rounded-0">Buy Now</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
          <ProductsSecond />
        </div>
      </>
    );
  }
}
export default Products;
