import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import './App.css';

const App = () => {
  const [count, upCount] = useState(0);

  const incNum = () => {
    upCount(count + 1);
  }

  const decNum = () => {
    if (count > 0)
      upCount(count - 1);
    else {
      alert(" Sorry....Ending value is 0")
      upCount(0);
    }
  }



  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{count}</h1>
          <div className='btn_div'>
            <Tooltip title="Icnreament">
              <Button onClick={incNum}><RemoveIcon /></Button>
            </Tooltip>
            <Tooltip title="Decreament">
              <Button onClick={decNum}><AddIcon /></Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
