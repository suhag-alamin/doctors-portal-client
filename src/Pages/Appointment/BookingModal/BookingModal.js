import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

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
};

const BookingModal = ({ bookingOpen, handleBookingClose, booking, date }) => {
  const { name, time } = booking;
  const { user } = useAuth();

  const initialInfo = {
    patientName: user?.displayName,
    email: user?.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleBookingInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      serviceName: name,
      time,
      date: date.toLocaleDateString(),
    };
    console.log(appointment);
    // send to server

    handleBookingClose();

    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={bookingOpen}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={bookingOpen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              sx={{ my: 2, width: "100%" }}
              disabled
              id="filled-size-small"
              type="text"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ my: 2, width: "100%" }}
              id="filled-size-small"
              type="text"
              name="patientName"
              defaultValue={user?.displayName}
              onBlur={handleBookingInfo}
              size="small"
            />
            <TextField
              sx={{ my: 2, width: "100%" }}
              type="email"
              id="filled-size-small"
              name="email"
              defaultValue={user?.email}
              onBlur={handleBookingInfo}
              size="small"
            />
            <TextField
              required
              sx={{ my: 2, width: "100%" }}
              id="filled-size-small"
              type="number"
              defaultValue=""
              name="phone"
              placeholder="Phone Number"
              onBlur={handleBookingInfo}
              size="small"
            />
            <TextField
              disabled
              sx={{ my: 2, width: "100%" }}
              id="filled-size-small"
              type="text"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Box sx={{ textAlign: "right" }}>
              <Button type="submit" variant="contained">
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
