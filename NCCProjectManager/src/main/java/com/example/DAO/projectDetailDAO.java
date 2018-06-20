package com.example.DAO;

import java.util.List;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.Entity.Project;


public class projectDetailDAO implements ProjectDAO {
	
	@Autowired
	private SessionFactory factory;

	public List<Project> getProjectDetail(int project_id){
		Session session = factory.openSession();
		String hql = "SELECT * FROM project p WHERE p.id = :"+project_id;
		Query<Project> query = session.createQuery(hql);
		List<Project> result =  query.list();
		return result;
	}
}	
