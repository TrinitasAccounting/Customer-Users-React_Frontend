

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', current: true },

]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AppNavbar() {


    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center md:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex shrink-0 items-center w-20">

                        </div>
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">

                        <div className="hidden md:ml-4 md:flex md:shrink-0 md:items-center">

                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5 sm:px-6">
                        <div className="shrink-0">
                            <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">{user.name}</div>
                            <div className="text-sm font-medium text-gray-400">{user.email}</div>
                        </div>
                        <button
                            type="button"
                            className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2 sm:px-3">
                        {userNavigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
