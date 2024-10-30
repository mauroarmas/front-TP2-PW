import React from 'react';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

const StudentModule = () => {
    return (
        <div className='px-3'>
            <SearchBar></SearchBar>
            <Table></Table>
        </div>
    );
};

export default StudentModule;