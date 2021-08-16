import React from 'react';
import { Container } from 'reactstrap';
import {Carousel} from '3d-react-carousal';

const Home = () => {
    let slides = [
        <img  src="https://picsum.photos/800/500/?random" alt="1" />,
        <img  src="https://picsum.photos/800/501/?random" alt="2" />,
        <img  src="https://picsum.photos/800/502/?random" alt="3" />, 
        <img  src="https://picsum.photos/800/503/?random" alt="4" /> ,
        <img src="https://picsum.photos/800/504/?random" alt="5" />  
    ];

    return (
        <Container className='my-5'>
            <h3 className='text-center'>OUR GALLERY</h3>
            <Carousel slides={slides} autoplay={true} interval={5000}/>
        </Container>
    )
}

export default Home
