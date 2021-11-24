import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Login, Register, Header, Donation, Challenge,ChallengeInfo } from '../components';

const MainRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/donation' element={<Donation/>}/>
                <Route path='/challenge' element={<Challenge/>}/>
                <Route path='/challenge/:id' element={<ChallengeInfo/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default MainRouter;