package com.example.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DAO.ProjectDao;
import com.example.Entity.Project;
import com.example.Service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	 
	@Autowired
	private ProjectDao projectDaoImpl;
	
	
	@Override
	public void save(Project project) {
		projectDaoImpl.save(project);
		
	}

	@Override
	public void update(Project project) {
		projectDaoImpl.save(project);
		
	}

	@Override
	public Project findById(int id) {
		// TODO Auto-generated method stub
		return projectDaoImpl.findById(id);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		Project p = projectDaoImpl.findById(id);
		if(p!=null) {
			projectDaoImpl.delete(p);
		}
		
	}

	@Override
	public List<Project> findAll() {
		// TODO Auto-generated method stub
		return projectDaoImpl.findAll();
	}
	
	public List<Project> findProjectOfUserByUserId(int user_id){
		return projectDaoImpl.findProjectOfUser(user_id);
	}


	public List<Project> getProjectByIndex(int intValue) {
		return projectDaoImpl.getProjectByIndex( intValue);
	}

	@Override
	public List<Project> getProjectByStatus(String status) {
		return projectDaoImpl.getProjectByStatus(status);
	}

	
	
}
