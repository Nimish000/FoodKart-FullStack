package com.foodkart.foodkart.service;

import com.foodkart.foodkart.model.User;
import com.foodkart.foodkart.model.response.ApiResponse;
import com.foodkart.foodkart.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
public class OtpService {
    @Autowired
    UserRepo repo;
    @Autowired
    JwtService jwtService;

    @Value("${twofactor.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    public OtpService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String sendOtp(String mobile) {
        String url = "https://2factor.in/API/V1/" + apiKey + "/SMS/" + mobile + "/AUTOGEN";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            // Extract session_id from response if needed
            return response.getBody(); // optionally parse JSON
        } else {
            throw new RuntimeException("Failed to send OTP");
        }
    }

    public ApiResponse verifyOtp(String mobile, String otp) {
        String url = "https://2factor.in/API/V1/" + apiKey + "/SMS/VERIFY3/" + mobile + "/" + otp;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        if (response.getStatusCode().is2xxSuccessful() && response.getBody().contains("\"Status\":\"Success\"")) {
            User user = repo.findByMobile(mobile);

            if (user == null) {
                // 🔄 Register new user
                user = new User();
                user.setMobile(mobile);
                user.setUsername(mobile); // or generate a unique username
                user.setPassword(""); // Password is not needed for OTP-based auth
                user.setRole("USER");
                repo.save(user);
            }

            // ✅ Generate JWT token
            String token =jwtService.generateToken(user.getUsername());

            return new ApiResponse(200, "Login successful", token);
        }

        // ❌ OTP verification failed
        return new ApiResponse(401, "Invalid OTP", null);
    }

}

