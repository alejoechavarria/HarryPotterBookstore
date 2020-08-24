package com.harrypotterstore.bookstore.Sale.models;

import java.util.List;

public class SaleRequest {
    private String invoiceNumber;
    private String description;
    private double totalPaid;
    private String username;
    private List<Integer> bookIds;
    private List<Integer> booksInStock;

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public String getDescription() {
        return description;
    }

    public double getTotalPaid() {
        return totalPaid;
    }

    public String getUsername() {
        return username;
    }

    public List<Integer> getBookIds() {
        return bookIds;
    }

    public List<Integer> getBooksInStock() {
        return booksInStock;
    }
}
