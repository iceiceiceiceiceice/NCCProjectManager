package com.example.Entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity(name="log_time_sheet")
@Table(name="log_time_sheet")
@NamedQuery(name="LogTimeSheet.findAll", query="SELECT lo FROM log_time_sheet lo")
public class LogTimeSheet implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name ="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int project_id;
	
	private String role;
	
	private String type;
	
	private int hours;

	private int user_id;
	
	
	public LogTimeSheet() {

	}


	
	
	public LogTimeSheet(int id, int project_id, String role, String type, int hours, int user_id) {
		this.id = id;
		this.project_id = project_id;
		this.role = role;
		this.type = type;
		this.hours = hours;
		this.user_id = user_id;
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

	
}
