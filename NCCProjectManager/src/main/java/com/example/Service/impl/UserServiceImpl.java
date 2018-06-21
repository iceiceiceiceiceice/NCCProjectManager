package com.example.Service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Dao.impl.UserDaoImpl;
import com.example.Entity.User;
import com.example.Model.UserDTO;

@Service
public class UserServiceImpl {

	@Autowired
	private UserDaoImpl userDao;

	public List<UserDTO> findAll() {
		List<User> list = userDao.findAll();
		List<UserDTO> listU = new ArrayList<UserDTO>();
		for (User user : list) {
			UserDTO u = new UserDTO();
			u.setEmail(user.getEmail());
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
}