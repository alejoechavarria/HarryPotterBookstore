package com.harrypotterstore.bookstore.Sale.repositories;

import com.harrypotterstore.bookstore.Sale.models.SaleRecord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends CrudRepository<SaleRecord, Long> {

    SaleRecord findByInvoiceNumber(String invoiceNumber);
}
