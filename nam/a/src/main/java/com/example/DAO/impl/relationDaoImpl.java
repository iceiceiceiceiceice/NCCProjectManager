package com.example.DAO.impl;


import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.DAO.relationDao;
import com.example.Entity.Relation;
import com.example.Entity.RelationPK;


@Repository
@Transactional(rollbackFor = Exception.class)
public class relationDaoImpl implements relationDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public void saveRelation(final RelationPK relation) {
		// TODO Auto-generated method stub
		Relation a = new Relation();
		a.setId(relation);
		Session session = this.sessionFactory.getCurrentSession();
		session.save(a);
	}

	public void removeUser(int project_id, int getuser_id) {
		Session session = this.sessionFactory.getCurrentSession();
		String sql = "DELETE Relation where user_id = :getuser_id AND project_id = :project_id";
		Query query = session.createQuery(sql);
		query.setParameter("getuser_id", getuser_id);
		query.setParameter("project_id", project_id);
		query.executeUpdate();
	}

}
