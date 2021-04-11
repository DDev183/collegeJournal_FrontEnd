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
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';









class CreateSubject extends React.Component {


    state = {
        open: false,
        subject: '',
    }



  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

  };

  handleCloseAndSend = () => {


    var token = "Bearer_" + localStorage.getItem('token');


    var data = {
        subject: this.state.subject
    }

    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }



    Axios.post('http://localhost:8080/api/admin/createSubject', JSON.stringify(data), axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");
        console.log(response.status);

        this.setState({open: true});


        } else {

        this.setState({open: false});
        this.setState({subject: ''});
        console.log(response.status);


        }

    })

  }



    render(){


        return(
            <div>
                <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
                        Создание предмета
                </LinkMaterial>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Создание предмета</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Это форма преднозначена для предмета. Введите полное название предмета. Например, математический аппарат для построение компьютерных сетей
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Subject"
                        label="Subject"
                        type="email"
                        value={this.state.subject}
                        onChange={(e) => this.setState({subject: e.target.value})}
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={this.handleCloseAndSend} color="primary">
                        Создать
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

    }
}


export default CreateSubject;
