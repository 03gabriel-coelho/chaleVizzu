import React, { useState } from 'react';
import { ImageList, ImageListItem, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import NavBar from '../components/NavBar';
import allPics from '../images/allPics';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
};

function PagePics() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('vazio');
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavBar />
      <ImageList variant="masonry" cols={3} gap={8}>
        {allPics.map((item, index) => (
          <ImageListItem
            key={item}
            onClick={() => {
              setOpen(true);
              setSrc(item);
            }}
          >
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={`Pic${index}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {src !== 'vazio' ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style }}>
            <img src={src} alt="imageModal" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Box>
        </Modal>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default PagePics;
