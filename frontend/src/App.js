import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BatchList from './components/Batch/BatchList';
import CategoryList from "./components/Category/CategoryList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BatchList />} />
        <Route exact path="/Category" element={<CategoryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
