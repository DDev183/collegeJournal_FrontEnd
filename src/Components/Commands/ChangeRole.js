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







  

class ChangeRole extends React.Component {



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
      

    state = {
        open: false,
        myValue: '',
        finalLastname: '',
        finalFirstname: '',
        myLastname: '',
        myFirstname: '',
        Userlist: [],
        load: false,
        role: '',
        userId: 0


    }


    handleSearch = () =>{
        console.log(this.state.finalFirstname);





        var token = "Bearer_" + localStorage.getItem('token');


    var data = {
        Firstname: this.state.finalFirstname,
        Lastname: this.state.finalLastname
    }

    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }



    Axios.post('http://localhost:8080/api/admin/getUserByLastnameAndFirstname', JSON.stringify(data), axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");


        } else {
            console.log(response.data);
            response.data.map(user => {
                this.state.Userlist.push(user);
            })
            console.log(this.state.Userlist);
            this.setState({load: true});



            
            // this.setState({Userlist: response.data});
            // console.log(this.state.Userlist[0].id);
            // this.state.Userlist.map((user) => console.log(user.id));
            // console.log(JSON.parse(this.state.Userlist));
            // console.log(JSON.parse(response.data))

        }

    })


    if (this.roles.length == 0){

    Axios.get('http://localhost:8080/api/admin/getAllRoles', axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");


        } else {
            console.log(response.data);
            response.data.map(role => {
                this.roles.push(role);
            })
            console.log(this.roles);
            this.setState({load: true});
            // this.setState({Userlist: response.data});
            // console.log(this.state.Userlist[0].id);
            // this.state.Userlist.map((user) => console.log(user.id));
            // console.log(JSON.parse(this.state.Userlist));
            // console.log(JSON.parse(response.data))

        }

    })

    }
    }

    

    roles = [];


  handleClickOpen = () => {
    // getAllLastname();
    // getAllFirstname();
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
        load: false,
        role: '',
        userId: 0
    });
  };

  handleCloseAndSend = () => {

    console.log(this.state.userId);
    console.log(this.state.role);


    var token = "Bearer_" + localStorage.getItem('token');


    var data = {
        userId: this.state.userId,
        role: this.state.role
    }

    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization': token

        }

    }

    Axios.post('http://localhost:8080/api/admin/changeRole', JSON.stringify(data), axiosConfig)
    .then(response => {

        if (response.status != 200){
            console.log("ERRORRRRRR!!");
            console.log(response.status);



        } else {
            console.log(response.status);
            this.handleClose();

            // this.setState({Userlist: response.data});
            // console.log(this.state.Userlist[0].id);
            // this.state.Userlist.map((user) => console.log(user.id));
            // console.log(JSON.parse(this.state.Userlist));
            // console.log(JSON.parse(response.data))

        }

    })

  };

  onChange = (e, user) => {
                                this.setState({role: e.target.value});
                                this.setState({userId: user.id});
                                
                                console.log(this.state.role);
                                console.log(this.state.userId);
  }



  
render(){
  if (this.state.load === true ){
    return (
        <div>
          <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
            Смена привелегий
          </LinkMaterial>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Изменение роли пользователя</DialogTitle>
            <DialogContent>
              <DialogContentText>
                
              </DialogContentText>
    
    <TableContainer component={Paper}>
          <Table className={this.useStyles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">id</TableCell>
                <TableCell align="center">Фамилия</TableCell>
                <TableCell align="center">Имя</TableCell>
                <TableCell align="center">Отчество</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Актуальная роль</TableCell>
                <TableCell align="center">Новая роль</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.Userlist.map(user => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="right">{user.lastname}</TableCell>
                  <TableCell align="right">{user.firstname}</TableCell>
                  <TableCell align="right">{user.middlename}</TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                  <TableCell align="right">
                        <FormControl className={this.useStyles.formControl}>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select2"
                            value={this.state.role}
                            onChange={(e) => this.onChange(e, user)}
                        >
                            {this.roles.map(role => (
                                <MenuItem value={role}>{role}</MenuItem>
                            ))}
                            
          
        //   {/* <MenuItem value={20}>Twenty</MenuItem>
        //   <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    
    
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

  } else {
    return (
        <div>
          <LinkMaterial component="button" variant="h5" color="textPrimary" onClick={this.handleClickOpen}>
                Смена привелегий
          </LinkMaterial>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Изменение роли пользователя</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Позволяет дать требуемую роль пользователю где user = студент, teacher = преподаватель, admin = администратор
              </DialogContentText>
    
            {/* <DialogContent>
            <Autocomplete
                id="combo-box-demo"
                options={myLastname}
                getOptionLabel={(option) => option}
                value={finalLastname}
                style={{ width: 250 }}
                onChange={(e) => setFinalLastname(e.target.value)}
                renderInput={(params) => <TextField {...params} label="Фамилия" variant="outlined" />}
            />
            </DialogContent>
    
    
            <DialogContent>       
            <Autocomplete
                id="combo-box-demo2"
                options={myFirstname}
                getOptionLabel={(option) => option}
                value={finalFirstname}
                onChange={(e) => setFinalFirstname(e.target.value)}
                style={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Имя" variant="outlined" />}
            />
            </DialogContent> */}
    
    
    
            <TextField
                autoFocus
                margin="dense"
                id="Lastname"
                label="Lastname"
                type="email"
                value={this.state.finalLastname}
                onChange={(e) => this.setState({finalLastname: e.target.value})}
                fullWidth
            />
    
    
    
    
            <TextField
                autoFocus
                margin="dense"
                id="Firstname"
                label="Firstname"
                type="email"
                value={this.state.finalFirstname}
                onChange={(e) => this.setState({finalFirstname: e.target.value})}
                fullWidth
            />
    
    
    
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Отмена
              </Button>
              <Button onClick={this.handleSearch} color="primary">
                Поиск
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  }

  
}
}



export default ChangeRole;
