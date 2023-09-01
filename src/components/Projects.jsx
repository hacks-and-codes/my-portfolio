import "bootstrap/dist/css/bootstrap.min.css";
import systemresponse from "../assets/systemresponse.png";
import almamingle from "../assets/almamingle.png";
import almab from "../assets/almamingleb.png";
import traveljournal from "../assets/traveljournal.webm";

const Advantages = () => {
  return (
    <div className="container-fluid">
      <div className="container text-start card-body">
        <i className="fa fa-building fa-1x fa-ico mt-4 mb-2  text-uppercase">
          {" "}
          portfolio
        </i>
      </div>
      <h3 className="card-title">
        <span className="text-body text-start fs-1">Featured</span>
        <span className="text-success m-lg-1 fs-1">Projects</span>
      </h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
        <div className="col" data-aos="fade-right">
          <div className="card h-100">
            <img
              src={systemresponse}
              className="card-img-top"
              alt="system-response-analyser"
            />
            <div className="card-body">
              <h5 className="card-header text-center">
                System Response Analyser
              </h5>
              <p className="card-subtitle mt-3 text-body-primary">
                A script written in python to assess and evaluate the behavior
                and performance of a computer system. Platforms: Linux OS and
                MacOS
                <p className="text-body-primary">Features</p>
                <ul className="text-body-primary">
                  <li className="text-body-primary">
                    Measuring response time for a given url
                  </li>
                  <li className="text-body-primary">
                    Checking if operatiing system is updated and patched
                  </li>
                  <li className="text-body-primary">
                    Checking availability of updates
                  </li>
                  <li className="text-body-primary">
                    Checking disk, memory and CPU usage{" "}
                  </li>
                  <li className="text-body-primary">etc</li>
                </ul>
              </p>
              <p className="link-to-project text-sm-center ">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/System-Response-Analyzer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-left">
          <div className="card h-100">
            <img src={almamingle} className="card-img-top" alt="site-img" />
            <div className="card-body">
              <h5 className="card-header text-center">
                AlmaMingle <small className="m-3 text-danger">[In Progress!]</small>{" "}
              </h5>
              <p className="card-subtitle mt-3 text-body-primary">
                A webapp for university students&apos; to find and make friends
                from different universities in Ghana. <br /> This project uses
                frameworks such as Django and Django Rest Framework for the
                backend and ReactJS for the frontend.
                <br />
                <br />
                This project is built in two parts: the backend and the
                frontend.
              </p>
              <p className="text-body-primary">Features</p>
              <ul className="text-body-primary">
                <li>User authentication and authorization</li>
                <li>User profile management</li>
                <li>User can search for other users by filtering</li>
                <li>Live Chat</li>
                <li>etc</li>
              </ul>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/almaminglef"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-top">
          <div className="card h-100">
            <img src={almab} className="card-img-top" alt="site-img" />
            <div className="card-body">
              <h5 className="card-header text-center">
                AlmaMingle Backend
                <small className="m-3 text-danger">[In progress!]</small>{" "}
              </h5>
              <p className="card-text">
                Django Rest Framework Backend of AlmaMingle. Your contributions
                are welcome!
              </p>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/almamingleb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-down">
          <div className="card h-100">
            <img src={traveljournal} className="card-img-top" alt="app-img" />
            <div className="card-body">
              <h5 className="card-title">Travel Journal</h5>
              <p className="card-text">A react app minimal project for beginners learning react.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
