<?php

session_start();

session_destroy();

header("Location: /13-sessions.php");
