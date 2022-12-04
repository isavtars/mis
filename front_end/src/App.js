import React from 'react'
import Book from './components/Book';
import Homepage from './components/Homepage';
import Dashboard from './components/admin/Dashboard';
import Addbook from './components/admin/Addbook';
import Page404 from "./Page404"
import Updatebook from "./components/admin/Updatebook"

import Exploarbook from './components/Exploarbbo';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const App = () => {
  return (
   <>

      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}> </Route>
          <Route path="/book" element={<Book/>}> </Route>     
          <Route path="/book/:id" element={<Book/>}> </Route>  
          {/* 62af3e131af33ecaa682b8de */}
          <Route path="/book/exploarbook" element={ <Exploarbook/>}> </Route>
         
          <Route path="dashboard">
           <Route index element={<Dashboard />}></Route>
           <Route  path="addbook" element={<Addbook />}></Route>
           <Route path="updatebook/:id" element={ <Updatebook/>}> </Route>
          
          </Route>

          <Route path="*" element={<Page404/>}> </Route>
        </Routes>
      </Router>

     
   </>
  )
}

export default App