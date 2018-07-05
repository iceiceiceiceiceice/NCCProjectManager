package com.example.DAO;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;

import com.example.Entity.Project;
import com.example.Entity.User;
import com.example.Model.UserFullInfoDTO;

public interface UserDao {
	
	public void save(final User user);
	
	public void update(final User user);
	
	public User findById(final int id);
	
	public void delete(final User user);
	
	public List<User> findAll();
	
	public List<User> searhUser(String field, String name, String intValue);
<<<<<<< HEAD
=======
	
	public List<UserFullInfoDTO> filterUser(String field,String value,int index_of_page,int pageSize);
	public BigInteger countFilterUser(String field,String value);
>>>>>>> 85ee77eacf3bee1bc88df2ee62286c53748f82c0
}
