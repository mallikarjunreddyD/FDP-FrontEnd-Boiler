import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/home/Homepage';
import Register from './components/register/Register';
import Decision from './components/decision/Decision';
import Redeem from './components/redeem/Redeem';
import Certificates from './components/certificates/Certificates';
import Participants from './components/participants/Participants';
import Mint from './components/mint/Mint';

import Connect from './components/auth/Connect'


const AppRoutes = () =>{
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path ="/" element={<Homepage />} />
                    <Route path ="/connect" element={<Connect />} />
                    <Route path ="/register" element={<Register />} />
                    <Route path ="/decision" element={<Decision />} />
                    <Route path ="/redeem" element={<Redeem />} />
                    <Route path ="/certificates" element={<Certificates />} />
                    <Route path ="/participants" element={<Participants />} />
                    <Route path ="/mint" element={<Mint />} />

                    

                </Routes>
            </Layout>
        </Router>
    );
};
export default AppRoutes;