package com.example.Controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.LogTimeSheet;
import com.example.Entity.Project;
import com.example.Entity.User;
import com.example.Service.LogTimeSheetService;
import com.example.Service.RelationService;
import com.example.Service.UserService;

@RestController
@EnableAutoConfiguration
@ComponentScan(basePackages= {"com.example","com.example.Controller"})
public class ProjectDetailController {
	
	@Autowired
	private LogTimeSheetService logTimeSheetService;
	
	@Autowired
	private UserService userService;
	
	

	
	@RequestMapping(value="/user/get-log-time-sheet", method = RequestMethod.GET)
	public List<LogTimeSheet> getLogTimeSheet() {
		return logTimeSheetService.findAllLogTimeSheet();
	}
	
	@RequestMapping(value="/user/insert-log-time-sheet", method = RequestMethod.POST)
	public LogTimeSheet insertLogTimeSheet(@RequestBody LogTimeSheet logTimeSheet) {
		return logTimeSheetService.insertLogTimeSheet(logTimeSheet);
	}
	
	@RequestMapping(value="/user/update-log-time-sheet", method = RequestMethod.PUT)
	public LogTimeSheet updateLogTimeSheet(@RequestBody LogTimeSheet logTimeSheet) {
		return logTimeSheetService.updateLogTimeSheet(logTimeSheet);
	}
	
	@RequestMapping(value="/user/delete-log-time-sheet/{id}", method = RequestMethod.DELETE)
	public LogTimeSheet updateLogTimeSheet(@PathVariable int id) {
		return logTimeSheetService.deleteLogTimeSheet(id);
	}
	
	@RequestMapping(value="/user/get-all-project/{id}", method = RequestMethod.GET)
	public Set<Project> getAllProject(@PathVariable int id) {
		return userService.findUserProject(id);
	}
}
