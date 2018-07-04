package com.example.Model;

import java.sql.Timestamp;

public class LogTimeSheetUPName {
	private int id;
	
	private int project_name;
	
	private String role;
	
	private String type;
	
	private int hours;

	private int user_id;
	
	private String username;
	
	private String description;
	
	private Timestamp date;

	public LogTimeSheetUPName(int id, int project_name, String role, String type, int hours, int user_id,
			String username, String description, Timestamp date) {
		super();
		this.id = id;
		this.project_name = project_name;
		this.role = role;
		this.type = type;
		this.hours = hours;
		this.user_id = user_id;
		this.username = username;
		this.description = description;
		this.date = date;
	}
	
	public LogTimeSheetUPName() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getProject_name() {
		return project_name;
	}

	public void setProject_name(int project_name) {
		this.project_name = project_name;
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

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}
	
	
	
	
}
