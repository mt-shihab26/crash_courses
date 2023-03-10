<?php
if (isset($_POST["submit"])) {
    // $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
    // $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_SPECIAL_CHARS);
    $name = filter_var($_POST["name"], FILTER_SANITIZE_SPECIAL_CHARS);
    $age = filter_var($_POST["age"], FILTER_SANITIZE_SPECIAL_CHARS);

    echo $name, " ", $age, "\n";
}
?>

<form action="<?=$_SERVER["PHP_SELF"]?>" method="POST">
    <div>
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" />
    </div>
    <div>
        <label for="age">Age: </label>
        <input type="text" name="age" id="age" />
    </div>
    <input type="submit" value="Submit" name="submit" />
</form>

