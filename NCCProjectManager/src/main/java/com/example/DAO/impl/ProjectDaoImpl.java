package com.example.DAO.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.DAO.ProjectDao;
import com.example.Entity.Project;


@Repository(value="ProjectDao")
@Transactional(rollbackFor = Exception.class)
public class ProjectDaoImpl implements ProjectDao {

	@Autowired
	private SessionFactory sessionFactory;
	

	@Override
	public void save(Project project) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(project);

	}

	@Override
	public void update(Project project) {
		Session session = this.sessionFactory.getCurrentSession();
	    session.update(project);
	}

	@Override
	public Project findById(int id) {
		Session session = this.sessionFactory.getCurrentSession();
	    return (Project) session.get(Project.class, id);
	}

	@Override
	public void delete(Project project) {
		Session session = this.sessionFactory.getCurrentSession();
	    session.delete(project);

	}

	@Override
	public List<Project> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
	    return session.createQuery("").list();
	}

}
