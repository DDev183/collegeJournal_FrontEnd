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

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';







  

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
          container: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
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
        object: [],
        subjects: [],
        dates: [],
        marks: [[]],
        absents: [[]],
        startDate: null,
        endDate: null,
        subIndex: 0,
        dateChange: false,
        check: false,


    }

    


    handleSearch = () =>{




    }

    
    subIndex;
    roles = [];


  handleClickOpen = () => {
    // getAllLastname();
    // getAllFirstname();



    if (this.state.dateChange == false) {
        



    var token = "Bearer_" + localStorage.getItem('token');



    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }


    Axios.get('http://localhost:8080/api/student/getAllMarks?startDate=' + 'null' + "&endDate=" + 'null', axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");


        } else {
            console.log(response.data);

            this.setState({subjects: response.data.subjects});
            this.setState({dates: response.data.dates});
            this.setState({marks: response.data.marks});
            this.setState({absents: response.data.absents});
            this.setState({startDate: new Date(response.data.startDate)});
            this.setState({endDate: new Date(response.data.endDate)});

            console.log(this.state.startDate)

            

            this.setState({load: true});
            // this.setState({Userlist: response.data});
            // console.log(this.state.Userlist[0].id);
            // this.state.Userlist.map((user) => console.log(user.id));
            // console.log(JSON.parse(this.state.Userlist));
            // console.log(JSON.parse(response.data))

        }

    })


    this.setState({open: true});



} else {


    var token = "Bearer_" + localStorage.getItem('token');



    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }

    const dtfUK = new Intl.DateTimeFormat('UK', { day: '2-digit', month: '2-digit', year: 'numeric'}); 

    const thisStartDate = new Date(this.state.startDate);
    const thisEndDate = new Date(this.state.endDate);
    console.log(thisStartDate);
    console.log(thisEndDate);

    // const startDay = thisStartDate.getDay();
    // const startMonth = thisStartDate.getMonth() + 1;
    // const startYear = thisStartDate.getYear();



    Axios.get('http://localhost:8080/api/student/getAllMarks?startDate=' + dtfUK.format(thisStartDate) + "&endDate=" + dtfUK.format(thisEndDate), axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");


        } else {



            this.setState({subjects: response.data.subjects});
            this.setState({dates: response.data.dates});
            this.setState({marks: response.data.marks});
            this.setState({absents: response.data.absents});
            this.setState({startDate: new Date(response.data.startDate)});
            this.setState({endDate: new Date(response.data.endDate)});

            console.log(this.state.startDate)

            

            this.setState({check: !this.state.check});
            // this.setState({Userlist: response.data});
            // console.log(this.state.Userlist[0].id);
            // this.state.Userlist.map((user) => console.log(user.id));
            // console.log(JSON.parse(this.state.Userlist));
            // console.log(JSON.parse(response.data))

        }

    })
}
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

  handleDateChange1 = (date) => {
    this.setState({startDate: date});
    this.setState({
        subjects: [],
        dates: [],
        marks: [[]],
        absents: [[]],
    });
    this.setState({dateChange: true});



  };
  handleDateChange2 = (date) => {
    this.setState({endDate: date});
    this.setState({
        subjects: [],
        dates: [],
        marks: [[]],
        absents: [[]],
    });
    this.setState({dateChange: true});



    // this.setState({dateChange: !this.state.dateChange});
  };



  
render(){

    return (
        <Container>
          <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
            Все оценки
          </LinkMaterial>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Список всех оценок</DialogTitle>
            <DialogContent fullWidth="true">
              <DialogContentText>
                Тут есть все оценки)
              </DialogContentText>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd.MM.yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Начальная дата"
          value={this.state.startDate}
          onChange={this.handleDateChange1}
          onClose={this.handleClickOpen}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd.MM.yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Конечная дата"
          value={this.state.endDate}
          onChange={this.handleDateChange2}
          onClose={this.handleClickOpen}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

      </Grid>
    </MuiPickersUtilsProvider>
    
              <TableContainer component={Paper}>
                        <Table className={this.useStyles.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Предмет</TableCell>
                                {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell> */}

                                {this.state.dates.map((date) => (

                                <TableCell align="left">
                            
                                    {date}


                                </TableCell>

                                ))}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.subjects.map((subject, index) => (
                                this.subIndex = index,
                                <TableRow key={index}>
                                <TableCell component="th" scope="row">{subject}</TableCell>
                                

                                {

                                    
                                this.state.marks.map((actualMark, index) => (

                                    console.log(index),


                                <TableCell align="center">{actualMark[this.subIndex]} </TableCell>
                                    
                                ))}


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
