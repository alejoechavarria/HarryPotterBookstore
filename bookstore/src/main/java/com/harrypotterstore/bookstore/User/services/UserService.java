package com.harrypotterstore.bookstore.User.services;

import com.harrypotterstore.bookstore.User.Exceptions.UserAlreadyExistException;
import com.harrypotterstore.bookstore.User.Exceptions.UserNotFoundException;
import com.harrypotterstore.bookstore.User.Repositories.UserRepository;
import com.harrypotterstore.bookstore.User.models.Role;
import com.harrypotterstore.bookstore.User.models.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User findByUsername(String username) {

        User user = repository.findByUsername(username);

        if (user == null) {
            throw new UserNotFoundException("Usuario no encontrado");
        }
        return user;
    }

    public void saveNewUser(User user) {
        User userByUsername = repository.findByUsername(user.getUsername());
        User userByEmail = repository.findByEmail(user.getEmail());

        if (userByUsername != null) {
            throw new UserAlreadyExistException("El nombre de usuario ya está registrado");
        }

        if (userByEmail != null) {
            throw new UserAlreadyExistException("El correo electrónico ya está registrado");
        }

        User newUser = new User(user.getName(), user.getLastName(), user.getUsername(), user.getEmail(),
                passwordEncoder.encode(user.getPassword()), new Role(2l));

        repository.save(newUser);
    }
}
