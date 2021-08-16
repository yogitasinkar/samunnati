import React from 'react';
import { Container } from 'reactstrap';
import journey from '../../images/journey.jpeg'

const Journey = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-center'>JOURNEY</h3>
            <div className='text-center my-3'>
                <img src={journey} alt='journey'/>
            </div>
        </Container>
    )
}

export default Journey
