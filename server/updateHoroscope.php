<?php

session_start();

require 'horoscopeArray.php';

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $_PUT);

    $myHoroscope = getHoroscope($_PUT["savedDate"]);

    if (isset($_SESSION["horoscope"])) {
        if (($myHoroscope != "no date specified") && ($myHoroscope != "No horoscope found"))
        {
            $_SESSION["horoscope"] = $myHoroscope;
            echo json_encode(true);
        }
    } else {
        echo json_encode(false);
    }
}

?>