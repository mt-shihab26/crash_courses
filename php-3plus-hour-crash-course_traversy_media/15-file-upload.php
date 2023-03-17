<?php
if (isset($_POST["submit"])) {
    $allowed_ext = array("png", "jpg", "jpeg", "gif");

    if (!empty($_FILES["upload"]["name"])) {
        // print_r($_FILES);
        $file_name = $_FILES["upload"]["name"];
        $file_size = $_FILES["upload"]["size"];
        $file_tmp = $_FILES["upload"]["tmp_name"];
        $target_dir = "uploads/${file_name}";

        // Get file ext
        $file_ext = explode(".", $file_name);
        $file_ext = strtolower(end($file_ext));

        // echo $file_ext;

        // Validate file ext
        if (in_array($file_ext, $allowed_ext)) {
            move_uploaded_file($file_tmp, $target_dir);
            $message = '<p style="color: green">File uploaded</p>';
        } else {
            $message = '<p style="color: red">Invalid file type</p>';
        }

    } else {
        $message = '<p style="color: red;">Please choose a file</p>';
    }
}
?>


<?php echo $message ?? null; ?>

<form action="<?=$_SERVER["PHP_SELF"]?>" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="upload" />
    <input type="submit" value="Submit" name="submit" />
</form>

