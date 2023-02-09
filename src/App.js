import React, { useState } from "react";

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

import "./styles.css";

import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

const bookings = [
  {
    id: "10f1345c-5666-4113-a7d4-b81bb6522a3b",
    user: {
      firstName: "Ram",
      lastName: "Sharma",
      dob: "1990-05-01",
      gender: "MALE"
    },
    journey: {
      from: {
        country: "India",
        state: "Rajasthan",
        city: "Jaipur"
      },
      to: {
        country: "India",
        state: "Rajasthan",
        city: "Jodhpur"
      },
      dateOfJourney: "2021-12-01",
      price: 100,
      discountPer: 0,
      notes: "I am a vegan"
    }
  }
];

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Card variant="elevation" elevation={4} sx={{ padding: "5px 25px" }}>
        <Typography variant="h5" sx={{ textAlign: "start" }}>
          Bookings
        </Typography>
        <button onClick={handleOpen}>Click </button>
      </Card>
      <TableContainer
        elevation={4}
        component={Paper}
        sx={{ marginTop: "25px" }}
      >
        <Table aria-label="bookings table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow
                key={booking.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{booking.user.firstName}</TableCell>
                <TableCell>{booking.user.dob}</TableCell>
                <TableCell>{booking.user.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please fill the form
          </Typography>

          {/* <Formtwo /> */}
        </Box>
      </Modal>
    </div>
  );
}
