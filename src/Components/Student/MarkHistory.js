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
import Box from '@material-ui/core/Box';

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
import { Container } from '@material-ui/core';







  

class MarkHistory extends React.Component {



    useStyles = makeStyles((theme) => ({
        table: {
          minWidth: 650,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
          selectEmpty: {
            marginTop: theme.spacing(5),
          },
      }));
      

    state = {
        open: false,
        myValue: '',
        finalLastname: '',
        finalFirstname: '',
        myLastname: '',
        myFirstname: '',
        Userlist: [],
        role: '',
        userId: 0,
        object: []


    }

    


    handleSearch = () =>{




    }

    

    roles = [];


  handleClickOpen = () => {
    // getAllLastname();
    // getAllFirstname();







    var token = "Bearer_" + localStorage.getItem('token');



    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }






    Axios.get('http://localhost:8080/api/student/getMarkHistory', axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");


        } else {
            console.log(response.data);

            this.setState({object: response.data});
            this.setState({object: this.state.object.reverse()});

            this.setState({load: true});
            // this.setState({Userlist: response.data});
            // console.log(this.state.Userlist[0].id);
            // this.state.Userlist.map((user) => console.log(user.id));
            // console.log(JSON.parse(this.state.Userlist));
            // console.log(JSON.parse(response.data))

        }

    })


    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

    this.setState({
        open: false,
        myValue: '',
        finalLastname: '',
        finalFirstname: '',
        myLastname: '',
        myFirstname: '',
        Userlist: [],
        role: '',
        userId: 0
    });
  };

  handleCloseAndSend = () => {

            this.handleClose();


  };




  
render(){

    return (
        <Container>
          <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
            История оценок
          </LinkMaterial>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Показан список новых оценок</DialogTitle>
            <DialogContent fullWidth="true">
              <DialogContentText>
                Данная вкладка преднозначена для отображение истории последних оценок/НБ. Тут можно увидеть последние 15 действий
              </DialogContentText>
    
    <TableContainer component={Paper}>
          <Table className={this.useStyles.table} aria-label="simple table" style={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Оценка НБ</TableCell>
                <TableCell align="center">Преподаватель</TableCell>
                <TableCell align="center">Предмет</TableCell>
                <TableCell align="center">Время</TableCell>
                <TableCell align="center">Дата</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.object.map(object => (
                <TableRow key={object.id}>
                  <TableCell align="left">{object.value} {object.absent}</TableCell>
                  <TableCell align="left">{object.teacher}</TableCell>
                  <TableCell align="left">{object.subject}</TableCell>
                  <TableCell align="left">{object.time}</TableCell>
                  <TableCell align="left">{object.date}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Закрыть
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      );


  
}
}

const tableStyle = {
    fontStyle: 'italic',
    fontSize: '1.8rem',
    padding: '30px',
    textAlign: 'center',
    margin: '0 2px',




}

export default MarkHistory;
