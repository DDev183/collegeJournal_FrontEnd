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
import Grid from '@material-ui/core/Grid';






class CreateLesson extends React.Component {

    state = {
        open: false,
        load: false,
        groupSelect: false,
        subject: '',
        group: '',


    }

    groups = [];
    subjects = [];
    students = [];
    absents = [];

    res = new Map();


    useStyles = makeStyles((theme) => ({
        table: {
          minWidth: 1200,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
          selectEmpty: {
            marginTop: theme.spacing(2),
          },

      }));

    handleClickOpen = () => {

        this.setState({open: true});




        var token = "Bearer_" + localStorage.getItem('token');

        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'no-cors',
                'Authorization': token

            }

        }


        if (this.groups.length == 0){
            Axios.get('http://localhost:8080/api/teacher/getAvailableGroups', axiosConfig)
            .then(response => {

                if (response.status != 200){
                    console.log("ERRORRRRRR!!");


                } else {
                    console.log(response.data);
                    response.data.map(group => {
                        this.groups.push(group);
                    })
                    console.log(this.groups);
                    this.setState({open: true});

                    // this.setState({load: true});
                    // this.setState({Userlist: response.data});
                    // console.log(this.state.Userlist[0].id);
                    // this.state.Userlist.map((user) => console.log(user.id));
                    // console.log(JSON.parse(this.state.Userlist));
                    // console.log(JSON.parse(response.data))

                }

            })
        }
    }

    handleClose = () => {

        console.log("Weared")

        this.groups = [];
        this.subjects = [];
        this.students = [];
        this.absents = [];

        this.res = new Map();

        this.setState({
            load: false,
            groupSelect: false,
            subject: '',
            group: '',
        });

        this.setState({open: false});



      };


      getStudents = () => {
        var token = "Bearer_" + localStorage.getItem('token');

        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'no-cors',
                'Authorization': token
            }
        }

        var data = {
            group: this.state.group,
            subject: this.state.subject,
        }



            Axios.post('http://localhost:8080/api/teacher/getStudentsFromGroup', JSON.stringify(data), axiosConfig)
            .then(response => {
                console.log(response.status);

                if (response.status != 200){
                    console.log("ERRORRRRRR!!");


                } else {
                    console.log(response.data);
                    response.data.map(student => {
                        this.students.push(student);
                        this.res.set(student, " ");
                    })









                }

            })


            Axios.get('http://localhost:8080/api/teacher/getAllAbsent', axiosConfig)
            .then(response => {
                console.log(response.status);

                if (response.status != 200){
                    console.log("ERRORRRRRR!!");


                } else {
                    console.log(response.data);
                    response.data.map(absent => {
                        this.absents.push(absent);
                    })
                    console.log(this.absents);

                    this.setState({load: true});


                    // this.setState({load: true});
                    // this.setState({Userlist: response.data});
                    // console.log(this.state.Userlist[0].id);
                    // this.state.Userlist.map((user) => console.log(user.id));
                    // console.log(JSON.parse(this.state.Userlist));
                    // console.log(JSON.parse(response.data))

                }

            })
      }


      getLessons = (value) => {
        var token = "Bearer_" + localStorage.getItem('token');

        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'no-cors',
                'Authorization': token
            }
        }

        var data = {
            group: value,
        }



            Axios.post('http://localhost:8080/api/teacher/getAvailableSubjects', JSON.stringify(data), axiosConfig)
            .then(response => {
                console.log(response.status);

                if (response.status != 200){
                    console.log("ERRORRRRRR!!");


                } else {
                    console.log(response.data);
                    response.data.map(subject => {
                        this.subjects.push(subject);
                    })
                    console.log(this.subjects);

                    this.setState({groupSelect: true});


                    // this.setState({load: true});
                    // this.setState({Userlist: response.data});
                    // console.log(this.state.Userlist[0].id);
                    // this.state.Userlist.map((user) => console.log(user.id));
                    // console.log(JSON.parse(this.state.Userlist));
                    // console.log(JSON.parse(response.data))

                }

            })
      }


      onChange = (e, name) => {

        const value = e.target.value;
        this.setState({[name]: value});

        if (name == "group"){
            this.getLessons(value);
        }

    }

    onChangeTwo = (e, name) => {

        const value = e.target.value;
        console.log(this.res.delete(name));
        this.res.set(name, value);

        console.log(name);
        console.log(value);


    }


    convertMapsToObjects = (mapInstance) => {
        const obj = {};
        for(let prop of this.res){
          obj[prop[0]] = prop[1];
        }
       return obj;
      }


    createLesson = () => {
        console.log("Creating lesson....");
        console.log(this.res.size);



        var token = "Bearer_" + localStorage.getItem('token');

        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'no-cors',
                'Authorization': token
            }
        }


        var data = {
            students: this.convertMapsToObjects(this.res),
            group: this.state.group,
            subject: this.state.subject,
        }

        console.log(data.students);

        console.log(data);



            Axios.post('http://localhost:8080/api/teacher/createLesson', JSON.stringify(data), axiosConfig)
            .then(response => {
                console.log(response.status);

                if (response.status != 200){
                    console.log("ERRORRRRRR!!");


                } else {
                    console.log(response.status);



                }

            })

                    this.groups = [];
                    this.subjects = [];
                    this.students = [];
                    this.absents = [];

                    this.res = new Map();

                    this.setState({
                        load: false,
                        groupSelect: false,
                        subject: '',
                        group: '',
                    });

                    this.setState({open: false});








    }






    render(){
        if (this.state.load == false){
            if (this.state.groupSelect == false){
                return(
                    <div>
                    <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
                            Создать урок
                    </LinkMaterial>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth="md">
                        <DialogTitle id="form-dialog-title">Создать урок</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Создание урока с указанием студентов. Сначала происходит выбор группы, а далее предмета
                        </DialogContentText>

                        <Grid container direction="row" justify="center" alignItems="center">

                        <Grid item sm={6}>
                            <FormControl className={this.useStyles.formControl}>
                                <InputLabel id="demo-simple-select-label">Группа</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.group}
                                onChange={(e) => this.onChange(e, "group")}
                            >
                                {this.groups.map(group => (
                                    <MenuItem value={group}>{group}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        </Grid>




                        </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                );
            }
            if (this.state.groupSelect == true){
                return(
                    <div>
                    <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
                            Создать урок
                    </LinkMaterial>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth="md">
                        <DialogTitle id="form-dialog-title">Создать урок</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Создание урока с указанием студентов. Сначала происходит выбор группы, а далее предмета
                        </DialogContentText>

                        <Grid container direction="row" justify="center" alignItems="center">

                        <Grid item sm={6}>
                            <FormControl className={this.useStyles.formControl}>
                                <InputLabel id="demo-simple-select-label">Группа</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.group}
                                onChange={(e) => this.onChange(e, "group")}
                            >
                                {this.groups.map(group => (
                                    <MenuItem value={group}>{group}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        </Grid>

                        <Grid item sm={6}>
                            <FormControl className={this.useStyles.formControl}>
                                <InputLabel id="demo-simple-select-label2">Предмет</InputLabel>
                                <Select
                                labelId="demo-simple-select-label2"
                                id="demo-simple-select2"
                                value={this.state.subject}
                                onChange={(e) => this.onChange(e, "subject")}
                            >
                                {this.subjects.map(subject => (
                                    <MenuItem value={subject}>{subject}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        </Grid>




                        </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.getStudents} color="primary">
                            Найти
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                );
            }

        }
        if (this.state.load == true){
            return(
                <div>

<LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
                            Создать урок
                    </LinkMaterial>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth="md">
                        <DialogTitle id="form-dialog-title">Создать урок</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Перед вами представлен список студентов
                        </DialogContentText>

                        <Grid container direction="row" justify="center" alignItems="center">


                        <TableContainer component={Paper}>
          <Table className={this.useStyles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" size="small">#</TableCell>
                <TableCell align="center">Фамилия Имя</TableCell>
                <TableCell align="center">Наличие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {console.log("TEST:" + this.students)}
              {this.students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" align="left" size="small">
                    {index+1}
                  </TableCell>
                  <TableCell component="th" scope="row" >{student}</TableCell>
                  <TableCell component="th" scope="row" align="right">
                        <FormControl className={this.useStyles.formControl}>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={this.res.get(student)}
                            onChange={(e) => this.onChangeTwo(e, student)}
                        >
                            {this.absents.map(absent => (
                                <MenuItem value={absent}>{absent}</MenuItem>
                            ))}


                        </Select>
      </FormControl>



                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


                        </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.createLesson} color="primary">
                            Создать
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }
    }

}

export default CreateLesson;
