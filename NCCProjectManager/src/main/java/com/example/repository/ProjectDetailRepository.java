package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.Project;

public interface ProjectDetailRepository extends JpaRepository<Project, Long>{

	
}
