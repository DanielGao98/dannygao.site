<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');
Echo "<html><br>";
Echo "<head><br>";
Echo"<title>PHP Hello World</title><br>";
Echo "</head><br>";
Echo "<body><br>";
Echo "<h1>PHP Hello World</h1><br>";
Echo "<p>Hello World from PHP!<p><br>";
Echo "<p>Today's date is " . date("Y-m-d") . "</p><br>";
Echo "<p>Your IP address is: " . $_SERVER['REMOTE_ADDR'] . "</p><br>";
Echo "</body>";
Echo "</html>";
?>
