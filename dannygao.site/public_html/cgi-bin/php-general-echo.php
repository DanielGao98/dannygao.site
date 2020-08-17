<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

echo "<!DOCTYPE html>";
echo "<html><head><title>General Request Echo</title></head><body>";
echo "<h1 align ='center'>General Request Echo</h1><hr><br>";
echo "<p><b>HTTP Protocol: </b>" . $_SERVER['SERVER_PROTOCOL'] . "</p>";
echo "<p><b>HTTP Method: </b>" . $_SERVER['REQUEST_METHOD'] . "</p>";
echo "<p><b>Query String: </b>" . $_SERVER['QUERY_STRING'] . "</p>";

$data = file_get_contents('php://input');
echo "<p><b>Message Body: </b>" . $data . "<p>";

echo "</body></html>";
?>
