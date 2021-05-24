import React from "react";
import cover from "../assets/images/cover.jpg";
import {Image} from "react-bootstrap";



const Home:React.FC=()=>{
    return(
        <React.Fragment>
            <Image  src={cover} alt="cover"fluid />

        </React.Fragment>



    )
}
export default Home;