import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import '../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>                
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/login" Component={Login} />
                    <Route exact path="/recovery-password" Component={RecoveryPassword} />
                    <Route path="*" Component={NotFound} />                
                </Routes>
            </Layout>
         </BrowserRouter>
    );
}

export default App;