import React from 'react';

const CarTable = () => {
 
  const cars = [
    { date: '12-04-2001', description: 'Toyota Camry', category: 'Sedan', amount: 25000 },
    { date: '9-22-2023', description: 'Honda Civic', category: 'Sedan', amount: 22000 },
    { date: '1-11-2013', description: 'Ford F-150', category: 'Truck', amount: 35000 },
  ];

  return (
    <div>
      
      <table class='table-auto'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.date}</td>
              <td>{car.description}</td>
              <td>{car.category}</td>
              <td>${car.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;
