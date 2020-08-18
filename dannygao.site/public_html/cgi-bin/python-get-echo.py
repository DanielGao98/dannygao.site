#!/usr/bin/python

import cgi
import os

message = os.getenv('QUERY_STRING').split('&')

print("Cache-Control: no-cache")
print("Content-type:text/html\r\n")
print("<html><head><title>GET Request Echo</title></head>")
print("<body>")
print("<h1>GET Request Echo</h1><hr>")
print("<b><p>Query String:</b> " + str(os.getenv('QUERY_STRING')) + "</p>")

for pair in message:
    x = pair.split('=')
    print("<p><b>" + str(x[0]) + ":</b> " + str(x[1]) + "</p>")

print("</body>")
print("</html>")

