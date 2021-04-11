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









class ChangeProfile extends React.Component {


    state = {
        open: false,
        username: '',
        email: '',
        telnumber: '',
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
        username: this.state.username,
        email: this.state.email,
        telnumber: this.state.telnumber

    }

    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }



    Axios.post('http://localhost:8080/api/student/changeProfile', JSON.stringify(data), axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");
        console.log(response.status);

        this.setState({open: true});


        } else {

        localStorage.setItem('logging', false);
        this.setState({open: false});
        this.setState({username: ''});
        this.setState({telnumber: ''});
        this.setState({email: ''});
        console.log(response.status);
        console.log(response);
        window.location.reload(false);



        }

    })

  }



    render(){


        return(
            <div>
                <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
                        Изменение профиля
                </LinkMaterial>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Создание предмета</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        В данном пункте меню Вы можете изменить основные данные о Вашего профиля. Для изменения ФИО и других данных, требуется обратиться к администратору.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Имя пользователя"
                        type="email"
                        value={this.state.username}
                        onChange={(e) => this.setState({username: e.target.value})}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Электронная почта"
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="telnumber"
                        label="Номер телефона"
                        type="email"
                        value={this.state.telnumber}
                        onChange={(e) => this.setState({telnumber: e.target.value})}
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={this.handleCloseAndSend} color="primary">
                        Изменить
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

    }
}


export default ChangeProfile;
