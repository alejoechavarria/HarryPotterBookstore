package com.harrypotterstore.bookstore.User.models;

import javax.persistence.*;
import java.util.Collections;
import java.util.List;

@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "LASTNAME")
    private String lastName;
    @Column(name = "USERNAME", unique = true, length = 20)
    private String username;
    @Column(name = "EMAIL", unique = true, length = 50)
    private String email;
    @Column(name = "PASSWORD", length = 70)
    private String password;
    @ManyToMany(fetch =FetchType.LAZY)
    @JoinTable(name = "USERS_ROLES",
            joinColumns = @JoinColumn(name ="USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "ROLES_ID"))
    private List<Role> roles;

    public User() { }

    public User(Long id) {
        this.id = id;
    }

    public User(String name, String lastName, String username, String email, String password, Role rol) {
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = Collections.singletonList(rol);
    }

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

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public List<Role> getRoles() {
        return roles;
    }
}
