import React from "react";
import cover from "../assets/images/cover.jpg";
import {Image} from "react-bootstrap";
// import cv1 from "../assets/images/cv1.jpg";
// import cv2 from "../assets/images/cv2.jpg";
// import cv3 from "../assets/images/cv3.jpg";


const Home: React.FC = (ImageState) => {

    return (

        <React.Fragment>
            <div className="page-holder bg-cover">
                <Image src={cover} alt="cover" fluid/>
                <div className="centered">
                    <h1 className='text-head'><b>STEP IN, SIT, RELAX.</b></h1>
                    <h6 className='text-sub-head'><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda consequuntur delectus dolorem et eum explicabo facilis illum ipsum, voluptate!</b></h6>

                </div>

            </div>


        </React.Fragment>


    )
}
export default Home;