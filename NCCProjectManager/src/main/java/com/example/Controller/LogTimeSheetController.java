package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.LogTimeSheet;
import com.example.Service.impl.LogTimeSheetServiceImpl;

@RestController
@RequestMapping("/log-time-sheet")
public class LogTimeSheetController {
	
	@Autowired
	private LogTimeSheetServiceImpl logTimeSheetService;

	@GetMapping("/all")
	public List<LogTimeSheet> getAllLogTimeSheet() {
		return logTimeSheetService.findAll();
	}
	
	@GetMapping("/user/{id}")
	public List<LogTimeSheet> getUserLogTimeSheet(@PathVariable int id){
		return logTimeSheetService.findLogTimeSheetByUserId(id);
	}
	
	@PostMapping("/create")
	public int createLogTimeSheet(@RequestBody LogTimeSheet logTimeSheet) {
		return logTimeSheetService.createLogTimeSheet(logTimeSheet);
	}
}
