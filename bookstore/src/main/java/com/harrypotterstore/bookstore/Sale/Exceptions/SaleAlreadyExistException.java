package com.harrypotterstore.bookstore.Sale.Exceptions;

public class SaleAlreadyExistException extends RuntimeException {

    public SaleAlreadyExistException(String message) {
        super(message);
    }
}
