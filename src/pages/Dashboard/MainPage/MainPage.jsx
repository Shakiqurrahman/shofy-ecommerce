import React from 'react';
import './MainPage.css'
import Sidebar from '../../../components/Dashboard/Sidebar/Sidebar.jsx'

const MainPage = () => {
    return (
        <main className='dashboard'>
            <Sidebar />
            <div>
                helllo my friend
            </div>
        </main>
    );
};

export default MainPage;