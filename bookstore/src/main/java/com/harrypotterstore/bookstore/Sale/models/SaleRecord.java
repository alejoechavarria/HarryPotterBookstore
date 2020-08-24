package com.harrypotterstore.bookstore.Sale.models;

import com.harrypotterstore.bookstore.User.models.User;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "SALES")
public class SaleRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    @Column(name = "INVOICE_NUMBER")
    private String invoiceNumber;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "TOTAL_PAID")
    private double totalPaid;
    @Column(name = "DATE")
    private LocalDate date;
    @Column(name = "CLIENT_ID")
    private long clientId;
    @Column(name = "CLIENT_FULL_NAME")
    private String clientFullName;

    public SaleRecord() {}

    public SaleRecord(String invoiceNumber, String description, double totalPaid, LocalDate date, long clientId, String clientFullName) {
        this.invoiceNumber = invoiceNumber;
        this.description = description;
        this.totalPaid = totalPaid;
        this.date = date;
        this.clientId = clientId;
        this.clientFullName = clientFullName;
    }

    public Long getId() {
        return id;
    }

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public String getDescription() {
        return description;
    }

    public double getTotalPaid() {
        return totalPaid;
    }

    public LocalDate getDate() {
        return date;
    }

    public long getClientId() {
        return clientId;
    }

    public String getClientFullName() {
        return clientFullName;
    }
}
