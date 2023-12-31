<?php
require_once "config/db.php";
require_once "lib/pdo.php";
require_once "models/Transaction.php";

$transaction  = new Transaction();
$transactions = $transaction->get_transactions();
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
    <title>View Customers</title>
</head>

<body>
    <div class="container mt-4">
        <div class="btn-group" role="group">
            <a href="customers.php" class="btn btn-secondary">Customers</a>
            <a href="transactions.php" class="btn btn-primary">Transaction</a>
        </div>
        <hr />
        <h2>Customers</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Customer ID</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($transactions as $t): ?>
                    <tr>
                        <td>
                            <?= $t->id ?>
                        </td>
                        <td>
                            <?= $t->customer_id ?>
                        </td>
                        <td>
                            <?= $t->product ?>
                        </td>
                        <td>
                            <?= sprintf("%.2f", $t->amount / 100) ?>
                            <?= strtoupper($t->currency) ?>
                        </td>
                        <td>
                            <?= $t->status ?>
                        </td>
                        <td>
                            <?= $t->created_at ?>
                        </td>
                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
        <br />
        <p><a href="index.php">Pay Page</a></p>
    </div>

</body>

</html>