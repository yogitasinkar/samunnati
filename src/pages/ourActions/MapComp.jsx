import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import * as data from './data.json';
import * as recycleData from './recycleData.json';
import dam from '../../images/dam.svg'
import farm from '../../images/farm.png'
// import dam from '../../images/dam.svg'
import factory from '../../images/factory.svg'
import recycle from '../../images/recycle1.png'
import DamModal from './DamModal';
import FactoryModal from './FactoryModal';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function MapComp({recycleView}) {

  const [selectedDam, setSelectedDam] = useState(null)
  const [selectedFactory, setSelectedFactory] = useState(null)

  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: 22.9734,
    longitude: 80.6569,
    zoom: 4,
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle={'mapbox://styles/yogi42/ckpr8ce280k1g17rx4d4w5koi'}
        mapboxApiAccessToken={'pk.eyJ1IjoieW9naTQyIiwiYSI6ImNrcHI2eXN4dTAxZ3Iydm8xcmR2NXR1aDcifQ.7zZJrvP2MyWYFeMDrOC8mw'}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
       {recycleView===false ? (
         data.items.map((item)=> (
          <Marker key={item.ID} longitude={item.coordinates[1]} latitude={item.coordinates[0]}>
            <button className='marker-button' onClick={(e)=> {
              e.preventDefault()
              if(item.type === 'dam'){
                setSelectedDam(item)
              } else {
                setSelectedFactory(item)
              }
            }}>
              {
                item.type === "dam" ? 
                  <img src={farm} alt='Dam' /> :
                  null
              }
            </button>
          </Marker>
        ))
      ) : (
         recycleData.items.map((item)=> (
          <Marker key={item.ID} longitude={item.coordinates[1]} latitude={item.coordinates[0]}>
            <button className='marker-button'>
              {
                  <img src={recycle} alt='Recycle' /> 
              }
            </button>
          </Marker>
        ))      
      )
        }
      </ReactMapGL>
      <DamModal selectedDam={selectedDam} setSelectedDam={setSelectedDam}/>
      <FactoryModal selectedFactory={selectedFactory} setSelectedFactory={setSelectedFactory}/>
    </>
  );
}

export default MapComp