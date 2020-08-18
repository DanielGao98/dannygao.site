#!/usr/bin/python

import cgi
import json
from datetime import date
import os


today = date.today()
stoday = today.strftime("%Y-%m-%d")
addr = str(os.environ['REMOTE_ADDR'])

message = {'Mesage':'Hello World from Python!', 'date':'Todays date is ' + stoday, 'ipAddress':addr} 

print("Cache-Control: no-cache")
print("Content-type:text/html\r\n")

x = json.dumps(message)
print(str(x))

print("</body>")
print("</html>")
