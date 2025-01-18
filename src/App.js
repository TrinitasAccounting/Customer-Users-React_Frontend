


import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`/api/customer`);
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     }
  //     catch (error) {
  //       console.error('Error fetching data', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch('https://app-jokeswebapp-web-canadacentral-dev-001-c8azfpatehgyetgk.canadacentral-01.azurewebsites.net/api/customer')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])


  // const allData = data.map(item => (
  //   { id: item.customerId, firstName: item.firstName, lastName: item.lastName }
  // ))

  console.log(data)









  return (
    <div >
      <h1>Test Test Test</h1>
      {data.map(item => (
        <h2>{item.firstName}</h2>
      ))}

    </div>
  );
}

export default App;
