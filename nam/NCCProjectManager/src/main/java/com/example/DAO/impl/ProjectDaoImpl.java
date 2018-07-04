package com.example.DAO.impl;

import java.util.List;

import javax.management.Query;

import org.hibernate.SQLQuery;
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
		project.setStatus("running");
		session.save(project);

	}

	@Override
	public void update(Project project) {
		Session session = sessionFactory.getCurrentSession();
		session.update(project);
	}

	@Override
	public Project findById(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.get(Project.class, id);
	}

	@Override
	public void delete(Project project) {
		Session session = this.sessionFactory.getCurrentSession();
		session.remove(project);

	}

	@Override
	public List<Project> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
		return session.createQuery("FROM Project", Project.class).getResultList();
	}

	public List<Project> findProjectOfUser(int userId) {
		Session session = this.sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<Project> p=  session.createNativeQuery(""
				+ "SELECT project_id, projectName, customer, PM, technology, description FROM project P WHERE P.project_id IN ("
				+ "SELECT R.project_id FROM relation R WHERE R.user_id = ?1)").setParameter(1, userId).addEntity(Project.class).getResultList();
		if(p.isEmpty()) {
			return null;
		}
		return p;
	}

	public List<Project> getProjectByIndex(int intValue) {
		Session session = this.sessionFactory.getCurrentSession();
		String qry = "select * from project limit "+(intValue*10-10)+","+(intValue*10);
		SQLQuery query = session.createSQLQuery(qry).addEntity(Project.class);
		List<Project> list = query.list();

		return list;
	}

}
