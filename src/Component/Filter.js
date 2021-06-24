import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useProductsContext } from '../context/productsContext';
import {makeStyles} from '@material-ui/core'
import {Grid} from '@material-ui/core'


const useStyles = makeStyles(()=>({
  form:{
    width:"70%",
  }
}))
export default function Categories() {
  const classes = useStyles();
  const [categories,setCategories] = useState('all');
  const history = useHistory();
  const handleFilter = (query)=>{
     
    history.push(`/product?category=${query}`)
  }
    return (
        <Grid item align="center">
            <FormControl className={classes.form}>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          displayEmpty
          value={categories}
          onChange={(e)=>setCategories(e.target.value)}
        >
          <MenuItem value="all" onClick={()=>handleFilter('all')}>
            All category
          </MenuItem>
          <MenuItem value="laptop" onClick={()=>handleFilter('laptop')}>Laptop</MenuItem>
          <MenuItem value="monitor" onClick={()=>handleFilter('monitor')}>Monitor</MenuItem>
          <MenuItem value="phone" onClick={()=>handleFilter('phone')}>Phone</MenuItem>
        </Select>
      </FormControl>
        </Grid>
    )
}
