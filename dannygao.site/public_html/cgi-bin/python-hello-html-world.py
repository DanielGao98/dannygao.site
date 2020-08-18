#!/usr/bin/python

import cgi
from datetime import date
import os

print("Cache-Control: no-cache")
print("Content-type:text/html\r\n")
print("<html><head><title>Hello HTML World</title></head>")
print("<body>")
print("<h1>Python Hello World</h1><hr>")
print("<p>Hello World from Python!</p>")

today = date.today()
stoday = today.strftime("%Y-%m-%d")

print("<p>Today's date is: " + stoday + "</p>")
print("<p>Your IP address is: " + str(os.environ['REMOTE_ADDR']) + "</p>")  

print("</body>")
print("</html>")
