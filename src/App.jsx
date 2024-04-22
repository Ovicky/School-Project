import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import SearchBar from '../component/searchBar';
import ErrorTesting from '../component/ErrorTesting';
import  PageNotFound from '../component/PageNotFound'

import './App.css';

const customTheme = {
  colors: {
    primary: '#FF5722',
    secondary: '#2196F3',
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Helvetica, sans-serif',
  },
};

function App() {
  return (
    <ChakraProvider theme={customTheme}>
    <div style={{ backgroundColor: customTheme.colors.primary }}>
      <h1>Repository Search Engine</h1>
      <SearchBar />
      <ErrorTesting />
      {/* <PageNotFound /> */}
    </div>
  </ChakraProvider>
  );
}

export default App;
