import React from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';






const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 3px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });




class Profile extends React.Component {    
    render() {

        

    return (
        <Grid container style={bodyStyle} spacing={0}>
        <Grid container md={12} style={{marginTop: 24}}>
          <Grid container justify="center" spacing={7}>
              <Grid item>
                    <Card className={useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Имя пользователя
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.user.username}
                        </Typography>
                    </CardContent>
                    </Card>
              </Grid>

              <Grid item>
                    <Card className={useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Фамилия Имя Отчество
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.user.lastname} {this.props.user.firstname} {this.props.user.middlename} 
                        </Typography>
                    </CardContent>
                    </Card>
              </Grid>
          </Grid>

          <Grid container justify="center" style={{marginTop: 18}} spacing={7}>
              <Grid item>
                    <Card className={useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Группа
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.user.group}
                        </Typography>
                    </CardContent>
                    </Card>
              </Grid>

              <Grid item>
                    <Card className={useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Роль
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.user.role}
                        </Typography>
                    </CardContent>
                    </Card>
              </Grid>

              <Grid item>
                    <Card className={useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Блокировка?
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.user.banstate}
                        </Typography>
                    </CardContent>
                    </Card>
              </Grid>
          </Grid>


          <Grid container justify="center" style={{marginTop: 18}} spacing={7}>
              <Grid item>
                    <Card className={useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Электронная почта
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.user.email}
                        </Typography>
                    </CardContent>
                    </Card>
              </Grid>

              <Grid item>
                    <Card className={useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Номер телефона
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.props.user.telnumber}
                        </Typography>
                    </CardContent>
                    </Card>
              </Grid>
          </Grid>

          
        </Grid>
        </Grid>

    )
    }
    
}


export default Profile;

const linkStyle = {
    color: '#ff0000',
    textDecoration: 'none'
}

const headerStyle = {

    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',

}


const formStyle = {
    align: 'center'
}

const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}
