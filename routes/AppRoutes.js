import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';

import App from '../container/App';

export default class AppRoutes extends Component {
    
  render() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/> 
                <Route path="/login" element={<Login />}/>                
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    </>;
  }
}
