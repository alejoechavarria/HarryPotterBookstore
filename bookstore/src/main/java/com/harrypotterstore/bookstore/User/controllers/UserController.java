package com.harrypotterstore.bookstore.User.controllers;

import com.harrypotterstore.bookstore.User.models.User;
import com.harrypotterstore.bookstore.User.services.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/login/{username}")
    public User findByUsername(@PathVariable("username") String username) {
        return service.findByUsername(username);
    }

    @PostMapping("/signup")
    public void saveNewUser(@RequestBody User user) {
        service.saveNewUser(user);
    }
}
