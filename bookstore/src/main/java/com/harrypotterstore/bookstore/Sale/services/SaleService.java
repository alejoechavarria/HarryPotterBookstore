package com.harrypotterstore.bookstore.Sale.services;

import com.harrypotterstore.bookstore.Book.models.Book;
import com.harrypotterstore.bookstore.Book.repositories.BookRepository;
import com.harrypotterstore.bookstore.Sale.Exceptions.SaleAlreadyExistException;
import com.harrypotterstore.bookstore.Sale.models.SaleRecord;
import com.harrypotterstore.bookstore.Sale.models.SaleRequest;
import com.harrypotterstore.bookstore.Sale.repositories.SaleRepository;
import com.harrypotterstore.bookstore.User.Repositories.UserRepository;
import com.harrypotterstore.bookstore.User.models.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SaleService {

    private final SaleRepository saleRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    private static int randomNumber = 0;

    public SaleService(SaleRepository saleRepository, UserRepository userRepository, BookRepository bookRepository) {
        this.saleRepository = saleRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }

    public void saveNewSale(SaleRequest sale) {
        SaleRecord saleFromDB = saleRepository.findByInvoiceNumber(sale.getInvoiceNumber());

        if (saleFromDB != null) {
            throw new SaleAlreadyExistException("La factura ya se encuentra registrada");
        }
        int randomNum = plusRandomNumber();
        LocalDate date = LocalDate.now();

        User user = userRepository.findByUsername(sale.getUsername());

        SaleRecord newSale = new SaleRecord(sale.getInvoiceNumber()+randomNum, sale.getDescription(), sale.getTotalPaid(),
                date, user.getId(), user.getName() + " " + user.getLastName());

        saleRepository.save(newSale);

        int count = 0;
        for ( Integer i: sale.getBookIds() ) {
            Book book = bookRepository.findById((long) i).get();
            book.setStock(book.getStock() - sale.getBooksInStock().get(count));
            bookRepository.save(book);
            count++;
        }
    }

    public Iterable<SaleRecord> findAllSalesReports() {
        return saleRepository.findAll();
    }

    public static int plusRandomNumber() {
        return randomNumber++;
    }
}
