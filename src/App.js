

import React from 'react';
import './App.css'; 
import Search from './components/Search';
import TransactionForm from './components/TransactionForm';
import Transactions from './components/Transaction';
import CarTable from './components/CarTable';



const App = () => {
  
   const onSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    
  };
  return (
    <div className="app-container">
      <div className="app-header">
       <h2> Royal Bank of Flatiron</h2>
      </div>

      <Search onSearch={onSearch}/>
      <TransactionForm/>
      <Transactions />

      <CarTable/>
      
     
      
    </div>
  );
};

export default App;

