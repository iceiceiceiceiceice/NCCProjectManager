package com.example.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.DAO.ProjectDAO;
import com.example.Entity.Project;
import com.example.DAO.ProjectDetailRepository;
import com.example.Entity.ProjectDetail;;


@RestController
public class ProjectDetailController {
//	 
//	@Autowired
//	private ProjectDAO projectdetail;
//	
	@Autowired
	private ProjectDetailRepository repo;
	
	public ProjectDetailController() {
	}
	
	@PostMapping("/project-detail")
	public Project getDetail(@RequestBody ProjectDetail projectdetail){
		return repo.getOne(projectdetail.getProject_id());
	
	}
}
