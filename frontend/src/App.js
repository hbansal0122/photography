import './App.css';
import React from 'react';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <Box css={{ height: 100 }}>Header</Box>
      <Box>Body</Box>
      <Box css={{ height: 100 }}>Footer</Box>
    </div>
  );
}

export default App;
