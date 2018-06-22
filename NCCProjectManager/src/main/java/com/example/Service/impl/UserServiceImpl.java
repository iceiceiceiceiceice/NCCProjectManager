package com.example.Service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DAO.impl.UserDaoImpl;
import com.example.Entity.Project;
import com.example.Entity.User;
import com.example.Model.LoginDTO;
import com.example.Model.UserDTO;
import com.example.Service.UserService;
import com.example.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDaoImpl userDao;
	
	@Autowired
	private UserRepository userRepository;
	

	@Override
	public List<UserDTO> findAll() {
		List<User> list = userDao.findAll();
		List<UserDTO> listU = new ArrayList<UserDTO>();
		for (User user : list) {
			UserDTO u = new UserDTO();
			u.setEmail(user.getUsername());
			u.setId(user.getId());

			listU.add(u);
		}
		return listU;
	}

	public User findById(final int id) {
		return userDao.findById(id);
	}

	public void save(final User user) {
		userDao.save(user);
	}

	public void update(final User user) {
		userDao.update(user);
	}

	public void delete(final int id) {
		User customer = userDao.findById(id);
		if (customer != null) {
			userDao.delete(customer);
		}
	}

	@Override
	public User loadUserByUsername(String username) {
		for (User user : userDao.findAll()) {
			if (user.getUsername().equals(username)) {
				return user;
			}
		}
		return null;
	}

	@Override
	public boolean checkLogin(User user) {
		for (User userExist : userDao.findAll()) {
			if (StringUtils.equals(user.getUsername(), userExist.getUsername())
					&& StringUtils.equals(user.getPassword(), userExist.getPassword())) {
				return true;
			}
		}
		return false;
	}

	@Override
	public LoginDTO TokenvsProfile(String token, User profile) {
		LoginDTO dto = new LoginDTO();
		dto.setToken(token);
		dto.setProfile(profile);
		return dto;
	}
	
	
	public Set<Project> findUserProject(int id){
		
		Optional<User>  opuser = userRepository.findById(id);
		if(opuser.isPresent()) {
			User user = opuser.get();
			return user.getProjects();
		}
		return null;
	}

}