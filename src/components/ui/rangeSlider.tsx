import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 100;

interface Props {
    values: number[];
    setValues: React.Dispatch<React.SetStateAction<number[]>>
}

const RangeSlider: React.FC<Props> = ({values, setValues}) => {

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValues([Math.min(newValue[0], values[1] - minDistance), values[1]]);
    } else {
      setValues([values[0], Math.max(newValue[1], values[0] + minDistance)]);
    }
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={values}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        max={30000}
        sx={{
            color: '#967f50'            
        }}
      />      
    </Box>
  );
}

export default RangeSlider;