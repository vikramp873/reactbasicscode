import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


import { Typography } from "@mui/material";

function SecondForm({ formData, setFormData }) {
  console.log(formData)




  return (
    <>
      {/* <h1>SecondForm </h1> */}

      {/* <Typography id="modal-modal-title" variant="h6" component="h2">
        Please fill the form
      </Typography> */}
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <div>
          <label>Source</label>
        </div>

        {/* <h4>Country </h4> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Country"
            onChange={(e) => { setFormData({ ...formData, source: e.target.value }) }}
          >
            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
            <MenuItem value={'Jaipur'}>Jaipur</MenuItem>
            <MenuItem value={'Agra'}>Agra</MenuItem>
            <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
            <MenuItem value={'Chennai'}>Chennai</MenuItem>
            <MenuItem value={'Pune'}>Pune</MenuItem>


          </Select>
        </FormControl>
        {/* <h4>State </h4> */}

        <br />

        <br />



        <div>
          <label>Destination</label>
        </div>

        {/* <h4>Country </h4> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select City"
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          >
            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
            <MenuItem value={'Jaipur'}>Jaipur</MenuItem>
            <MenuItem value={'Agra'}>Agra</MenuItem>
            <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
            <MenuItem value={'Chennai'}>Chennai</MenuItem>
            <MenuItem value={'Pune'}>Pune</MenuItem>


          </Select>
        </FormControl>
        {/* <h4>State </h4> */}

        <br />

        <br />


        <div>
          <label>Date of journey</label>
        </div>
        <input
          type="date"
          onChange={(e) => {
            setFormData({ ...formData, journeyDate: e.target.value });
          }}
        />
        <br />
        <br />
        <div>
          <label>Notes</label>
        </div>
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => {
            setFormData({ ...formData, notes: e.target.value });
          }}

          style={{ width: '100%' }}
        />

        {/* {setFormData({ ...formData, notes: showPrice() })} */}
      </Typography>
      {/* <Button variant="contained">Contained</Button> */}
    </>
  );
}

export default SecondForm;
