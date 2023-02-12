import React, { useState, useEffect } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from "@mui/material/TextField";


import {

  Typography
} from "@mui/material";


function FirstForm({ formData, setFormData }) {


  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }


  return (
    <>

      <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
        Train Ticket Booking
      </Typography>



      <Typography id="modal-modal-description" sx={{ mt: 2 }}>

        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(event) => {

            setFormData({ ...formData, firstname: event.target.value });

          }}

          style={{ width: '100%' }}
        />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => {
            setFormData({ ...formData, lastname: e.target.value });
          }}
          style={{ width: '100%' }}

        />
        <br />
        <br />
        <div>
          <label>Date of birth</label>
        </div>
        <input
          type="date"
          onChange={(e) => {
            setFormData({ ...formData, date: getAge(e.target.value) });
          }}
        />
        <br />
        <br />
        <div>
          <span>Select Gender</span>
        </div>
        {/* <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value })
              }}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value })
              }}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value })
              }}
            />
          </RadioGroup>
        </FormControl> */}

        <ToggleButtonGroup
          color="primary"
          value={formData.gender}
          exclusive
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value })
          }}
          aria-label="Platform"
        >
          <ToggleButton value="male">Male</ToggleButton>
          <ToggleButton value="female">Female</ToggleButton>
          <ToggleButton value="other">Other</ToggleButton>
        </ToggleButtonGroup>
      </Typography>

    </>
  );
}

export default FirstForm;
