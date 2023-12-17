<?php

try{
    $db = new PDO("mysql:host=localhost; dbname=mydatabase; charset=utf8mb4", 'root', '');
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>