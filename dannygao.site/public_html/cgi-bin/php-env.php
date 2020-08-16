<?php
header('Cache-Control: no-cache');
header('Content-type: text/html');

$allVars = getenv();
foreach ($allVars as &$var) {
	echo "
