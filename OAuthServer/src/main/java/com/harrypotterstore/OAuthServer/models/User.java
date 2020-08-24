package com.harrypotterstore.OAuthServer.models;

import java.util.List;

public class User {

    private Long id;
    private String name;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private List<Role> roles;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public List<Role> getRoles() {
        return roles;
    }

}
