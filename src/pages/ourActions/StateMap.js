import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import RenderBarChart from './RenderBarChart';
import { waterData } from './waterData';

const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};


const geographyStyle = {
  default: {
    outline: 'none',
  },
  hover: {
    fill: '#be3d26',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};

function StateMap() {
  const [tooltipContent, setTooltipContent] = useState('');
  const [data,] = useState(waterData);
  const [currentState, setCurrentState] = useState('GJ')

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}`);
      // setCurrentState(geo.id)
    };
  };

  const onClick = (geo, current = { value: 'NA' }) => {
    return () => {
      // setTooltipContent(`${geo.properties.name}`);
      setCurrentState(geo.id)
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  return (
    <Container >
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <Row>
      <Col xs="8">
        <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            width={300}
            height={200}
            data-tip=""
          > 
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const current = data.find(s => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={geo.id === currentState ? '#be3d26' : '#ff8a75'}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onClick={onClick(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </Col>
      <Col xs="4">
        <Row style={{marginTop: '80px'}}><RenderBarChart currentState={currentState} /></Row>
      </Col>
      </Row>
    </Container>
  );
}

export default StateMap;
