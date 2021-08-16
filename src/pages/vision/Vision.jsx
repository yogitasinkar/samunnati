import React from 'react'
import { Container } from 'reactstrap';
import logo  from '../../images/brandnew.jpeg'

const Vision = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-center'>VISION</h3>
            <div className='text-center'>
                <img src={logo} alt='logo' style={{width: '500px'}}/>
            </div>
            <div style={{fontSize: '20px', marginLeft: '170px', marginTop: '50px'}}>
                <ul>
                    <li>Bring about positive change to the community by empowering innovations.</li>
                    <li>Identify and support in-need community by bringing the right technological interventions to them.</li>
                </ul>
            </div>
        </Container>
    )
}

export default Vision
