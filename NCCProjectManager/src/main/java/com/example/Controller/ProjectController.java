package com.example.Controller;

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
	
	@GetMapping(value= ("/get-projects"))
	@ResponseBody
	public List<Project> listProject(Model model)
	{
		
		List<Project> list = projectService.findAll();
		return list;
	}
	
	
	
	@PostMapping(value=("/create-project"))
	@ResponseBody
	public createrProject addToProject(@RequestBody Project project) {
		
		projectService.save(project);
		
		createrProject cP =  new createrProject();
		cP.setStatus(true);
		cP.setProjectInfo(project);
		return cP;
	}
	
	@RequestMapping(value="/project/user", method = RequestMethod.POST)
	@ResponseBody
	public List<Project> getProjectOfUserByUserId(@RequestBody Map<String, Integer> map){
		return projectService.findProjectOfUserByUserId(map.get("user_id"));
	}
	
}
