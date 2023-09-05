import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CCFSA from "../assets/images/CCFSA.png";
import CRPOSS from "../assets/images/CRPOSS.png";
import ICTCA from "../assets/images/ICTCA.png";
import NSDV from "../assets/images/NSDV.png";
import DME from "../assets/images/DME.png";

const CertificationCarousel = () => {
  return (
    <div className="text-body-primary container">
      <div className="card-body">
        <i
          data-aos="fade-right"
          className="fa fa-certificate fa-1x fa-ico mb-3 text-uppercase"
        >
          {" "}
          Qualifications
        </i>
      </div>
      <div className="card-header">
        <h3 className="text-header text-capitalize m-1">
          awards & <span className="text-success">achievements</span>
        </h3>
      </div>
      <div className="card-text text-center bg-transparent">
        <lazyload>
          <Carousel className="d-inline-block w-50">
            <Carousel.Item>
              <img
                src={ICTCA}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={CRPOSS}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={DME}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={CCFSA}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={NSDV}
                className="d-block w-100"
                alt="cert-img"
              />
            </Carousel.Item>
          </Carousel>
        </lazyload>
      </div>
    </div>
  );
};

export default CertificationCarousel;
