import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableData({ formData }) {


   function showDataInTable() {
      return (
         <>
            <h3 style={{ textAlign: 'center' }}>Your Ticket Details</h3>
            <TableContainer component={Paper}>

               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Source</TableCell>
                        <TableCell align="right">Destination</TableCell>
                        <TableCell align="right">Date of Journey</TableCell>
                        <TableCell align="right">Price</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>

                     <TableRow
                        //   key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        {/* <TableCell component="th" scope="row">
                     {row.name}
                  </TableCell> */}
                        <TableCell align="right">{formData.date}</TableCell>
                        <TableCell align="right">{formData.gender}</TableCell>
                        <TableCell align="right">{formData.source}</TableCell>
                        <TableCell align="right">{formData.destination}</TableCell>
                        <TableCell align="right">{formData.journeyDate}</TableCell>
                        <TableCell align="right">{showPrice()}</TableCell>
                     </TableRow>

                  </TableBody>
               </Table>

            </TableContainer>
         </>
      )
   }

   const showPrice = () => {
      if (formData.date > 50) {
         return (
            <p> Price: 600$ </p>
         )
      }
      else if (formData.gender === 'female') {
         return (
            <p>Price: 800$  </p>
         )
      }

      else if (formData.gender === 'male') {
         return (
            <p>Price: 1000$</p>
         )
      }
   }
   return (
      <div>{formData.secondClick ? <p>{showDataInTable()}</p> : null}</div>
   )
}
