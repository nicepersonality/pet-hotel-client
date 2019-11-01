import React, { Component } from 'react';
import { TableCell } from '@material-ui/core';

class TableItem extends Component{
    render(){
        return(
            <>
                <TableCell>{this.props.item[2]}</TableCell>
                <TableCell>{this.props.item[1]}</TableCell>
                <TableCell>{this.props.item[3]}</TableCell>
                <TableCell>{this.props.item[4]}</TableCell>
                <TableCell>{this.props.item[5] === null ? 'No' : <>{this.props.item[5]}</>}</TableCell>
                <TableCell>Delete / Check In</TableCell>
            </>
        )
    }
}

export default TableItem;