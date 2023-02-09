import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Typography } from "@mui/material";

function secondForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  console.log(getCountry, "data");

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
          <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Country"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <h4>State </h4> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select State"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <h4>City</h4> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select City"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <div>
          <label>Destination</label>
        </div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <br />
        <div>
          <label>Date of journey</label>
        </div>
        <input
          type="date"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <br />
        <br />
        <div>
          <label>Notes</label>
        </div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>
      </Typography>
      <Button variant="contained">Contained</Button>
    </>
  );
}

export default secondForm;
