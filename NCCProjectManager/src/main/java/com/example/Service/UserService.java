package com.example.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.Project;
import com.example.Entity.User;
import com.example.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;

	public Set<Project> findUserProject(int id){
		
		Optional<User>  opuser = userRepository.findById(id);
		if(opuser.isPresent()) {
			User user = opuser.get();
			return user.getProjects();
		}
		return null;
	}
}
