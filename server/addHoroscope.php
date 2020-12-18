<?php
   
   // for using $_SESSION in this file
   session_start();

$monthInput = $_POST["monthInput"];
$dayInput = $_POST["dayInput"];

   // check if a request has been made
   if(isset($_SERVER["REQUEST_METHOD"])) {


         
      } if ($_SERVER["REQUEST_METHOD"] == "POST") {

         // kolla om månad och dag finns i body
         if(isset($_POST["monthInput"], $_POST["dayInput"])) {

            // spara postnamn
            $_SESSION["monthInput"] = serialize($_POST["monthInput"]);
            $_SESSION["dayInput"] = serialize($_POST["dayInput"]);
            
            
            echo json_encode(true);
            exit;

         } else {
            // kasta fel
            throw new Exception("No date found", 500);
         }

      } else {
         throw new Exception("Not a valid request method", 405);
    }
   


?>