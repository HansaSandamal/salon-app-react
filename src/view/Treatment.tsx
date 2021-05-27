import React from "react";
import cover from "../assets/images/cv4.jpg";
import {Container, Image} from "react-bootstrap";
import ServiceMenu from "../components/ServiceMenu";
import MetaDecorator from "../components/MetaDecorator";

const Tratement: React.FC = (ImageState) => {

    return (

        <Container fluid={true} className='content-contact'>
            <MetaDecorator title={"salon HUSH | services | treatements"} description={"hair treatments"}/>
            <Image src={cover} alt='cover' fluid/>
            <div className='container my-4'>
                <h1 className='font-link'><b>HAIR TREATMENT</b></h1>
            </div>

            <div className="row justify-content-md-center">

                <div className="col col-lg-3">

                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Botanical Therapy Hair Spa Treatment
                            <span className="badge badge-dark badge-pill">15</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Color Balance Toner
                            <span className="badge badge-dark badge-pill">20+</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Single Foil
                            <span className="badge badge-dark badge-pill">5</span>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Iron Work
                            <span className="badge badge-dark badge-pill">15+</span>
                        </li>


                    </ul>

                </div>
                <div className="col col-lg-2">

                </div>
                <div className="col-md-auto">

                    <ServiceMenu/>

                </div>

            </div>

        </Container>

    )
}
export default Tratement;