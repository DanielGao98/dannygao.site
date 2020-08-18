#!/usr/bin/python

import cgi
import os

print("Cache-Control: no-cache")
print("Content-type:text/html\r\n")
print("<html><head><title>Environment Variables</title></head>")
print("<body>")
print("<h1>Environment Variables</h1><hr>")

for var in os.environ.keys():
    k = str(var)
    v = str(os.environ[var])
    print("<p><b>" + k + "</b>: " + v + "</p>")
print("</body>")
print("</html>")
