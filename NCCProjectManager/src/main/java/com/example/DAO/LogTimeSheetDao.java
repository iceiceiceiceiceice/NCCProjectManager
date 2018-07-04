package com.example.DAO;

import java.util.List;

import org.hibernate.HibernateException;

import com.example.Entity.LogTimeSheet;
import com.example.Model.LogTimeSheetUPName;
import com.example.Model.LogTimeSheetUserWithProjectNameDTO;
import com.example.Model.ProjectLogTimeSheetDTO;


public interface LogTimeSheetDao{

	public List<LogTimeSheet> findAll();
	public ProjectLogTimeSheetDTO findLogTimeSheetByProjectIdWithListUser(int project_id);
	@SuppressWarnings("unchecked")
	public List<LogTimeSheetUserWithProjectNameDTO> findByUserId(int user_id) ;

	public boolean create(LogTimeSheet logTimeSheet) throws Exception;

	public LogTimeSheet findById(int id) ;

	public List<LogTimeSheet> findByUserIdAndProjectId(int userId, int projectId) ;

	public String updateLogTimeSheet(LogTimeSheet logTimeSheet) ;

	public String deleteLogTimeSheet(int id) ;
	
	public List<LogTimeSheetUPName> filterLogTimeSheet(String field,String value,int index_of_page) ;
	public int getCountAllLogTimeSheet() ;
	public int getCountAllLogTimeSheetInMonth(int month,int year) ;
}
