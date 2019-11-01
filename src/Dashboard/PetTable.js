import React, { Component } from 'react';
import axios from 'axios';
import TableItem from './TableItem';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

class PetTable extends Component {

    state = {
        pets: []
    }

    componentDidMount(){
        this.getPets();
    }

    getPets = () => {
        axios.get('http://127.0.0.1:5000/pets')
            .then((response) => {
                console.log(response.data)
                this.setState({ pets: response.data })
            })
            .catch(error => {
                console.log('Error getting pets', error);
            })
    }

    mapTable = () => {
        return (
            this.state.pets.map(item =>
                <TableRow key={item[0]}>
                    <TableItem item={item} handleCheckin={this.handleCheckin} handleDelete={this.handleDelete} />
                </TableRow>)
        )
    }

    handleCheckin = (id) => {
        axios.put(`http://127.0.0.1:5000/pets/checkin/`, {"id": id})
            .then(() => {
                this.getPets();
            })
            .catch(error => {
                console.log('Error in check-in', error);
            })
    }

    handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:5000/pets/remove/?id=${id}`)
            .then(() => {
                this.getPets();
            })
            .catch(error => {
                console.log('Error in delete', error);
            })
    }

    render() {
        return (
            <>
                Table Component
                <br/>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Owner</TableCell>
                            <TableCell>Pet</TableCell>
                            <TableCell>Breed</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Checked In</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.mapTable()}
                    </TableBody>
                </Table>
            </>
        )
    }
}

export default PetTable;