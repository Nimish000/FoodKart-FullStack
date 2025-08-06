package com.foodkart.foodkart.controller;


import com.foodkart.foodkart.model.User;
import com.foodkart.foodkart.model.response.ApiResponse;
import com.foodkart.foodkart.service.OtpService;
import com.foodkart.foodkart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {



    @Autowired
    UserService service;

    @Autowired
    OtpService otpService;

    @PostMapping("/send-otp")
    public ResponseEntity<ApiResponse> sendOtp(@RequestBody Map<String, String> request) {
        try {
            String mobile = request.get("mobile");
            String result = otpService.sendOtp(mobile);
            ApiResponse response = new ApiResponse(200, "OTP sent to " + mobile, result);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            ApiResponse errorResponse = new ApiResponse(500, "Failed to send OTP: " + e.getMessage(), null);
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<ApiResponse> verifyOtp(@RequestBody Map<String, String> request) {
        try {
            String mobile = request.get("mobile");
            String otp = request.get("otp");
            ApiResponse response = otpService.verifyOtp(mobile, otp);

            if(response.getStatus()==200){
                response = new ApiResponse(200, "OTP verified successfully ", response);
                return new ResponseEntity<>(response, HttpStatus.OK);

            }
            else{
                response = new ApiResponse(401, "OTP mismatched ", otp);
                return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);

            }
        } catch (Exception e) {
            ApiResponse errorResponse = new ApiResponse(500, "Failed to verify OTP: " + e.getMessage(), null);
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/user")
    private List<User> getUsers(){
        return service.getUser();
    }

    @PostMapping("/register")
    private User createUser(@RequestBody User user){
        return service.createUser(user);
    }

    @PostMapping("/login")
    private ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        String token = service.login(user);

        if ("fail".equals(token)) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return ResponseEntity.ok(response);
    }

}
