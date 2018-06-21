package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EnableAutoConfiguration
@EntityScan(basePackages= {"com.example","com.example.Entity"})
public class NccProjectManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(NccProjectManagerApplication.class, args);
	}
}
