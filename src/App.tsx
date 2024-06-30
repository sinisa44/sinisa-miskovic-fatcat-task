import React from 'react';
import './styles.css';

import { Routes, Route } from 'react-router-dom';
import {
    QueryClientProvider,
    QueryClient,
} from '@tanstack/react-query';

import { Landing } from '@homework-task/components/landing/Landing';
import Layout from '@homework-task/components/layout/Layout';
import UserListPage from '@homework-task/pages/userList/UserList.page';
import PageGenerator from './pages/pageGenerator/PageGenerator.page';

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Landing />} />
                        <Route path="/" element={<Landing />} />
                        <Route path="/user-list" element={<UserListPage />} />
                        <Route path="/page-generator" element={<PageGenerator />} />
                    </Route>
                </Routes>
            </main>
        </QueryClientProvider>
    );
}

export default App;
