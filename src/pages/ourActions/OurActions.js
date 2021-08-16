import React, {useState} from 'react'
import { Container, Button, ButtonGroup } from 'reactstrap';
import MapComp from './MapComp';
import StateMap from './StateMap'

const OurActions = () => {

    const [recycleView, setRecycleView] = useState(false)
    const [stateView, setStateView] = useState(false)
    const handleReset = () => {
        window.location.reload();
    }

    return (
        <Container className='my-5'>
            <div style={{display: 'flex', justifyContent:'center', marginBottom: '10px' }}>
                <h3>FPO MAP</h3>
                <ButtonGroup className='mx-3'>
                    <Button size="sm" color={stateView ? 'muted' : 'primary'} onClick={() => setStateView(!stateView)}>FPO View</Button>
                    <Button size="sm" color={stateView ? 'primary' : 'muted'} onClick={() => setStateView(!stateView)}>State View</Button>
                </ButtonGroup>  
            </div>
            { 
                stateView ? (
                    <StateMap/>
                ) : (
                    <div className='map-comp'>
                        <div className='d-flex justify-content-between'>
                            <MapComp recycleView={recycleView}/>
                            <div>
                                <br/>           
                                <button className='btn btn-info m-2 reset-zoom' onClick={handleReset}>Reset Zoom</button>
                                <br/>
                                <ButtonGroup className='m-2'>
                                    <Button style={{width: '200px'}} color={recycleView ? 'muted' : 'primary'} onClick={() => setRecycleView(!recycleView)}  >Samunnati Supported</Button>
                                    <Button style={{width: '100px'}}color={recycleView ? 'primary' : 'muted'} onClick={() => setRecycleView(!recycleView)}  >All</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                )
            }

        </Container>
    )
}

export default OurActions;