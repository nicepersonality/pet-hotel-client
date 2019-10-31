import React, { Component } from 'react';
import AddPetForm from './AddPetForm';
import Table from './Table';

class Dashboard extends Component {
    render(){
        return(
            <>
                <AddPetForm />
                <Table />
            </>
        )
    }
}

export default Dashboard;