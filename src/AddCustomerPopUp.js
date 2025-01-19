

// import { useOutletContext } from 'react-router-dom'



import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'


export default function AddCustomerPopUp({ addNewCustomer, setShowAddCustomerPopUp, showAddCustomerPopUp }) {



    const [open, setOpen] = useState(true)

    const [addCustomerForm, setAddCustomerForm] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })


    // Updating form to hold the typed in data
    const handleCustomerFormUpdate = (event) => {
        setAddCustomerForm({ ...addCustomerForm, [event.target.name]: event.target.value })
    }


    const handleFormSubmission = (event) => {
        event.preventDefault();
        addNewCustomer(addCustomerForm)

        setShowAddCustomerPopUp(!showAddCustomerPopUp)

    }





    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <div className="fixed inset-0" />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                <div className="h-0 flex-1 overflow-y-auto">
                                    <div className="bg-gray-700 px-4 py-6 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <DialogTitle className="text-base font-semibold text-white">New Customer</DialogTitle>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setShowAddCustomerPopUp(false)}

                                                    className="relative rounded-md bg-gray-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <p className="text-sm text-indigo-200">
                                                Get started by filling in the information below to create your new project.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                                            <div className="space-y-6 pb-5 pt-6">
                                                <div>
                                                    <label htmlFor="project-name" className="block text-sm/6 font-medium text-gray-900">
                                                        First Name
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="project-name"
                                                            value={addCustomerForm.firstName}
                                                            name="firstName"
                                                            onChange={handleCustomerFormUpdate}
                                                            type="text"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <label htmlFor="project-name" className="mt-5 block text-sm/6 font-medium text-gray-900">
                                                        Last Name
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="project-name"
                                                            value={addCustomerForm.lastName}
                                                            name="lastName"
                                                            onChange={handleCustomerFormUpdate}
                                                            type="text"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <label htmlFor="project-name" className="mt-5 block text-sm/6 font-medium text-gray-900">
                                                        Email
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="project-name"
                                                            value={addCustomerForm.email}
                                                            name="email"
                                                            onChange={handleCustomerFormUpdate}
                                                            type="text"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>

                                                </div>

                                            </div>
                                            <div className="pb-6 pt-4">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex shrink-0 justify-end px-4 py-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleFormSubmission}
                                        type="submit"
                                        className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
