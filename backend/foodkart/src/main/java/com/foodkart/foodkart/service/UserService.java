package com.foodkart.foodkart.service;

import com.foodkart.foodkart.model.User;
import com.foodkart.foodkart.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    @Autowired
    UserRepo repo;
    @Autowired
    AuthenticationManager authManager;
    @Autowired
     JwtService jwtService;
    private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(15);

    public List<User> getUser() {
        return repo.findAll();
}

    public User createUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public String login(User user) {

        Authentication authentication=authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
        if (authentication.isAuthenticated()){
            String jwt=jwtService.generateToken(user.getUsername());

if(jwt.isEmpty()){
    return "Jwt error";
}
            return jwt;
        }else{
            return "Fail";
        }

//         User user1=repo.findByUsername(user.getUsername());
//         if(Objects.equals(user1.getPassword(), user.getPassword())){
//             return "Success";
//         }
//         return jwtService.generateToken(user.getUsername());
    }
}
