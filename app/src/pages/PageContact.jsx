import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';

const style = {
  fontSize: '130%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 1,
  borderRadius: 16,
  borderColor: 'error.main',
  padding: 10,
};

function PageContact() {
  return (
    <>
      <NavBar />
      <Box sx={{ ...style }}>
        <p>Endereço: exemplo exemplo exemplo</p>
        <p>Whatsapp: (31) 99145454562</p>
        <p>Email: teste@teste.com.br</p>
        <p>Telefone: (31) 3356481564</p>
      </Box>
    </>
  );
}

export default PageContact;
