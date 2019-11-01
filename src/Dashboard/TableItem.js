import React, { Component } from 'react';
import { TableCell, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class TableItem extends Component{



    render(){
        return(
            <>
                <TableCell>{this.props.item[2]}</TableCell>
                <TableCell>{this.props.item[1]}</TableCell>
                <TableCell>{this.props.item[3]}</TableCell>
                <TableCell>{this.props.item[4]}</TableCell>
                <TableCell>
                    {this.props.item[5] === null ?
                        <Button variant="outlined" onClick={() => { this.props.handleCheckin(this.props.item[0])}}>
                            Check In
                        </Button> : 
                        <>
                            {this.props.item[5]}
                        </>
                    }
                </TableCell>
                <TableCell>
                    <IconButton onClick={() => { this.props.handleDelete(this.props.item[0]) }}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </>
        )
    }
}

export default TableItem;