<?php

require_once 'vendor/autoload.php';
require_once "config/db.php";
require_once "lib/pdo.php";
require_once "models/Customer.php";
require_once "models/Transaction.php";

Dotenv\Dotenv::createUnsafeImmutable(__DIR__)->safeLoad();

define("STRIPE_SECRET_KEY", getenv('STRIPE_SECRET_KEY'));

$stripe = new \Stripe\StripeClient(STRIPE_SECRET_KEY);

// sanitize incoming data
$first_name = filter_var($_POST['first_name'], FILTER_SANITIZE_SPECIAL_CHARS);
$last_name  = filter_var($_POST['last_name'], FILTER_SANITIZE_SPECIAL_CHARS);
$email      = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$token      = filter_var($_POST['stripeToken'], FILTER_SANITIZE_SPECIAL_CHARS);

// create customer in stripe
$customer = $stripe->customers->create([
    "email" => $email,
    "source" => $token,
]);

// charge customer
$charge = $stripe->charges->create([
    "amount" => 5000,
    "currency" => "usd",
    "description" => "Intro to React Course",
    "customer" => $customer->id
]);

$customer_data = [
    "id" => $charge->customer,
    "first_name" => $first_name,
    "last_name" => $last_name,
    "email" => $email,
];
$customer      = new Customer();
$customer->add_customer($customer_data);


$transaction_data = [
    "id" => $charge->id,
    "customer_id" => $charge->customer,
    "product" => $charge->description,
    "amount" => $charge->amount,
    "currency" => $charge->currency,
    "status" => $charge->status,
];
$transaction      = new Transaction();
$transaction->add_transaction($transaction_data);


header("Location: success.php?tid=" . $charge["id"] . "&product=" . $charge["description"]);