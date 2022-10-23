import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ChildQueryBuilderModal, CloseModal } from '../styled-components/QueryBuilderModal';

export default function ChildModal({ buttonText, btncolor, children }: { buttonText: string, btncolor: string, children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <Button sx={{ backgroundColor: btncolor, color: 'white' }} onClick={() => setOpen(true)}>{buttonText}</Button>
        <ChildQueryBuilderModal
            hideBackdrop
            open={open}
            onClose={() => setOpen(false)}
        >
            <React.Fragment>
                <Grid container>
                    {children}
                </Grid>
                <CloseModal sx={{ cursor: 'pointer' }} titleAccess='Close Query Builder' onClick={() => setOpen(false)} />
            </React.Fragment>
        </ChildQueryBuilderModal>
      </React.Fragment>
    );
  }