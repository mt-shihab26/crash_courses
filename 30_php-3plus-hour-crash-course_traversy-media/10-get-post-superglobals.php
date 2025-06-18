<?php
echo $_SERVER["PHP_SELF"], "<br/>";

if (isset($_POST["submit"])) {
    echo $_POST["name"], " ";
    echo $_POST["age"], "\n";
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

