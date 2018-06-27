package com.example.DAO.impl;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.DAO.LogTimeSheetDao;
import com.example.DAO.ProjectDao;
import com.example.Entity.LogTimeSheet;
import com.example.Entity.Project;
import com.example.Entity.User;
import com.example.Model.LogTimeSheetUsername;
import com.example.Model.ProjectLogTimeSheetDTO;
import com.example.Model.UserDTO;

@Repository(value="LogTimeSheetDao")
@Transactional(rollbackFor = Exception.class)
public class LogTimeSheetDaoImpl implements LogTimeSheetDao{

	public static final String RESULT_OK ="success";
	
	@Autowired
	private SessionFactory sessionFactory;
	@Autowired
	ProjectDaoImpl pDao;
	@Autowired
	UserDaoImpl uDao;
	
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

	public LogTimeSheet create(LogTimeSheet logTimeSheet) throws Exception{
		try {
			getSession().save(logTimeSheet);
			return logTimeSheet;
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
	

	@Override
	public ProjectLogTimeSheetDTO findLogTimeSheetByProjectIdWithListUser(int project_id) {
		@SuppressWarnings("unchecked")
		List<LogTimeSheet> listLogTime=  findAll();
		List<Project> projects = pDao.findAll();
		List<User> users = uDao.findAll();
		Project projectResult = new Project();
		for(int i=0;i<projects.size();i++) {
			if(projects.get(i).getproject_id()==project_id) {
				projectResult = projects.get(i);
			}
		}
		
		List<LogTimeSheetUsername> listLogTimeTemp = new ArrayList<>();
		for(int j=0;j<listLogTime.size();j++) {
			if(listLogTime.get(j).getProject_id() == project_id ) {
				String username = "";
				for(User user : users) {
			        if(user.getId() ==  listLogTime.get(j).getUser_id()) {
			        	username = user.getUsername();
			        }
			    }
				//int id, int project_id, String role, String type, int hours, int user_id,String username
				listLogTimeTemp.add(new LogTimeSheetUsername(listLogTime.get(j).getId(),
						listLogTime.get(j).getProject_id(),
						listLogTime.get(j).getRole(),
						listLogTime.get(j).getType(),
						listLogTime.get(j).getHours(),
						listLogTime.get(j).getUser_id(),username));
			}
		}
		ProjectLogTimeSheetDTO result = new ProjectLogTimeSheetDTO(project_id,projectResult.getProjectName(),listLogTimeTemp);
		return result;
	}
	

}
