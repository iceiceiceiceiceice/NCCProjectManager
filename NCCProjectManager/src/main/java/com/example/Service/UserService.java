package com.example.Service;

import java.util.List;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.Project;
import com.example.Entity.User;
import com.example.repository.UserRepository;



import com.example.Entity.User;
import com.example.Model.LoginDTO;
import com.example.Model.UserDTO;

public interface UserService {

	public void save(final User user);

	public void update(final User user);

	public User findById(final int id);
	
	public void delete(final int id);

	public List<UserDTO> findAll();
	
	public  User loadUserByUsername(String username);
	
	public  boolean checkLogin(User user);
	
	public LoginDTO TokenvsProfile(String token, User profile);
	
	public Set<Project> findUserProject(int id);

	

}
