import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Login, Register } from '../components';
import { Header} from '../components'

const MainRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default MainRouter;