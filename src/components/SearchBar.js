import React,{ useState } from 'react';
import {Paper,TextField} from '@material-ui/core';

function SearchBar({onFormSubmit}) {
    const [searchTerm, setTerm] = useState('')

    const handleChange= (e) => {
        //console.log(e.target.value);
        setTerm({searchTerm: e.target.value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log({searchTerm});
        //const {onFormSubmit} = this.props;
        onFormSubmit({searchTerm});
    }
    return(
        <Paper elevation={6} style={{ padding:'25px'}}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label = "Search..." onChange={handleChange}></TextField>
            </form>
        </Paper>
    )

}

export default SearchBar;