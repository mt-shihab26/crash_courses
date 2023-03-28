<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script defer src="https://js.stripe.com/v3/"></script>
    <script defer src="./js/charge.js"></script>
    <title>Pay Page</title>
</head>

<body>
    <div class="container">
        <h2 class="my-4 text-center">Intro To React Course [$50]</h2>
        <form action="./charge.php" method="post" id="payment-form">
            <div class="form-row">
                <input type="text" name="first_name" placeholder="First Name"
                    class="form-control mb-3 StripeElement StripeElement--empty">
                <input type="text" name="last_name" placeholder="Last Name"
                    class="form-control mb-3 StripeElement StripeElement--empty">
                <input type="email" name="email" placeholder="Email Address"
                    class="form-control mb-3 StripeElement StripeElement--empty">
                <div id="card-element" class="form-control">
                    <!-- a Stripe Element will be inserted here. -->
                </div>

                <!-- Used to display form errors -->
                <div id="card-errors" role="alert"></div>
            </div>

            <button class="btn btn-primary btn-block mt-4">Submit Payment</button>
        </form>
    </div>

</body>

</html>