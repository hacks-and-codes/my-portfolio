import "bootstrap/dist/css/bootstrap.min.css";
import systemresponse from "../assets/systemresponse.png";
import appscreen from "../assets/interface.png";
import statement from "../assets/statement.png";
import mobiletrans from "../assets/mobiletrans.png";
import verify from "../assets/verify.png";

import hostel from "../assets/almareg.png";
import hostelBook from "../assets/almatest.png";

import ImageCarousel from "./ImageCarousel";

const Advantages = () => {
  const AtmImages = [appscreen, statement, mobiletrans, verify];
  const HostelImages = [hostel, hostelBook];
  return (
    <div className="container-fluid text-body-primary">
      <div className="container text-start card-body">
        <i className="fa fa-building fa-1x fa-ico mt-4 mb-2  text-uppercase">
          {" "}
          portfolio
        </i>
      </div>
      <h3 className="card-title">
        <span className="text-body-primaryy text-start fs-1">Featured</span>
        <span className="text-success m-lg-1 fs-1">Projects</span>
      </h3>
      <section className="text-body-primary">
        <p className="text-body-primary fs-6">
          Dive into a collection of projects that showcase my technical skills
          and creativity. These projects span web development, programming, and
          cybersecurity, providing a glimpse of my problem-solving abilities and
          innovative thinking.
        </p>
      </section>
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
                System Analyser
              </h5>
              <p className="card-subtitle mt-3 text-body-primary">
                A script written in python to assess and evaluate the behavior
                and performance of a computer system. Platforms: Linux OS, Windows, Rasberry Pi and
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
                  <li className="text-body-primary">
                    Network speed testing as an indicator of network performance.
                  </li>
                  <li className="text-body-primary">
                    System uptime and system information
                  </li>
                  <li className="text-body-primary">etc</li>
                </ul>
              </p>
              <p className="link-to-project text-sm-center ">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/quarj0/system-analyser"
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
            <ImageCarousel images={HostelImages} />
            <div className="card-body">
              <h5 className="card-header text-center">
                Hostel Management System{" "}
                <small className="m-3 text-danger">Backend</small>{" "}
              </h5>
              <p className="card-subtitle mt-3 text-body-primary">
                Hostel Management System is a web application that allows
                students to search for hostels, book rooms, etc. 
                <br />
                <br />
                The application
                is built with Django and Django Rest Framework for the backend and 
                it&apos;s only the backend part of the project consisting of fully functional RESTful APIs.
              </p>
              <p className="text-body-primary">Features</p>
              <ul className="text-body-primary">
                <li>User authentication and authorization</li>
                <li>User profile management</li>
                <li>User can search for other users by filtering</li>
                <li>Users can book rooms</li>
                <li>Users can view their booking history</li>
                <li>etc</li>
              </ul>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/quarj0/hostel_management"                  target="_blank"
                    rel="noreferrer"
                  >
                    Private Repo
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-top">
          <div className="card h-100">
            <ImageCarousel images={AtmImages} />
            <div className="card-body">
              <h5 className="card-header text-center">
                FingerPrint Based ATM Simulator{" "}
              </h5>
              <p className="card-text">
                A simple ATM simulator built with Java programming language.
                It&apos;s a full GUI application that allows users to perform
                basic ATM operations such as fingerprint verification, deposit,
                withdraw, check balance, etc. It uses the fingerprint sensor to
                verify the user&apos;s identity. No database is used in this
                project. All data is logically stored in the application itself
                and can be accessed by the user. Framework used: JavaSwing
              </p>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/atm-simulator"
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
           
            <div className="card-body">
              <h5 className="card-title">Cyber Dashboard</h5>
              <small className="m-3 text-danger">[In Progress!]</small>{" "}
              <p className="card-text">
                A web application that provides a dashboard for cybersecurity
                professionals to monitor and analyze the security of an
                organization&apos;s network. The application is built with
                Django and Django Rest Framework for the backend and ReactJS for
                the frontend. The application uses the Nessus API to fetch
                vulnerability scan data and display it in a user-friendly
                manner.
              </p>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="#" //to be updated
                  >
                    Not Available
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
