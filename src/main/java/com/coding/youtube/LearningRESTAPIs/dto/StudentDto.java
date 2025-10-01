package com.coding.youtube.LearningRESTAPIs.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // getter and setter
@AllArgsConstructor
@NoArgsConstructor
//Data Transfer Object (DTO) (used to transfer data between layers, usually controller ↔ service)
public class StudentDto {

    private Long id;
    private String name;
    private String email;
    private String subject;
    private String message;
    private Long mobileNumber;
    private int rating;

    public StudentDto(int i, String anuj, String email, String subject, String message, int mobileNumber, int rating) {
    }

}
