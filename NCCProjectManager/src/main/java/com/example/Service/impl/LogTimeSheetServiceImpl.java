package com.example.Service.impl;

import java.util.List;
import java.util.function.LongToIntFunction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DAO.impl.LogTimeSheetDaoImpl;
import com.example.Entity.LogTimeSheet;
import com.example.Service.LogTimeSheetService;

@Service
public class LogTimeSheetServiceImpl implements LogTimeSheetService{

	@Autowired
	private LogTimeSheetDaoImpl logTimeSheetDaoImpl;
	
	@Override
	public List<LogTimeSheet> findAll() {
		
		return logTimeSheetDaoImpl.findAll();
	}

	public List<LogTimeSheet> findLogTimeSheetByUserId(int user_id) {
		return logTimeSheetDaoImpl.findByUserId(user_id);
	}
	
	public List<LogTimeSheet> findLogTimeSheetByUserIdAndProjectId(int userId, int projectId) {
		return logTimeSheetDaoImpl.findByUserIdAndProjectId(userId, projectId);
	}

	public LogTimeSheet findLogTimeSheetById(int id) {
		return logTimeSheetDaoImpl.findById(id);
	}
	
	public String createLogTimeSheet(LogTimeSheet logTimeSheet) throws Exception {
		return logTimeSheetDaoImpl.create(logTimeSheet);
	}

	public String updatelogTimeSheet(LogTimeSheet logTimeSheet) {
		return logTimeSheetDaoImpl.updateLogTimeSheet(logTimeSheet);
	}

	public String deleteLogTimeSheet(int id) {
		return logTimeSheetDaoImpl.deleteLogTimeSheet(id);
	}
}
