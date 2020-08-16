<?php
header('Cache-Control: no-cache');
header('Content-type: text/json');

$obj->message = "Hello World from PHP!"; 
$obj->date = date("Y-m-d");
$obj->ipAddress = $_SERVER['REMOTE_ADDR'];

$jsonObj = json_encode($obj);
echo $jsonObj;
?>
