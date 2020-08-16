<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

echo "<!DOCTYPE html>";
echo "<html><head><title>Environment Variables</title></head><body>";
echo "<h1 align ='center'>Environment Variables</h1><hr><br>";

echo "<h1>Environment Variables:</h1><br>";

$allVars = getenv();
foreach ($allVars as $var => $value) {
	echo "<b>" . $var . "</b>: " . $value ;
	echo"<br>";
}

echo "<h1>Server Variables:</h1><br>";

foreach ($_SERVER as $svar => $svalue) {
	echo "<b>" . $svar . "</b>: " . $svalue ;
	echo"<br>";
}

echo "</body></html>";
?>
