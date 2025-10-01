package com.coding.youtube.LearningRESTAPIs.service;

import com.coding.youtube.LearningRESTAPIs.dto.AddStudentRequestDto;
import com.coding.youtube.LearningRESTAPIs.dto.StudentDto;

import java.util.List;
import java.util.Map;

public interface StudentService {

    List<StudentDto> getAllStudents();

    StudentDto getStudentById(Long id);

    StudentDto createNewStudent(AddStudentRequestDto addStudentRequestDto);

    void deleteStudentById(Long id);

    StudentDto updateStudent(Long id, AddStudentRequestDto addStudentRequestDto);

}
