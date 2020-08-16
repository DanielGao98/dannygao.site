<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

echo "<!DOCTYPE html>";
echo "<html><head><title>GET Request Echo</title></head><body>";
echo "<h1 align ='center'>GET Request Echo</h1><hr><br>";

$qString = $_SERVER['QUERY_STRING'];
echo "<b>Query String:</b> " . $qString . "<br>";
parse_str($_SERVER['QUERY_STRING'], $qA);
#print_r($qArray, true); 
#echo "<p> " . print_r($qA,true) . "</p>";

echo "<br>";
foreach ($qA as $key => $value) {
	echo "<b>" . $key . "</b>: " . $value ;
	        echo"<br>";
}



echo "</body></html>";
?>
