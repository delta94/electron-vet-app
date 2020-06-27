import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import patientFormStyle from "./AddPatienFormStyle";

export default function AddPatientForm() {

  const classes =  patientFormStyle();
  return(
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nama Pemilik" variant="outlined" margin="dense" />
        <TextField id="outlined-basic" label="Alamat" variant="outlined" margin="dense" />
        <TextField id="outlined-basic" label="No Telepon" variant="outlined" margin="dense" />
      </form>
      <div className={classes.button}>
        <Button
          variant="contained"
          color="default"
          size="small"
          startIcon={<SaveIcon color="primary"/>}
        >
          Simpan
        </Button>
        <Button
          variant="contained"
          color="default"
          size="small"
          startIcon={<CancelIcon color="error" />}
          className={classes.buttonItem}
        >
          Batal
        </Button>
      </div>
    </div>
  )
}