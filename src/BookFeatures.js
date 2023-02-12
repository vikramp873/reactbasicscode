import React from 'react'; import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TrainIcon from '@mui/icons-material/Train';

const Item = styled(Paper)(({ theme }) => ({
   // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(3),
   textAlign: 'left',
   color: theme.palette.text.secondary,
}));

function BookFeatures() {
   return (
      <>
         <Container maxWidth="lg">

            <h2>IRCTC Authorised Partner</h2>
            <Box sx={{ width: '85%', margin: '0 auto' }}>
               <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }} justifyContent="space-around">

                  <Grid item xs={12} sm={12} md={6}>
                     <Item> <b>
                        Get Train Tickets
                     </b>
                        <br />
                        <div>
                           With our same train alternates and prediction feature, increase your chances of getting confirm train tickets. </div></Item>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                     <Item> <b> Secure IRCTC train ticket booking </b>
                        <div>
                           Free Cancellation on Train Tickets

                           Get a full refund on train tickets by opting our free cancellation feature.</div></Item>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                     <Item><b>
                        UPI Enable Secured Payment
                     </b>

                        <div>

                           Payment on Confirmtkt is highly secured. Easy UPI and other multiple payment modes available.</div></Item>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                     <Item><b>
                        Free Cancellation on Train Tickets
                     </b>


                        <div>
                           Get a full refund on train tickets by opting our free cancellation feature.</div></Item>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                     <Item><b>

                        Instant Refund & Cancellation
                     </b>



                        <div>
                           Get an instant refund and book your next Train ticket easily..</div></Item>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                     <Item><b> Live Train Status Tracking</b>

                        <div>

                           Now you can check Train status & notification of your Train tickets.</div> </Item>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </>
   )
}

export default BookFeatures