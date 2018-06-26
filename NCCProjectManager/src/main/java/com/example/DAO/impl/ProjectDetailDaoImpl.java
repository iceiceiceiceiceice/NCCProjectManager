package com.example.DAO.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.query.Query;

import org.springframework.stereotype.Repository;



import com.example.DAO.ProjectDetailDao;
import com.example.Entity.Project;
import com.example.Entity.Relation;


import com.example.Entity.UserDTOProjectDetail;


@Repository

public class ProjectDetailDaoImpl implements ProjectDetailDao {


	@PersistenceContext
    private EntityManager entityManager;


	@SuppressWarnings("unchecked")
	public List<Project> getProjectDetail(int project_id){
		//Session session = factory.openSession();
		String hql = "SELECT p FROM Project p WHERE p.id = "+project_id;
		Query<Project> query = (Query<Project>) entityManager.createQuery(hql);
		List<Project> result =  query.list();
		return result;
	}

	
	@SuppressWarnings("unchecked")
	public List<UserDTOProjectDetail> findByProjectID(int project_id) {
		Query<Relation> query = (Query<Relation>) entityManager.createQuery("SELECT r FROM Relation r WHERE r.project_id = "+project_id);
		List<Relation> rela = query.list();
		Query<UserDTOProjectDetail> query2 = (Query<UserDTOProjectDetail>) entityManager.createQuery("SELECT u FROM UserDTOProjectDetail u WHERE u.id = "+ rela.get(0).getuser_id());
		List<UserDTOProjectDetail> userlist = query2.list();
		for(int i = 1;i<rela.size();i++) {
			query2 = (Query<UserDTOProjectDetail>) entityManager.createQuery("SELECT u FROM UserDTOProjectDetail u WHERE u.id = "+ rela.get(i).getuser_id());
			userlist.addAll(query2.list());
		}
		return userlist;
	}




}
