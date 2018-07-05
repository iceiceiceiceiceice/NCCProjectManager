package com.example.DAO;

import java.util.List;
import java.util.Set;

import com.example.Entity.Project;
import com.example.Entity.User;

public interface UserDao {
	
	public void save(final User user);
	
	public void update(final User user);
	
	public User findById(final int id);
	
	public void delete(final User user);
	
	public List<User> findAll();
	
	/*public Set<Project> getProjectOfUser(int id);*/
}
