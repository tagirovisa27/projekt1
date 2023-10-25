<?php
if (isset($_POST['name'], $_POST['surname'], $_POST['email'], $_POST['password'])) {
    echo 'Имя ', $_POST['name'], '<br>';
    echo 'Фамилия ', $_POST['surname'], '<br>';
    echo 'email ', $_POST['email'], '<br>';
    echo 'Пороль ', $_POST['password'], '<br>';
}