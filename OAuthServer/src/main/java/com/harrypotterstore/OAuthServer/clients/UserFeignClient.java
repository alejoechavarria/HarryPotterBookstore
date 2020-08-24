package com.harrypotterstore.OAuthServer.clients;

import com.harrypotterstore.OAuthServer.models.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user-service", url = "http://localhost:9000/")
public interface UserFeignClient {

    @GetMapping("users/login/{username}")
    User findByUsername(@PathVariable String username);
}
