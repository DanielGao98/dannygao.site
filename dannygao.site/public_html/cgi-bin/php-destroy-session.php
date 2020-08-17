<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

setcookie('username', '', time()-3600);

echo "<!DOCTYPE html>";
echo "<html><head><title>PHP Cookie Destroyed</title></head><body>";
echo "<h1 align ='center'>Cookie Destroyed</h1><hr><br>";

echo "<br/><br/>";
echo "<a href=\"/cgi-bin/php-cgiform.php\">Back to PHP CGI Form</a><br />";
echo "<a href=\"/cgi-bin/php-sessions-1.php\">Back to Page 1</a><br/>";
echo "<a href=\"/cgi-bin/php-sessions-2.php\">Back to Page 2</a><br/>";

echo "</body>";
echo "</html>";
?>
