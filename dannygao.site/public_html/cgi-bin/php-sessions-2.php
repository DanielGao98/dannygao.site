<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

$name = $_COOKIE['username'];

echo "<!DOCTYPE html>";
echo "<html><head><title>CGI Form</title></head><body>";
echo "<h1 align ='center'>Perl Sessions Page 2</h1><hr><br>";

if (!empty($name)) {
	        echo "<p><b>Name:</b> " . $_COOKIE['username'] . "</p";
}
else {
	        echo "<p></b>Name:</b> You do not have a name set</p>";
}
echo "<br/><br/>";
echo "<a href=\"/cgi-bin/php-sessions-2.php\">Session Page 2</a><br/>";
echo "<a href=\"/cgi-bin/php-cgiform.php\">Perl CGI Form</a><br />";
echo "<form style=\"margin-top:30px\" action=\"/cgi-bin/php-destroy-session.php\" method=\"get\">";
echo "<button type=\"submit\">Destroy Session</button>";
echo "</form>";

echo "</body>";
echo "</html>";
?>
