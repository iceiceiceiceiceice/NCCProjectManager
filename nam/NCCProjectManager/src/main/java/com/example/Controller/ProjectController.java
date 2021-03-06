package com.example.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.Entity.Project;
import com.example.Model.createrProject;
import com.example.Service.impl.ProjectServiceImpl;
@CrossOrigin
@Controller
public class ProjectController {
	@Autowired
	private ProjectServiceImpl projectService;

	@PostMapping(value= ("/get-all-projects"))
	@ResponseBody
	public List<Project> listProject(@RequestBody HashMap<String, Integer> Hmap)
	{
		return projectService.getProjectByIndex(Hmap.get("index_of_page").intValue());	
	}


	@PostMapping(value=("/end-project"))
	@ResponseBody
	public String endProject(@RequestBody Project project){
		try {	
			String status = project.getStatus();
			String notes = project.getNotes();
			  project = projectService.findById(project.getproject_id());
			if(project==null) {
				
				return "{\"status\":\"false\"}";  
			}else {
				project.setNotes(notes);
				project.setStatus(status);
				projectService.update(project);

				return "{\"status\":\"true\"}";
			}

		} catch (Exception e) {

			return "{\"status\":\"false\"}"; 

		}

	}

	@PostMapping(value=("/create-project"))
	@ResponseBody
	public Project addToProject(@RequestBody Project project) {

		projectService.save(project);

		createrProject cP =  new createrProject();
		cP.setStatus(true);
		cP.setProjectInfo(project);
		return project;

	}

	@RequestMapping(value="/project/user", method = RequestMethod.POST)
	@ResponseBody
	public List<Project> getProjectOfUserByUserId(@RequestBody Map<String, Integer> map){
		return projectService.findProjectOfUserByUserId(map.get("user_id"));
	}

}
