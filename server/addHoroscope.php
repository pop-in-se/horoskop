<?php

session_start();

require 'horoscopeArray.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $myHoroscope = getHoroscope($_POST["savedDate"]);
    
    if (isset($_SESSION["horoscope"])) {
        echo json_encode(false);
    } else {
        if (($myHoroscope != "Skriv in ett giltigt datum") && ($myHoroscope != "Inget horoskop hittades"))
        {
            $_SESSION["horoscope"] = $myHoroscope;
            echo json_encode(true);
        }
    }
} 

?>