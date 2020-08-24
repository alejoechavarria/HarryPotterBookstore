package com.harrypotterstore.bookstore.Common.controllers;

import com.harrypotterstore.bookstore.Common.models.ErrorResponse;
import com.harrypotterstore.bookstore.Sale.Exceptions.SaleAlreadyExistException;
import com.harrypotterstore.bookstore.User.Exceptions.UserAlreadyExistException;
import com.harrypotterstore.bookstore.User.Exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@ControllerAdvice
public class CustomizedResponseEntityExceptionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler({
            UserNotFoundException.class
    })
    @ResponseBody
    public ErrorResponse notFoundRequest(Exception exception, HttpServletRequest request) {
        return new ErrorResponse(exception.getMessage(), request.getRequestURI(), request.getMethod(), LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase());
    }


    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    @ExceptionHandler({
            SaleAlreadyExistException.class,
            UserAlreadyExistException.class
    })
    @ResponseBody
    public ErrorResponse badRequest(Exception exception, HttpServletRequest request) {
        return new ErrorResponse(exception.getMessage(), request.getRequestURI(), request.getMethod(), LocalDateTime.now(),
                HttpStatus.NOT_ACCEPTABLE.value(), HttpStatus.NOT_ACCEPTABLE.getReasonPhrase());
    }
}
