package com.foodkart.foodkart.controller;


import com.foodkart.foodkart.model.User;
import com.foodkart.foodkart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {



    @Autowired
    UserService service;

    @GetMapping("/user")
    private List<User> getUsers(){
        return service.getUser();
    }

    @PostMapping("/register")
    private User createUser(@RequestBody User user){
        return service.createUser(user);
    }

    @PostMapping("/login")
    private String login(@RequestBody User user){
        return service.login(user);
    }

}
