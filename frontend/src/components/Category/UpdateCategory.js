import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateCategory  = ({ closeUpdateModal }) => {

  const { categoryID } = useParams();

  const [categoryName, setCategoryName] = useState('');
  const [categoryDes, setCategoryDes] = useState('');
  const [categoryStatus, setCategoryStatus] = useState('');
  const [categoryDate, setCategoryDate] = useState('');
  const [adminID, setAdminID] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/category/categoryevent/' + categoryID)
      .then(res => {
        setCategoryName(res.data[0].categoryName);
        setCategoryDes(res.data[0].categoryDes);
        setCategoryStatus(res.data[0].categoryStatus);
        setCategoryDate(res.data[0].categoryDate);
        setAdminID(res.data[0].adminID);
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/api/category/categoryevent/' + categoryID, { categoryName, categoryDes, categoryStatus, categoryDate, adminID })
    .then(res => {
      window.location.reload();
      console.log(res.data)
    })
    .catch(err => console.log(err));

  closeUpdateModal();
}

  return (
    <div className='max-w-2xl mx-auto'>
      <form onSubmit={handleSubmit}>

        <div className="border-gray-900/10 pb-12">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-200">
            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
              Update Category {categoryID}
            </h3>
            <button onClick={closeUpdateModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Category Name
              </label>
              <div className="mt-2">
                <input
                  name='name'
                  type="text"
                  value={categoryName}
                  onChange={e => setCategoryName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Category Description
              </label>
              <div className="mt-2">
                <input
                  name='des'
                  type="text"
                  value={categoryDes}
                  onChange={e => setCategoryDes(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                Category Status
              </label>
              <div className="mt-2">
                <select
                  name='status'
                  value={categoryStatus}
                  onChange={e => setCategoryStatus(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled selected hidden>select status</option>
                  <option value="Active">Active</option>
                  <option value="Frozen">Frozen</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="adminId" className="block text-sm font-medium leading-6 text-gray-900">
                Admin ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name='adminId'
                  value={adminID}
                  onChange={e => setAdminID(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={closeUpdateModal} type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;