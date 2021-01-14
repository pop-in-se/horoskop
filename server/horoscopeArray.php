<?php
function getHoroscope($date) {
    $monthDay = substr($date, -5);
    if ($date === "") {
        return "Skriv in ett giltigt datum.";
    } elseif ("12-22" <= $monthDay || $monthDay <= "01-19") {
        return "Ditt stjärntecken är Stenbocken";
    } elseif ("01-20" <= $monthDay && $monthDay <= "02-18") {
        return "Ditt stjärntecken är Vattumannen";
    } elseif ("02-19" <= $monthDay && $monthDay <= "03-20") {
        return "Ditt stjärntecken är Fiskarna";
    } elseif ("03-21" <= $monthDay && $monthDay <= "04-19") {
        return "Ditt stjärntecken är Väduren";
    } elseif ("04-20" <= $monthDay && $monthDay <= "05-20") {
        return "Ditt stjärntecken är Oxen";
    } elseif ("05-21" <= $monthDay && $monthDay <= "06-20") {
        return "Ditt stjärntecken är Tvillingarna";
    } elseif ("06-21" <= $monthDay && $monthDay <= "07-22") {
        return "Ditt stjärntecken är Kräftan";
    } elseif ("07-23" <= $monthDay && $monthDay <= "08-22") {
        return "Ditt stjärntecken är Lejonet";
    } elseif ("08-23" <= $monthDay && $monthDay <= "09-22") {
        return "Ditt stjärntecken är Jungfrun";
    } elseif ("09-23" <= $monthDay && $monthDay <= "10-22") {
        return "Ditt stjärntecken är Vågen";
    } elseif ("10-23" <= $monthDay && $monthDay <= "11-21") {
        return "Ditt stjärntecken är Skorpionen";
    } elseif ("11-22" <= $monthDay && $monthDay <= "12-21") {
        return "Ditt stjärntecken är Skytten";
    } else {
        return "Inget horoskop hittades";
    }
}
?>