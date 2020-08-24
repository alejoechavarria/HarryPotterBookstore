package com.harrypotterstore.bookstore.Sale.controllers;

import com.harrypotterstore.bookstore.Sale.models.SaleRecord;
import com.harrypotterstore.bookstore.Sale.models.SaleRequest;
import com.harrypotterstore.bookstore.Sale.services.SaleService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("sales")
public class SaleController {

    private final SaleService service;

    public SaleController(SaleService service) {
        this.service = service;
    }

    @PostMapping("/")
    public void saveNewSale(@RequestBody SaleRequest sale) {
        service.saveNewSale(sale);
    }

    @GetMapping("/reports")
    public Iterable<SaleRecord> findAllSaleReports() {
        return service.findAllSalesReports();
    }
}
