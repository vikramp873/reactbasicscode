import React, { useState } from "react";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import './App.css'
import Modal from "@mui/material/Modal";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

import {
  Card,
  Typography
} from "@mui/material";
import Table from "./Table";
import BookFeatures from "./BookFeatures";

const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: '70vh',
  overflow: 'scroll'
};


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
  // const handleClose = () => setOpen(false);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    date: "",
    gender: "",
    source: '',
    destination: '',
    journeyDate: '',
    notes: '',
    secondClick: ''
  });

  const [formDataTwo, setFromDataTwo] = useState({


  })

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FirstForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondForm formData={formData} setFormData={setFormData} />;

      default:
        return <FirstForm />;
    }
  };

  function handleSubmit() {
    if (page === 0) {

      if (formData.firstname === "" || formData.lastname === "" || formData.date === "" || formData.gender === "") {
        alert('please fill all details');

      }

      else {
        console.log(formData)
        setPage(page + 1);
      }

    }

    else {
      return
    }
  }

  function handleSubmitTwo() {

    // const handleClose = () => setOpen(false);
    console.log(formData)
    if (page === 1) {
      // alert('page two')
      if (formData.source === "" || formData.destination === "" || formData.journeyDate === "") {
        alert('please fill all details');
      }
      else {
        alert('Your Ticket Successfully Booked')
        setOpen(false)
        setFormData({ ...formData, secondClick: true })
      }


    }
  }

  return (
    <div className="App">
      <div className="hero-container">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-around"
        >
          {/* <Card variant="elevation" elevation={4} sx={{ padding: "5px 25px" }}> */}
          <div>  <Typography variant="h5" sx={{ textAlign: "start", color: '#fff', fontWeight: 600, margin: '15px 0' }}>
            RailYatri - Book Railway Ticket
          </Typography></div>
          <div>       <Button variant="contained" onClick={handleOpen} sx={{ textAlign: "start", color: '#fff', fontWeight: 600, margin: '15px 0' }}>Book Tickets </Button></div>
          {/* </Card> */}

        </Stack>

        <h1 style={{ textAlign: 'center', marginTop: '20vh', color: '#fff' }} > TRAIN TICKET BOOKING</h1>









        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">

              {conditionalComponent()}


              {console.log('page', page)}
              {page === 0 ? <Button variant="contained" onClick={handleSubmit} style={{ margin: '15px 0' }} > Next </Button> : <Button variant="contained" onClick={handleSubmitTwo} > Submit  </Button>}

              {/* {
              page === 1 ? <button onClick={() => setPage(page - 1)}>Back</button> : null
            } */}
              <Button variant="contained" style={{ margin: '15px' }} onClick={() => { setOpen(false) }}>Cancel</Button>


            </Typography>
          </Box>
        </Modal>
      </div>

      <Table formData={formData} />

      <BookFeatures />
    </div>
  );
}
