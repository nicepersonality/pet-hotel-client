import React, { Component } from 'react';
import AddPetForm from './AddPetForm';
import PetTable from './PetTable';

class Dashboard extends Component {
    render(){
        return(
            <>
                <AddPetForm />
                <PetTable />
            </>
        )
    }
}

export default Dashboard;