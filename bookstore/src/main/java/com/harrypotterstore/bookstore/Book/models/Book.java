package com.harrypotterstore.bookstore.Book.models;

import javax.persistence.*;
import java.text.DecimalFormat;

@Entity
@Table(name = "BOOKS")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    @Column(name = "TITLE", length = 100)
    private String title;
    @Column(name = "PRICE")
    private double price;
    @Column(name = "STOCK")
    private int stock;
    @Column(name = "URL_IMAGE", length = 200)
    private String urlImage;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPrice() {
        DecimalFormat df = new DecimalFormat("###.000");
        String price = df.format(this.price);
        return price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getUrlImage() {
        return urlImage;
    }
}
