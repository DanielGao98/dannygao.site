#!/usr/bin/python

import cgi
import sys
import os

message = str(sys.stdin.read())

print("Cache-Control: no-cache")
print("Content-type:text/html\r\n")
print("<html><head><title>General Request Echo</title></head>")
print("<body>")
print("<h1>General Request Echo</h1><hr>")

SP = str(os.getenv('SERVER_PROTOCOL')) 
RM = str(os.getenv('REQUEST_METHOD'))
QS = str(os.getenv('QUERY_STRING'))


print("<p><b>HTTP Protocol: </b>" + SP  + "</p>")
print("<p><b>HTTP Method: </b>" + RM + "</p>")
print("<p><b>Query String: </b>" + QS + "</p>");
print("<p><b>Message Body: </b>" + message + "</p>");

print("</body>")
print("</html>")
