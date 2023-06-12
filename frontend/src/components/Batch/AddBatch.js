import React, { useState } from 'react';
import axios from 'axios';

const AddBatch = ({ closeCreateModal }) => {

  const [values, setValues] = useState({
    batchID: '',
    batchDes: '',
    batchStatus: '',
    batchDate: '',
    adminID: ''
  })

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/batch/batchevent/", values)
      .then(res => {
        window.location.reload();
        console.log(res.data)
      })
      .catch(err => console.log(err));

    closeCreateModal();
  }

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={handleAdd}>

        <div className="border-gray-900/10 pb-12">
          <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-200">
            <h3 class="text-gray-900 text-xl lg:text-2xl font-semibold">
              Add Batch
            </h3>
            <button onClick={closeCreateModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
              <label htmlFor="batchid" className="block text-sm font-medium leading-6 text-gray-900">
                Batch ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  
                  onChange={e => setValues({...values, batchID: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="des" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  
                  onChange={e => setValues({ ...values, batchDes: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                Batch Status
              </label>
              <div className="mt-2">
                <select
                
                onChange={e => setValues({ ...values, batchStatus: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled selected hidden>select status</option>
                  <option>Active</option>
                  <option>Frozen</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                Batch Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  
                  onChange={e => setValues({ ...values, batchDate: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="adminid" className="block text-sm font-medium leading-6 text-gray-900">
                Admin ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  
                  onChange={e => setValues({ ...values, adminID: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button onClick={closeCreateModal} type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
          
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBatch;
