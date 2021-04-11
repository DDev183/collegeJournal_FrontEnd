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
import LinkMaterial from '@material-ui/core/Link';
import CreateGroup from '../Commands/CreateGroup';
import LinkGroupWithStudent from '../Commands/LinkGroupWithStudent';
import CreateSubject from '../Commands/CreateSubject';
import ChangeRole from '../Commands/ChangeRole';
import LinkTSG from '../Commands/LinkTSG';
import CreateLesson from '../Commands/CreateLesson';
import ShowTeacherJournal from '../Commands/ShowTeacherJournal';
import ChangeProfile from '../Commands/ChangeProfile';
import EnglishDependent from '../Commands/EnglishDependent';
import MarkHistory from '../Student/MarkHistory';
import AllMarks from '../Student/AllMarks';







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




class Panel extends React.Component {
    render() {

        if(this.props.role === "Студент"){


            return (
                <Grid container style={bodyStyle} spacing={0}>
                <Grid container md={12} style={{marginTop: 24}}>
                  <Grid container justify="center" spacing={7}>
                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Журнал
                                </Typography>

                                <Typography>
                                <AllMarks />
                                </Typography>

                                <Typography>
                                <MarkHistory />
                                </Typography>
                            </CardContent>
                            </Card>
                      </Grid>

                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Профиль
                                </Typography>

                                <Typography>
                                <ChangeProfile />
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    Список предметов
                                </LinkMaterial>
                                </Typography>

                            </CardContent>
                            </Card>
                      </Grid>
                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Статистика
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    #Future
                                </LinkMaterial>
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    #Future
                                </LinkMaterial>
                                </Typography>

                            </CardContent>
                            </Card>
                      </Grid>
                  </Grid>


                </Grid>
                </Grid>

            );

        } else if (this.props.role === "Преподаватель") {
            return (
                <div>
<Grid container style={bodyStyle} spacing={0}>
                <Grid container md={12} style={{marginTop: 24}}>
                  <Grid container justify="center" spacing={7}>
                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Занятия
                                </Typography>

                                <Typography>
                                <CreateLesson />
                                </Typography>

                                <Typography>
                                <ShowTeacherJournal />
                                </Typography>
                            </CardContent>
                            </Card>
                      </Grid>

                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Профиль
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    Изменение
                                </LinkMaterial>
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    Просмотр нагрузки
                                </LinkMaterial>
                                </Typography>

                            </CardContent>
                            </Card>
                      </Grid>
                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Статистика
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    #Future
                                </LinkMaterial>
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    #Future
                                </LinkMaterial>
                                </Typography>

                            </CardContent>
                            </Card>
                      </Grid>
                  </Grid>


                </Grid>
                </Grid>


                </div>
            );
        } else if (this.props.role === "Администратор") {
            return (
                <div>

<Grid container style={bodyStyle} spacing={0}>
                <Grid container md={12} style={{marginTop: 24}}>
                  <Grid container justify="center" spacing={7}>
                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Группы
                                </Typography>


                                <Typography>
                                <CreateGroup />
                                </Typography>

                                <Typography>
                                <LinkGroupWithStudent />
                                </Typography>
                            </CardContent>
                            </Card>
                      </Grid>

                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Предметы
                                </Typography>

                                <Typography>
                                <CreateSubject />
                                </Typography>

                                <Typography>
                                <EnglishDependent />
                                </Typography>


                                <Typography>
                                <LinkTSG />
                                </Typography>

                            </CardContent>
                            </Card>
                      </Grid>
                      <Grid item>
                            <Card className={useStyles.root}>
                            <CardContent>
                                <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                                Пользователи
                                </Typography>

                                <Typography>
                                <LinkMaterial
                                    component="button"
                                    variant="h5"
                                    color="textPrimary"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    >
                                    Изменение профилей
                                </LinkMaterial>
                                </Typography>

                                <Typography>
                                <ChangeRole />
                                </Typography>

                            </CardContent>
                            </Card>
                      </Grid>
                  </Grid>


                </Grid>
                </Grid>

                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }



    }

}


export default Panel;

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
