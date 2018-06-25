package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public List<LogTimeSheet> getAllLogTimeSheetOfAllUser() {
		return logTimeSheetService.findAll();
	}
	
	@GetMapping("/user/{user_id}")
	public List<LogTimeSheet> getAllLogTimeSheetOfOneUser(@PathVariable int user_id){
		return logTimeSheetService.findLogTimeSheetByUserId(user_id);
	}
	
	@PostMapping("/create")
	public LogTimeSheet createLogTimeSheet(@RequestBody LogTimeSheet logTimeSheet) throws Exception {
		return logTimeSheetService.createLogTimeSheet(logTimeSheet);
	}
	
	@PutMapping("/update")
	public String updateLogTimeSheet(@RequestBody LogTimeSheet logTimeSheet) {
		return logTimeSheetService.updatelogTimeSheet(logTimeSheet);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteLogTimeSheetByLogId(@PathVariable int id) {
		return logTimeSheetService.deleteLogTimeSheet(id);
	}
	
	@GetMapping("/user/{user_id}/project/{project_id}")
	public List<LogTimeSheet> getLogTimeSheetOfOneProjectOfOneUser(@PathVariable int user_id, @PathVariable int project_id){
		return logTimeSheetService.findLogTimeSheetByUserIdAndProjectId(user_id, project_id);
	}
}
