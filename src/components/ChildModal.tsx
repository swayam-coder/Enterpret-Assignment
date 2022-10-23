import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ChildQueryBuilderModal, CloseModal } from '../styled-components/QueryBuilderModal';

export default function ChildModal({ buttonText, btncolor, children }: { buttonText: string, btncolor: string, children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button sx={{ backgroundColor: btncolor, color: 'white' }} onClick={handleOpen}>{buttonText}</Button>
        <ChildQueryBuilderModal
            hideBackdrop
            open={open}
            onClose={handleClose}
        >
            <React.Fragment>
                <Grid container>
                    {children}
                </Grid>
                <CloseModal sx={{ cursor: 'pointer' }} titleAccess='Close Query Builder' onClick={handleClose} />
            </React.Fragment>
        </ChildQueryBuilderModal>
      </React.Fragment>
    );
  }