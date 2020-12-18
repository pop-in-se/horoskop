<?php



// for using $_SESSION in this file
session_start();

$monthInput = $_POST["monthInput"];
$dayInput = $_POST["dayInput"];

   // check if a request has been made
   if(isset($_SERVER["REQUEST_METHOD"])) {


      } if($_SERVER["REQUEST_METHOD"] === "GET") {

         //kolla om månad och dag finns i $_SESSION
         if(isset($_SESSION["monthInput"], $_SESSION["dayInput"])) {

            
            //skicka sparad månad till klient
            echo json_encode(unserialize($_SESSION["monthInput"]));

 
            exit;

         } else {

            // feedback till klient, inget namn finns
            echo json_encode("No date is saved..");
            exit;
         }
    }



?>