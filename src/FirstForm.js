import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Formtwo from "./SecondForm";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function firstForm() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [formone, setFormOne] = useState(false);

  function submitFormone() {
    if (firstName === "" || lastName === "" || dob === "" || gender === "") {
      alert("please fill all detail");
    } else {
      console.log("form 1", firstName, lastName, dob, gender);
      setFormOne(true);
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please fill the form
          </Typography>

          {/* <Formtwo /> */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <label>First Name</label>
            </div>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <br />
            <br />
            <div>
              <label>Last Name</label>
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
              <label>Date of birth</label>
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
              <label>Select Gender</label>
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
          <Button variant="contained" onClick={submitFormone}>
            Contained
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default firstForm;
