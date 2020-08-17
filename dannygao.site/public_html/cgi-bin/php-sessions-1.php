<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

$name = $_POST['username'];
setcookie('username', $name, time() + 60*60*24*3);


echo "<!DOCTYPE html>";
echo "<html><head><title>CGI Form</title></head><body>";
echo "<h1 align ='center'>PHP Sessions Page 1</h1><hr><br>";

if (!empty($name)) {
	echo "<p><b>Name:</b> " . $name . "</p>";
}	
else {
	echo "<p></b>Name:</b> You do not have a name set</p>";
}
echo "<br/><br/>";
echo "<a href=\"/cgi-bin/php-cgiform.php\">CGI Form</a><br />";
echo "<a href=\"/cgi-bin/php-sessions-2.php\">Session Page 2</a><br/>";
echo "<form style=\"margin-top:30px\" action=\"/cgi-bin/php-destroy-session.php\" method=\"get\">";
echo "<button type=\"submit\">Destroy Session</button>";
echo "</form>";

echo "</body>";
echo "</html>";
?>



