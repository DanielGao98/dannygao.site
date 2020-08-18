#!/usr/bin/python

import cgi
import sys

a = sys.stdin.read()
message = a.split('&')

print("Cache-Control: no-cache")
print("Content-type:text/html\r\n")
print("<html><head><title>POST Request Echo</title></head>")
print("<body>")
print("<h1>POST Request Echo</h1><hr>")
print("<b><p>Query String:</b> " + str(a) + "</p>")

for pair in message:
    x = pair.split('=')
    print("<p><b>" + str(x[0]) + ":</b> " + str(x[1]) + "</p>")

print("</body>")
print("</html>")
