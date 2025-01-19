
import { useState } from "react";
// import { useOutletContext } from "react-router-dom";

import AddCustomerPopUp from "./AddCustomerPopUp";
import EditCustomerPopUp from "./EditCustomrPopUp";



export default function CustomerTable({ data, setData, addNewCustomer, handleDelete, onUpdateCustomer }) {


    const [showAddCustomerPopUp, setShowAddCustomerPopUp] = useState(false)
    const [showEditCustomerPopUp, setShowEditCustomerPopUp] = useState(false);

    // Add New Customer Pop Up toggle open or closed
    const handleClickForPopUp = () => {
        setShowAddCustomerPopUp((showAddCustomerPopUp) => !showAddCustomerPopUp)
    }

    // Edit Customer Pop Up Toggle open or closed
    const handleClickEditCustomerPopUp = () => {
        setShowEditCustomerPopUp(!showEditCustomerPopUp)
    }

    // Capture the Customer you wish to edit and set it to the state
    const [editCustomerForm, setEditCustomerForm] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    function captureEditCustomer(clickedCustomer) {
        let filtered = data.filter(customer => customer.customerId === clickedCustomer.customerId)
        setEditCustomerForm(filtered[0])
    }



    // ____________________________________________________________________________________
    // This is the PUT fetch to update the customers for editting purposes

    const handlePutUpdateCustomer = (editCustomerForm) => {

        // const updatedCustomer = {
        //     customerId: editCustomerForm.customerId,
        //     firstName: editCustomerForm.firstName,
        //     lastName: editCustomerForm.lastName,
        //     email: editCustomerForm.email
        // }

        fetch(`https://app-jokeswebapp-web-canadacentral-dev-001-c8azfpatehgyetgk.canadacentral-01.azurewebsites.net/api/customer/${editCustomerForm.customerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editCustomerForm),
        })
        // .then(response => response.json())
        // .then(updatedCustomer => handleCustomerUpdate(updatedCustomer))


        const frontEndUpdate = (customerData) => handleCustomerUpdate(customerData)
        frontEndUpdate(editCustomerForm)
    }

    // _________________________________________________________________________________________________



    // handling the customer update on the front end by re rendering data and closing out the edit customer pop up
    function handleCustomerUpdate(updateCustomer) {
        onUpdateCustomer(updateCustomer)
        setShowEditCustomerPopUp(false);
    }

    // Updating the PUT changes on the Front end so the data will refresh when PUT is submitted
    function onUpdateCustomer(updatedCustomer) {
        const updatedCustomersList = data.map(
            customer => {
                if (customer.customerId === updatedCustomer.customerId) {
                    return updatedCustomer
                }
                else { return customer }
            }
        )

        setData(updatedCustomersList)
    }






    return (
        <div className="px-4 sm:px-6 lg:px-20 mt-20">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Customer Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their First Name, Last Name, and Email.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">

                    <button
                        onClick={handleClickForPopUp}
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                    {showAddCustomerPopUp ? <AddCustomerPopUp addNewCustomer={addNewCustomer} setShowAddCustomerPopUp={setShowAddCustomerPopUp} showAddCustomerPopUp={showAddCustomerPopUp} /> : <></>}
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">


                            {/* We are showing either the table body or the edit customer form here */}
                            {showEditCustomerPopUp ?
                                <EditCustomerPopUp handlePutUpdateCustomer={handlePutUpdateCustomer} handleCustomerUpdate={handleCustomerUpdate} handleClickEditCustomerPopUp={handleClickEditCustomerPopUp} editCustomerForm={editCustomerForm} setEditCustomerForm={setEditCustomerForm} />

                                :


                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                Name
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Title
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Email
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {data.map((person) => (
                                            <tr key={person.email}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {person.firstName}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.lastName}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <button onClick={() => {
                                                        handleClickEditCustomerPopUp()
                                                        captureEditCustomer(person)
                                                    }
                                                    } className="text-indigo-600 hover:text-indigo-900">
                                                        Edit<span className="sr-only">, {person.customerId}</span>
                                                    </button>
                                                    <button onClick={() => handleDelete(person.customerId)} className="text-gray-50 rounded-md hover:text-indigo-900 ml-8 bg-red-800 p-1">
                                                        Delete<span className="sr-only">, {person.customerId}</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
