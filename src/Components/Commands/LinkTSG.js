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



class LinkTSG extends React.Component {

    state = {
        subject: '',
        group: '',
        teacher: '',
        open: false
    }

    subjects = [];
    groups = [];
    teachers = [];


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


        if (this.subjects.length == 0){
            Axios.get('http://localhost:8080/api/admin/getAllSubjects', axiosConfig)
            .then(response => {
        
                if (response.status != 200){
                    console.log("ERRORRRRRR!!");
        
        
                } else {
                    console.log(response.data);
                    response.data.map(subject => {
                        this.subjects.push(subject);
                    })
                    console.log(this.subjects);
                    // this.setState({load: true});
                    // this.setState({Userlist: response.data});
                    // console.log(this.state.Userlist[0].id);
                    // this.state.Userlist.map((user) => console.log(user.id));
                    // console.log(JSON.parse(this.state.Userlist));
                    // console.log(JSON.parse(response.data))
        
                }
        
            })
        }

        if (this.groups.length == 0){
            
            Axios.get('http://localhost:8080/api/admin/getAllGroups', axiosConfig)
            .then(response => {
        
                if (response.status != 200){
                    console.log("ERRORRRRRR!!");
        
        
                } else {
                    console.log(response.data);
                    response.data.map(group => {
                        this.groups.push(group);
                    })
                    console.log(this.groups);
                    // this.setState({load: true});
                    // this.setState({Userlist: response.data});
                    // console.log(this.state.Userlist[0].id);
                    // this.state.Userlist.map((user) => console.log(user.id));
                    // console.log(JSON.parse(this.state.Userlist));
                    // console.log(JSON.parse(response.data))
        
                }
        
            })

        }

        if (this.teachers.length == 0){
            Axios.get('http://localhost:8080/api/admin/getAllTeachers', axiosConfig)
            .then(response => {
        
                if (response.status != 200){
                    console.log("ERRORRRRRR!!");
        
        
                } else {
                    console.log(response.data);
                    response.data.map(teacher => {
                        this.teachers.push(teacher);
                    })
                    console.log(this.teachers);
                    // this.setState({load: true});
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

        console.log(this.state.teacher);
        console.log(this.state.group);
        console.log(this.state.subject);
    
      };



      handleCloseAndSend = () => {


        var token = "Bearer_" + localStorage.getItem('token');
    
    
        var data = {
            subject: this.state.subject,
            group: this.state.group,
            teacher: this.state.teacher
        }
    
        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'no-cors',
                'Authorization': token
    
            }
    
        }
    
    
    
        Axios.post('http://localhost:8080/api/admin/linkTSG', JSON.stringify(data), axiosConfig)
        .then(response => {
    
            if (response.status != 200){
                console.warn("ERRORRRRRR!!");
            console.log(response.status);
    
            this.setState({open: true});
    
    
            } else {
    
            this.setState({open: false});
            console.log(response.status);
    
    
            }
    
        })
    
      }



    render(){
        return(
            <div>
                <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
                        Зависимость ППГ
                </LinkMaterial>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth="md">
                    <DialogTitle id="form-dialog-title">Зависимость Преподаватель-Предмет-Группа</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Это форма преднозначена для установлений связей между преподателем, предметом и группой
                    </DialogContentText>

                    <Grid container direction="row" spacing={8} justify="center" alignItems="center">

                    <Grid item sm={4}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={this.groups}
                            getOptionLabel={(option) => option}
                            onChange={(event, value) => this.setState({group: value})}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Группа" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={this.subjects}
                            getOptionLabel={(option) => option}
                            onChange={(event, value) => this.setState({subject: value})}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Предмет" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={this.teachers}
                            getOptionLabel={(option) => option}
                            onChange={(event, value) => this.setState({teacher: value})}
                            style={{ width: 250 }}
                            renderInput={(params) => <TextField {...params} label="Преподаватель" variant="outlined" />}
                        />
                    </Grid>

                    </Grid>




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


export default LinkTSG;
