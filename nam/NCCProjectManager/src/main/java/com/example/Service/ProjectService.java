package com.example.Service;

import java.util.List;

import com.example.Entity.Project;

public interface ProjectService {
	public void save(final Project project);

	public void update(final Project project);

	public Project findById(final int id);

	public void delete(final int id);

	public List<Project> findAll();
	
	public List<Project> findProjectOfUserByUserId(int user_id);
	
	public List<Project> getProjectByIndex(int intValue);
}
