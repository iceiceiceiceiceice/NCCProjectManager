package com.example.Service.impl;

import java.util.List;
import java.util.function.LongToIntFunction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DAO.impl.LogTimeSheetDaoImpl;
import com.example.Entity.LogTimeSheet;
import com.example.Model.LogTimeSheetDTO;
import com.example.Service.LogTimeSheetService;

@Service
public class LogTimeSheetServiceImpl implements LogTimeSheetService{
	
	Boolean status;

	@Autowired
	private LogTimeSheetDaoImpl logTimeSheetDaoImpl;
	
	@Override
	public List<LogTimeSheet> findAll() {
		
		return logTimeSheetDaoImpl.findAll();
	}
	
	@Override
	public List<LogTimeSheet> findLogTimeSheetByUserId(int user_id) {
		return logTimeSheetDaoImpl.findByUserId(user_id);
	}
	@Override
	public List<LogTimeSheet> findLogTimeSheetByUserIdAndProjectId(int userId, int projectId) {
		return logTimeSheetDaoImpl.findByUserIdAndProjectId(userId, projectId);
	}
	@Override
	public LogTimeSheet findLogTimeSheetById(int id) {
		return logTimeSheetDaoImpl.findById(id);
	}
	@Override
	public LogTimeSheetDTO createLogTimeSheet(LogTimeSheet logTimeSheet) throws Exception {
		 return new LogTimeSheetDTO(logTimeSheetDaoImpl.create(logTimeSheet), logTimeSheet);
	}
	@Override
	public String updatelogTimeSheet(LogTimeSheet logTimeSheet) {
		return logTimeSheetDaoImpl.updateLogTimeSheet(logTimeSheet);
	}
	@Override
	public String deleteLogTimeSheet(int id) {
		return logTimeSheetDaoImpl.deleteLogTimeSheet(id);
	}
}
