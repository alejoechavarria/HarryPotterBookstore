package com.harrypotterstore.bookstore.Book.controllers;

import com.harrypotterstore.bookstore.Book.models.Book;
import com.harrypotterstore.bookstore.Book.services.BookService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("books")
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @GetMapping("/")
    public Iterable<Book> findAllBooks() {
        return service.findAllBooks();
    }
}
