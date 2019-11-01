import React, { Component } from 'react';
import Axios from 'axios'

class AddPetForm extends Component {
    state = {}
    getOwners = () => {
        Axios.get('http://127.0.0.1:5000/owner')
            .then(response => {
                console.log(response.data)
                this.setState({
                    ...this.state,
                    owners: response.data
                })
            }).catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.getOwners();
    }
    handleChange = (event, keyName) => {
        this.setState({
            ...this.state,
            [keyName]: event.target.value
        })
    }
    getOwnerId = (event) => {
        const selectedOwner = event.target.value;
        this.state.owners.forEach(owner => {
            if (owner[1] === selectedOwner){
                this.setState({
                    ...this.state,
                    owner_id: owner[0]
                })
            }
        })
    }
    handleSubmit = () => {
        console.log(this.state)
        const data = {
            "name": this.state.name,
            "color": this.state.color,
            "breed": this.state.breed,
            "owner_id": this.state.owner_id
        }
        Axios.post('http://127.0.0.1:5000/pets', data)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                <p>Add Pet</p>
                <input placeholder='Pet Name' onChange={(e) => this.handleChange(e, 'name')} />
                <input placeholder='Pet Color' onChange={(e) => this.handleChange(e, 'color')} />
                <input placeholder='Pet Breed' onChange={(e) => this.handleChange(e, 'breed')} />
                {this.state.owners ?
                    <select onChange={this.getOwnerId}>
                        <option value="1" >Owner Name</option>
                        {this.state.owners.map(owner => {
                            return <option key={owner[0]} value={owner[1]}>{owner[1]}</option>
                        })}
                    </select>
                    : ''}
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default AddPetForm;
