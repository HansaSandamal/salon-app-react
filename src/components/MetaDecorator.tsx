import React from 'react';
import {Helmet} from "react-helmet";
type MetaProps={
title:string;
description:string;
}
const MetaDecorator:React.FC<MetaProps>=({title,description})=>{
    return(
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Helmet>
    )
}
export default MetaDecorator;