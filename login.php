<?php
include "db.php";
if ($_SERVER["REQUEST_METHOD"]=="POST") {
    $email=$_POST['email'];
    $password=$_POST['password'];
    $sql= "INSERT INTO users (email, password) VALUES(?,?)";
    $stmt=$conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $stmt->close();
        header("Location:survey.html");
};
