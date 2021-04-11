import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinkMaterial from '@material-ui/core/Link';
import Axios from 'axios';
import Alert from '@material-ui/lab/Alert';




export default function CreateGroup() {




  const [open, setOpen] = React.useState(false);

  const [myValue, setValue] = React.useState('');





  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAndSend = () => {

    console.log(myValue);



    var token = "Bearer_" + localStorage.getItem('token');


    var data = {
        Group: myValue
    }

    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }



    Axios.post('http://localhost:8080/api/admin/createGroup', JSON.stringify(data), axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");
        setOpen(true);

        } else {

        setOpen(false);

        }

    })

  };

  return (
    <div>
      <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={handleClickOpen}>
            Создание группы
      </LinkMaterial>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Создание группы</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это форма преднозначена для создания группы. Введите полный номер группы. Например, 607-Д9-3КС
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Group"
            label="Group"
            type="email"
            value={myValue}
			onChange={(e) => setValue(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleCloseAndSend} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}