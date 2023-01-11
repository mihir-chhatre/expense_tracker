import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

  // max() wants list of number. however, we have an array of objects so we use map
  // below line returns an array of numbers corresponding to dataPoint values. max() wants a list of numbers rather than array: so we use spread operator
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;