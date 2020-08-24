package com.harrypotterstore.bookstore.User.Repositories;

import com.harrypotterstore.bookstore.User.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);
}
