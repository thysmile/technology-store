import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    
        table: {
          minWidth: 700,
        },
}))
  
export default function TableSpec({productSpecs}) {
    console.log(productSpecs)
    const classes = useStyles
    const specs = productSpecs?.spec
    console.log(specs)
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Warranty</TableCell>
              <TableCell align="right">24months</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow >
                <TableCell component="th" scope="row">
                    CPU
                </TableCell>
                <TableCell align="right">{specs.CPU}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component="th" scope="row">
                    GRAPHIC
                </TableCell>
                <TableCell align="right">{specs.GRAPHIC}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component="th" scope="row">
                    KEYBOARD
                </TableCell>
                <TableCell align="right">{specs.KEYBOARD}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component="th" scope="row">
                    WEBCAM
                </TableCell>
                <TableCell align="right">{specs.WEBCAM}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component="th" scope="row">
                  DISPLAY
                </TableCell>
                <TableCell align="right">{specs.DISPLAY}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component="th" scope="row">
                  STORAGE CAPABILITY
                </TableCell>
                <TableCell align="right">{specs["STORAGE CAPABILITY"]}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component="th" scope="row">
                 WEIGHT
                </TableCell>
                <TableCell align="right">{specs["WEIGHT(w/BATTERY)"]}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
}
