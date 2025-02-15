


import React, { useState, useEffect } from 'react';
import AppNavbar from './AppNavbar';
import CustomerTable from './CustomerTable';



function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://app-jokeswebapp-web-canadacentral-dev-001-c8azfpatehgyetgk.canadacentral-01.azurewebsites.net/api/customer')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])



  // Post function is workign as expected, just do not call this function manaully as we will have to roll back our databas to the backup data
  function addNewCustomer(newCustomer) {
    fetch('https://app-jokeswebapp-web-canadacentral-dev-001-c8azfpatehgyetgk.canadacentral-01.azurewebsites.net/api/customer', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newCustomer)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(newCustomerData => {
            setData([...data, newCustomerData])

          })
        }
      })
  }



  // DELETE fetch for the backend and database
  const handleDelete = (id) => {
    fetch(`https://app-jokeswebapp-web-canadacentral-dev-001-c8azfpatehgyetgk.canadacentral-01.azurewebsites.net/api/customer/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          setData(customers => customers.filter(customer => {
            return customer.customerId !== id
          }))
        }
      })
  }




  return (
    <div>
      <AppNavbar />
      <CustomerTable
        data={data} setData={setData} addNewCustomer={addNewCustomer} handleDelete={handleDelete}

      />


    </div>




  );
}

export default App;
