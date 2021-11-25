import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { DonationInfo, Login, Register, Header, Donation, Challenge, ChallengeInfo, Home, ClubAdd } from '../components';

const MainRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/donation' element={<Donation/>}/>
                <Route path='/donation/:id' element={<DonationInfo/>}/>
                <Route path='/challenge' element={<Challenge/>}/>
                <Route path='/challenge/:id' element={<ChallengeInfo/>}/>
                <Route path='/cardAdd/:type' element={<ClubAdd/>}/>
                <Route path='/cardAdd/:type/:id' element={<ClubAdd/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default MainRouter;