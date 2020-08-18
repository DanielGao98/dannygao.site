<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

echo "<!DOCTYPE html>";
echo "<html><head><title>POST Request Echo</title></head><body>";
echo "<h1 align ='center'>POST Request Echo</h1><hr><br>";

$data = file_get_contents('php://input');
echo "<p><b>Message Body: </b>" . $data . "<p>";

#echo "<p> " . var_dump($_POST) . "</p>";
foreach ($_POST as $key => $value) {
	echo "<b>" . $key . "</b>= " . $value;
	echo"<br>";
}

echo "</body></html>";
?>
