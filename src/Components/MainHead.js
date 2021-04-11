import React from 'react'






export default function MainHead(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <a class="navbar-brand" href="#" color="GREEN">Электронный журнал ККЭП</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="#">Главная<span class="sr-only">/</span></a>
                <a class="nav-item nav-link" href="/registration">Регистрация</a>
                <a class="nav-item nav-link active" href="/login">Авторизация</a>
                <a class="nav-item nav-link" href="/aboutCreator">Об авторе</a>
                <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Расписание</a>
            </div>
      </div>
    </nav>

    )
}

