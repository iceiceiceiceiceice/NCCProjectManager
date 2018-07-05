package com.example.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;


import com.example.DAO.ProjectDetailDao;
import com.example.Entity.Project;
import com.example.Entity.ProjectDetailRequest;
import com.example.Entity.ProjectDetailResponse;
//import com.example.Entity.User;
import com.example.Entity.UserDTOProjectDetail;


@CrossOrigin
@RestController
public class ProjectDetailController {
//	 
	@Autowired
	private ProjectDetailDao projectdao;
//	

	
	public ProjectDetailController() {
	}
	
	@PostMapping("/project-detail")
	public ProjectDetailResponse getDetail(@RequestBody ProjectDetailRequest projectdetail){
		List<Project> project = projectdao.getProjectDetail(projectdetail.getProject_id());
		List<UserDTOProjectDetail> listuser = projectdao.findByProjectID(projectdetail.getProject_id());
		return new ProjectDetailResponse(project.get(0),listuser);
	}
}
