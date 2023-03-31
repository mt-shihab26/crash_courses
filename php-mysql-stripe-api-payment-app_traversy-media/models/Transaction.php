<?php

class Transaction
{
    private Database $db;
    function __construct()
    {
        $this->db = new Database();
    }
    function add_transaction($data)
    {
        $this->db->query(
            "INSERT INTO transactions (id, customer_id, product, amount, currency, status) " .
            "VALUES (:id, :customer_id, :product, :amount, :currency, :status)"
        );

        $this->db->bind(":id", $data["id"]);
        $this->db->bind(":customer_id", $data["customer_id"]);
        $this->db->bind(":product", $data["product"]);
        $this->db->bind(":amount", $data["amount"]);
        $this->db->bind(":currency", $data["currency"]);
        $this->db->bind(":status", $data["status"]);

        $this->db->execute();
    }
    function get_transactions()
    {
        $this->db->query("SELECT * FROM transactions ORDER BY created_at DESC");
        $results = $this->db->resultset();
        return $results;
    }
}