package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employeeForm")
    public String showForm(Model model) {
        model.addAttribute("employee", new Employee());
        return "employeeForm";
    }

    @PostMapping("/submitForm")
    public String submitForm(@ModelAttribute Employee employee, Model model) {
        // Save employee to MongoDB
        employeeRepository.save(employee);

        model.addAttribute("employee", employee);
        return "employeeResult";
    }
}
