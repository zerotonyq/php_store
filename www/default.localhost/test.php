<?php

    $date = date('m/d/Y h:i:s a', time());
    // decode data sent
$json = json_decode($_POST['a']);

// encode data to send back
echo json_encode($json);
    if(!isset($_POST['a']))
    {
        echo "NO";
    }
    else
    {
        echo "YES";
    }
    
?>