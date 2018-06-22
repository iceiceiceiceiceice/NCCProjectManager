package com.example.DAO.impl;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.DAO.LogTimeSheetDao;
import com.example.Entity.LogTimeSheet;

import javassist.convert.Transformer;

@Repository(value="LogTimeSheetDao")
@Transactional(rollbackFor = Exception.class)
public class LogTimeSheetDaoImpl implements LogTimeSheetDao{


	@Autowired
	private SessionFactory sessionFactory;
	
	public Session getSession() {
		if(sessionFactory != null) {
			return sessionFactory.getCurrentSession();
		}
		return null;
	}

	@Override
	public List<LogTimeSheet> findAll() {
		return getSession().createQuery("FROM log_time_sheet").getResultList();
		
	}

	public List<LogTimeSheet> findByUserId(int id) {
		return getSession()
				.createNativeQuery("SELECT id, project_id, role, type, hours, user_id FROM log_time_sheet   WHERE user_id = ?1")
				.setParameter(1, id).addEntity(LogTimeSheet.class).getResultList();
	}

	public int createLogTimeSheet(LogTimeSheet logTimeSheet) {
		return  (int) getSession().save(logTimeSheet);
	}

}
