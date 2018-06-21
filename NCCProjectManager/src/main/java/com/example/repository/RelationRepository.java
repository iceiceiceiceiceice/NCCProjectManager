package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.Project;
import com.example.Entity.User;

public interface RelationRepository extends JpaRepository<User, Long>{

}
