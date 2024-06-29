import React from 'react';
import './styles.css';

import { Routes, Route } from 'react-router-dom';

import {Landing} from '@homework-task/components/landing/Landing'
import Layout from '@homework-task/components/layout/Layout';
import UserListPage from '@homework-task/pages/userList/UserList.page';

function App() {
    return (
        <main>
            <Routes>
                <Route element={<Layout />} >
                    <Route index element={<Landing />} />
                    <Route path="/" element={<Landing />} />
                    <Route path='/user-list' element={<UserListPage />} />
                </Route>
            </Routes>

        </main>
    );
}

export default App;
