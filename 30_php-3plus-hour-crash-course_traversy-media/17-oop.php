<?php

class User
{
    public $name;
    public $email;
    public $password;

    public function __construct($name, $email, $password)
    {
        // echo "Constructor ran<br/>";
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
    }

    public function set_name($name)
    {
        $this->name = $name;
    }
    public function get_name()
    {
        return $this->name;
    }
}

$user1 = new User("Shihab 0", "shihab@gmail.com", "1234");
$user2 = new User("Mahamud 0", "mahamud@gmail.com", "5678");

// $user1->name = "Shihab";

$user1->set_name("Shihab");
$user2->set_name("Mahamud");

var_dump($user1, "\n");
var_dump($user2, "\n");

echo $user1->get_name(), " ";
echo $user2->get_name();

// Inheritance
class Employee extends User
{
    function __construct($name, $email, $password, $title)
    {
        parent::__construct($name, $email, $password);
        $this->title = $title;
    }

    function get_title()
    {
        return $this->title;
    }
}

$employee1 = new Employee("Sara", "sara@gmail.com", "43434", "Manager");

var_dump($employee1);
