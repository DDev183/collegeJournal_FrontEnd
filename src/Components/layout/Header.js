import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';



export default function Header() {
    return (
            // <header style={headerStyle}>
            //     <h1>TodoList</h1>
            //     <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            // </header>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Электронный журнал ККЭП</a>
            {/* <Typography class="navbar-brand" >Электронный журнал ККЭП</Typography> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link" to="/">Главная</Link>
                    <Link class="nav-item nav-link" to="/registration">Регистрация</Link>
                    <Link class="nav-item nav-link" to="/login">Авторизация</Link>
                    <Link class="nav-item nav-link" to="/about">Об авторе</Link>
                    <Link class="nav-item nav-link disabled" to="/">Расписание</Link>
                    
                </div>
            </div>
            </nav>
    )
}

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
