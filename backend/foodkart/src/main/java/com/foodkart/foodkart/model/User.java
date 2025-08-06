package com.foodkart.foodkart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment
    private int id;

    @Column(nullable = false, unique = true)
    private String mobile;
    @Column(nullable = true, unique = true)
    private String username;

    private String password;

    private String name;


    private String profileImage;

    private String role;

}
