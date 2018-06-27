package com.example.DAO.impl;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.DAO.LogTimeSheetDao;
import com.example.Entity.LogTimeSheet;

@Repository(value="LogTimeSheetDao")
@Transactional(rollbackFor = Exception.class)
public class LogTimeSheetDaoImpl implements LogTimeSheetDao{

	public static final String RESULT_OK ="success";
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public Session getSession() {
		if(sessionFactory != null) {
			return sessionFactory.getCurrentSession();
		}
		return null;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<LogTimeSheet> findAll() {
		return getSession().createQuery("FROM log_time_sheet").getResultList();
		
	}

	@SuppressWarnings("unchecked")
	public List<LogTimeSheet> findByUserId(int user_id) {
		return getSession()
				.createNativeQuery("SELECT id, project_id, role, type, hours, user_id FROM log_time_sheet   WHERE user_id = ?1")
				.setParameter(1, user_id).addEntity(LogTimeSheet.class).getResultList();
	}

	public boolean create(LogTimeSheet logTimeSheet) throws Exception{
		try {
			getSession().save(logTimeSheet);
			return true;
		}catch (HibernateException e) {
			throw new Exception("Saving the log time sheet failed, a cay", e);
		}
		
	}

	public LogTimeSheet findById(int id) {
		return (LogTimeSheet) getSession()
				.createNativeQuery("SELECT id, project_id, role, type, hours, user_id FROM log_time_sheet   WHERE id = ?1")
				.setParameter(1, id).addEntity(LogTimeSheet.class).getSingleResult();
	}

	public List<LogTimeSheet> findByUserIdAndProjectId(int userId, int projectId) {
		@SuppressWarnings("unchecked")
		List<LogTimeSheet> listResult=   getSession()
				.createNativeQuery("SELECT id, project_id, role, type, hours, user_id FROM log_time_sheet   WHERE user_id =?1 AND project_id = ?2")
				.setParameter(1, userId).setParameter(2, projectId).addEntity(LogTimeSheet.class).getResultList();
		if(listResult.isEmpty()) {
			return null;
		}
		return listResult;
	}

	public String updateLogTimeSheet(LogTimeSheet logTimeSheet) {
			getSession().update("log_time_sheet",logTimeSheet);
			return RESULT_OK;
		
	}

	public String deleteLogTimeSheet(int id) {
		 getSession().delete(findById(id));
		 return RESULT_OK;
	}
	

}
