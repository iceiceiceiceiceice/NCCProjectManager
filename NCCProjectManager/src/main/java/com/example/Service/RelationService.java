package com.example.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.Project;
import com.example.Entity.User;
import com.example.repository.RelationRepository;

@Service
public class RelationService {

	@Autowired
	private RelationRepository relationRepository;
	
	public List<User> findAllRelation(){
		return relationRepository.findAll();
	}
} 
