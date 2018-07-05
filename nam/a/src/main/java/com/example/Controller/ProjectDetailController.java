package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DAO.ProjectDetailDao;
import com.example.Entity.Project;
import com.example.Entity.ProjectDetailRequest;
import com.example.Entity.ProjectDetailResponse;
//import com.example.Entity.User;
import com.example.Entity.UserDTOProjectDetail;
import com.example.Service.ProjectDetailService;


@CrossOrigin
@RestController
public class ProjectDetailController {
//	 
	@Autowired
	private ProjectDetailDao projectdao;
//	
	@Autowired
	private ProjectDetailService projectdetailservice;
	
	public ProjectDetailController() {
	}
	
	@PostMapping("/project-detail")
	public ProjectDetailResponse getDetail(@RequestBody ProjectDetailRequest projectdetail){
		List<Project> project = projectdao.getProjectDetail(projectdetail.getProject_id());
		List<UserDTOProjectDetail> listuser = projectdao.findByProjectID(projectdetail.getProject_id());
		return new ProjectDetailResponse(project.get(0),listuser,listuser.size());
	}
	@GetMapping("/get-project-pages")
	public String getProjectPage() {
		return projectdetailservice.getProjectNumber();
	}
	@GetMapping("/get-user-pages")
	public String getUserPage() {
		return projectdetailservice.getUserNumber();
	}
	@GetMapping("/get-log-time-sheet-pages")
	public String getLOgTimeSheetPage() {
		return projectdetailservice.getLogTimeSheetNumber();
	}
	@GetMapping("/get-pm")
	public List<UserDTOProjectDetail> findPM(){
		return projectdetailservice.findPM();
	}
}
