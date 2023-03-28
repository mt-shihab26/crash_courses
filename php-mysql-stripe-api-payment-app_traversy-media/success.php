<?php
if (!empty($_GET["tid"]) && !empty($_GET["product"])) {
    $tid     = filter_var($_GET["tid"], FILTER_SANITIZE_SPECIAL_CHARS);
    $product = filter_var($_GET["product"], FILTER_SANITIZE_SPECIAL_CHARS);
} else {
    header("Location: index.php");
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>Thank you</title>
</head>

<body>
    <div class="container mt-4">
        <h2>Thank you for purchasing
            <?= $product ?>
        </h2>
        <hr>
        <p>Your transaction ID is
            <?= $tid ?>
        </p>
        <p>Check your email for more info</p>
        <p><a href="index.php" class="btn btn-light mt-2">Go Back</a></p>
    </div>
</body>

</html>