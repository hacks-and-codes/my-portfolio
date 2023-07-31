import 'bootstrap/dist/css/bootstrap.min.css';

const Introduction = () => {
  return (
    <div>
        <div>
         <i className="fa fa-home fa-1x fa-ico"> Introduce</i>
          <h1 className="text-header text-wrap">
            <span className="text">Say hello from </span>
            <span className="text-success">Young, </span>
            <span className="text">programmer and ethical hacker</span>
          </h1>
          <p className="text-wrap text-body-primary">
            I develop website, program with python with main focus on cyber
            security.
          </p>
        </div>
        <div className="text-center card-body">
          <h3 className="text-header experience ">5+</h3>
          <p className="text-wrap text-body-primary">years of experience</p>
        </div>
    </div>
  )
}

export default Introduction