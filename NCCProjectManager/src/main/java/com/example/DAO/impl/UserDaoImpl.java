package com.example.DAO.impl;

import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.DAO.UserDao;
import com.example.Entity.User;


@Repository
@Transactional(rollbackFor = Exception.class)
public class UserDaoImpl implements UserDao{
	@Autowired
	private SessionFactory sessionFactory;

	public void save(final User user) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(user);
	}
	public void update(final User user) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(user);
	}
	public User findById(final int id) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.get(User.class, id);
	}
	public void delete(final User user) {
		Session session = this.sessionFactory.getCurrentSession();
		session.remove(user);
	}
	public List<User> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
		return session.createQuery("FROM User", User.class).getResultList();
	}

	@Override
	public List<User> searhUser(String field, String name, String intValue) {
		int value = Integer.parseInt(intValue);
		Session session = this.sessionFactory.getCurrentSession();
		String qry = "select * from user where "+ field +" like '%"+ name +"%' limit "+(value*10-10)+","+(value*10);
		SQLQuery query = session.createSQLQuery(qry).addEntity(User.class);
		List<User> list = query.list();
		
		return list;
	}
	/*@Override
	public Set<Project> getProjectOfUser(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.get(User.class, id).getProjects();
	}*/
}