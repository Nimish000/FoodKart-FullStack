package com.foodkart.foodkart.service;

import com.foodkart.foodkart.model.User;
import com.foodkart.foodkart.model.UserPrincipal;
import com.foodkart.foodkart.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserUserDetailService implements UserDetailsService {
//it is for verify user from database
    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=repo.findByUsername(username);

        if(user==null){
            System.out.print("User not found");
            throw new UsernameNotFoundException("user not found");
        }
        return new UserPrincipal(user);
    }
}
