package com.harrypotterstore.OAuthServer.service;

import com.harrypotterstore.OAuthServer.clients.UserFeignClient;
import com.harrypotterstore.OAuthServer.models.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserDetails implements UserDetailsService {

    private Logger log = LoggerFactory.getLogger(UserDetails.class);
    private final UserFeignClient userFeignClient;

    public UserDetails(UserFeignClient userFeignClient) {
        this.userFeignClient = userFeignClient;
    }

    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
        User user = userFeignClient.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("Error in login, the username does not exist in the system");
        }

        List<GrantedAuthority> authorities = user.getRoles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getDescription()))
                .peek(authority -> log.info("Role: " + authority.getAuthority()))
                .collect(Collectors.toList());
        log.info("User: " + username);

        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                authorities
        );
    }
}
