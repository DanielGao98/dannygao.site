<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

echo "<!doctype html>";
echo "<html>";

echo "<head><title>CGI Form</title></head>";

echo "<body><h1 align='center'>Session Test</h1><hr>";
echo "<label for='cgi-lang'>CGI using PHP</label>";
echo "<form action='./php-sessions-1.php' method='Post' id='form'>";
echo "<label>What is your name? <input type='text' name='username' autocomplete='off'></label>";
echo "<br>";
echo "<input type='submit' value='Test Sessioning'>";
echo "</form>";
  
echo "<a href='/' style='display:inline-block;margin-top:20px;'>Home</a>";

echo "</body>";
echo "</html>";
?>
