package com.example.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.Entity.LogTimeSheet;
import com.example.Entity.User;
import com.example.repository.LogTimeSheetRepository;

@Service
@Component
public class LogTimeSheetService {
	
	@Autowired
	private LogTimeSheetRepository logTimeSheetRepository;
	
	public LogTimeSheet insertLogTimeSheet(LogTimeSheet logTimeSheet) {
		if(findOneLogTimeSheetById(logTimeSheet) == null) {
			return logTimeSheetRepository.save(logTimeSheet);
		}
		return null;
	}

	public List<LogTimeSheet> findAllLogTimeSheet() {
		return logTimeSheetRepository.findAll();
	}
	
	public LogTimeSheet findOneLogTimeSheetById(LogTimeSheet logTimeSheet) {
		Optional<LogTimeSheet> optional =  logTimeSheetRepository.findById(logTimeSheet.getId());
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	public LogTimeSheet updateLogTimeSheet(LogTimeSheet logTimeSheet) {
		if(findOneLogTimeSheetById(logTimeSheet) != null) {
			return logTimeSheetRepository.save(logTimeSheet);
		}
		return null;
	}
	
	public LogTimeSheet deleteLogTimeSheet(int id) {
		Optional<LogTimeSheet> optional =  logTimeSheetRepository.findById(id);
		if(optional.isPresent()) {
			logTimeSheetRepository.deleteById(id);
			return optional.get();
		}
		return null;
	}


}
