package com.harrypotterstore.bookstore.Book.services;

import com.harrypotterstore.bookstore.Book.models.Book;
import com.harrypotterstore.bookstore.Book.repositories.BookRepository;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public Iterable<Book> findAllBooks() {
        return repository.findAll();
    }
}
