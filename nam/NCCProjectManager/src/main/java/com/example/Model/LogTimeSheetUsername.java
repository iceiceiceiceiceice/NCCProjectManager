package com.example.Model;


public class LogTimeSheetUsername {
	private int id;
	
	private int project_id;
	
	private String role;
	
	private String type;
	
	private int hours;

	private int user_id;
	
	private String username;
	
	public LogTimeSheetUsername() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getProject_id() {
		return project_id;
	}

	public void setProject_id(int project_id) {
		this.project_id = project_id;
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

	public LogTimeSheetUsername(int id, int project_id, String role, String type, int hours, int user_id,
			String username) {
		super();
		this.id = id;
		this.project_id = project_id;
		this.role = role;
		this.type = type;
		this.hours = hours;
		this.user_id = user_id;
		this.username = username;
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
}
