package com.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.Model.RelationDTO;
import com.example.Service.impl.ProjectServiceImpl;
import com.example.Service.impl.RelationServiceImpl;
import com.example.Service.impl.UserServiceImpl;
@CrossOrigin
@Controller
public class RelationController {
	@Autowired 
	private RelationServiceImpl relationServiceImpl;
	@Autowired
	private ProjectServiceImpl projectService;
	@Autowired
	private UserServiceImpl userService;
	@PostMapping(value= ("/add-user"))
	@ResponseBody
	public String add_user(@RequestBody RelationDTO relationDTO) {
		try {
			if(projectService.findById(relationDTO.getProject_ID())!=null && userService.findById(relationDTO.getUser_ID())!=null) {
				relationServiceImpl.addUser(relationDTO);

				return "{\"status\":\"true\"}";
			}else {
				return "{\"status\":\"false\"}";
			}
		} catch (Exception e) {
			return "{\"status\":\"false\"}";
		}
		




	}

}
