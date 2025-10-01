package com.coding.youtube.LearningRESTAPIs.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Data
public class AddStudentRequestDto {

    @NotBlank(message = "Email is Required")
    @Size(min = 3, max = 30, message = "Name should be of length 3 to 30 characters")
    private String name;

    @Email
    @NotBlank(message = "Email is Required")
    private String email;

    private String subject;
    private String message;
    private Long mobileNumber;

    @NotNull(message = "Please give rate")
    private int rating;
}
