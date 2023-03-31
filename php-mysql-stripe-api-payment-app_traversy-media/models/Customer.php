<?php

class Customer
{
    private Database $db;
    function __construct()
    {
        $this->db = new Database();
    }
    function add_customer($data)
    {
        $this->db->query(
            "INSERT INTO customers (id, first_name, last_name, email) " .
            "VALUES (:id, :first_name, :last_name, :email)"
        );

        $this->db->bind(":id", $data["id"]);
        $this->db->bind(":first_name", $data["first_name"]);
        $this->db->bind(":last_name", $data["last_name"]);
        $this->db->bind(":email", $data["email"]);

        $this->db->execute();
    }
    function get_customers()
    {
        $this->db->query("SELECT * FROM customers ORDER BY created_at DESC");
        $results = $this->db->resultset();
        return $results;
    }
}