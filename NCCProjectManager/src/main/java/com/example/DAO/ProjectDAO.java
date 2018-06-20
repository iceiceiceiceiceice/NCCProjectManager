package com.example.DAO;

import java.util.List;


import org.springframework.stereotype.Repository;

import com.example.Entity.Project;


public interface ProjectDAO  {
	public List<Project> getProjectDetail(int project_id);
}
