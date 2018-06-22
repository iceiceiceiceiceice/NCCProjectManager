package com.example.Entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="`log time sheet`")
public class LogTimeSheet implements Serializable{
	@Id
	@Column(name ="id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name="hours")
	private int hours;

	@Column(name="type")
	private String type;
	
	/*@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User userLog;*/
	
	@Column(name="user_id")
	private int userId;
	
	@Column(name="project_id")
	private int projectId;
	
	/*@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="project_id")
	private Project projectLog;*/

	public LogTimeSheet(int id, int hours, String type, int userId/*, User userLog*//*, Project projectLog*/, int projectId) {
		super();
		this.id = id;
		this.hours = hours;
		this.type = type;
		this.userId = userId;
		this.projectId = projectId;
	}

	public LogTimeSheet() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getHours() {
		return hours;
	}

	public void setHours(int hours) {
		this.hours = hours;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	
	/*public User getUserLog() {
		return userLog;
	}

	public void setUserLog(User userLog) {
		this.userLog = userLog;
	}*/
	
	

	public int getProjectId() {
		return projectId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	
	/*public Project getProjectLog() {
		return projectLog;
	}

	public void setProjectLog(Project projectLog) {
		this.projectLog = projectLog;
	}*/

	

	
}