package com.example.Model;

import java.sql.Timestamp;

public class LogUserProjectWithoutIdDTO {

	private int log_time_sheet_id;

	private String role;
	
	private String type;
	
	private int hours;
	
	private String username;
	
	private String projectName;
	
	private Timestamp date;
	
	private String description;

	public LogUserProjectWithoutIdDTO(int log_time_sheet_id, String role, String type, int hours, String username,
			String projectName, Timestamp date, String description) {
		super();
		this.log_time_sheet_id = log_time_sheet_id;
		this.role = role;
		this.type = type;
		this.hours = hours;
		this.username = username;
		this.projectName = projectName;
		this.date = date;
		this.description = description;
	}

	public int getLog_time_sheet_id() {
		return log_time_sheet_id;
	}

	public void setLog_time_sheet_id(int log_time_sheet_id) {
		this.log_time_sheet_id = log_time_sheet_id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getHours() {
		return hours;
	}

	public void setHours(int hours) {
		this.hours = hours;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
}
