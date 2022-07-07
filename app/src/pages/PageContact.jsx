import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';

const style = {
  fontSize: '130%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function PageContact() {
  return (
    <>
      <NavBar />
      <Box sx={{ ...style }}>
        <p>Endereço:</p>
        <p>Whatsapp:</p>
        <p>Email:</p>
        <p>Telefone:</p>
      </Box>
    </>
  );
}

export default PageContact;
