package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.example.Controller.ProjectDetailController;

@SpringBootApplication(scanBasePackages="com.example")
//@ComponentScan(basePackageClasses = ProjectDetailController.class)

public class NccProjectManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(NccProjectManagerApplication.class, args);
	}
}
