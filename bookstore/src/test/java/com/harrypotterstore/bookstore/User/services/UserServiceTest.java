package com.harrypotterstore.bookstore.User.services;

import com.harrypotterstore.bookstore.User.Exceptions.UserAlreadyExistException;
import com.harrypotterstore.bookstore.User.Repositories.UserRepository;
import com.harrypotterstore.bookstore.User.models.Role;
import com.harrypotterstore.bookstore.User.models.User;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {

    @Test
    public void save_user_is_correct() {
        //Arrange
        User user = new User("Random", "Random", "Random", "Random", "Random", new Role(2L));
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(user);
        UserService userService = new UserService(userRepository);

        //Act
        userService.saveNewUser(user);

        //Assert
        Mockito.verify(userRepository).save(Mockito.any(User.class));
    }

}