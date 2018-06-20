package com.example.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Entity.Project;

@Repository
public interface ProjectDetailRepository extends JpaRepository<Project, Integer> {
	
}
