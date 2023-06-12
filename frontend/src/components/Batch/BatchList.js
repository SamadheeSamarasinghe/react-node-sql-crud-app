import React, { useState, useEffect } from "react";
import axios from 'axios';
import AddBatch from "./AddBatch";
import Modal from 'react-modal';
import UpdateBatch from "./UpdateBatch";

const BatchList = () => {
    const [users, setUsers] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const fetchData = () => {
        axios.get("http://localhost:8080/api/batch/batchevents")
            .then(response => {
                setUsers(response.data);
            })
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (batchID) => {
        axios.delete('http://localhost:8080/api/batch/batchevent/' + batchID)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    const openCreateModal = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setShowCreateModal(false);
    };

    const openUpdateModal = () => {
        setShowUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    };

    return (
        <div class="bg-white p-8 rounded-md w-full">
            <div class=" flex items-center justify-center pb-4">
                <div>
                    <h2 class="text-gray-600 text-3xl font-bold">Batch List</h2>
                </div>
            </div>

            <div class=" flex items-center justify-end pb-4">
                <div class="flex items-center justify-between">

                    <div class="lg:ml-40 ml-10 space-x-8">
                        <select name="empType" class="px-4 py-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option disabled selected hidden>Batch Status</option>
                            <option>Active Batches</option>
                            <option>Frozen Batches</option>
                        </select>
                        <button onClick={openCreateModal} class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Batch +</button>
                        <Modal isOpen={showCreateModal} onRequestClose={closeCreateModal}>
                            <AddBatch closeCreateModal={closeCreateModal} />
                        </Modal>
                    </div>
                </div>

            </div>

            <div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Batch ID
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Batch Description
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Batch Date
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Admin ID
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => {
                                    return (
                                        <tr key={user.batchID}>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.batchID}</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.batchDes}</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.batchStatus}</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.batchDate}</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.adminID}</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div class="flex items-center gap-x-6">

                                                    <button onClick={openUpdateModal} class="text-blue-500 transition-colors duration-200">Edit</button>
                                                    <Modal isOpen={showUpdateModal} onRequestClose={closeUpdateModal}>
                                                        <UpdateBatch closeUpdateModal={closeUpdateModal} />
                                                    </Modal>
                                                    <button button onClick={() => handleDelete(user.batchID)} className="text-red-500 transition-colors duration-200">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BatchList;