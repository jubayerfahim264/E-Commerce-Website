import singleImg from "../../../assets/images/bg-remove.png";
import CountdownTimer from "./Timer/Timer";

const HeadphoneBlack = () => (
  <section className="container headphone-wrapper py-5">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="content">
          <p className="title">Best Headphone</p>
          <h2>Enhance Your Music Experience</h2>
          <div className="countdown d-flex gap-3 my-3">
            <CountdownTimer />
          </div>
          <button className="btn btn-primary">Check it out</button>
        </div>
      </div>
      <div className="col-md-6 text-center">
        <img src={singleImg} alt="Headphone" className="img-fluid" />
      </div>
    </div>
  </section>
);

export default HeadphoneBlack;
