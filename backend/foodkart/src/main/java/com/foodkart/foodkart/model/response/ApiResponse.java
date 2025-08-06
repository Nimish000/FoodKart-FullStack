package com.foodkart.foodkart.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiResponse {
    private int Status;
    private String message;
    private Object data;

}
