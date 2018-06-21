package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.Entity.User;
import com.example.Model.UserDTO;
import com.example.Service.impl.UserServiceImpl;

@Controller
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	
	
	@GetMapping(value= {"/get-users"})
	@ResponseBody
	public List<UserDTO> listUser(Model model)
	{
		
		return userService.findAll();
	}
	
	@GetMapping(value= ("/user/{userId}"))
	@ResponseBody
	public User user(@PathVariable(value="userId")int userId) {
		return userService.findById(userId);
	}
	
	
	
}
