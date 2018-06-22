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

	public List<LogTimeSheet> findLogTimeSheetByUserId(int id) {
		return logTimeSheetDaoImpl.findByUserId(id);
	}

	public int createLogTimeSheet(LogTimeSheet logTimeSheet) {
		return logTimeSheetDaoImpl.createLogTimeSheet(logTimeSheet);
	}
}
