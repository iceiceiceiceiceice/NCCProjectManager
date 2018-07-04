package com.example.DAO.impl;

import java.math.BigInteger;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToBeanResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.DAO.UserDao;
import com.example.Entity.User;
import com.example.Model.UserFullInfoDTO;


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
	public List<UserFullInfoDTO> getUserDataPaging(int from, int offset) {
		Session session = this.sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<UserFullInfoDTO> resultList = session.createNativeQuery("CALL getUserDataPaging( ?1, ?2)")
											.setResultTransformer(new AliasToBeanResultTransformer(UserFullInfoDTO.class))
											.setParameter(1, from)
											.setParameter(2, offset)
											.getResultList();
								
		return resultList;
	}
	public BigInteger getCountUser() {
		Session session = this.sessionFactory.getCurrentSession();
		return (BigInteger) session.createNativeQuery("SELECT COUNT(id) FROM user").getSingleResult();
	}

	/*@Override
	public Set<Project> getProjectOfUser(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.get(User.class, id).getProjects();
	}*/
}