<?php
#header("Content-type: text/html; charset=utf-8");
    $name = $_GET['moviename'];
    exec("/usr/bin/python Request.py {$name} 2>&1",$arr,$ret);
    foreach ($arr as $item) {
        echo $item."<br>";
    }
    ?>
