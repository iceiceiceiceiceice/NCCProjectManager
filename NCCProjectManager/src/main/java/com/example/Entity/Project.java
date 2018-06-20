package com.example.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="project")
public class Project {
	@Id
	@Column(name="project_id")
	private int id;
	@Column(name="projectName")
	private String projectName;
	@Column(name = "customer")
	private String customerName;
	@Column(name = "PM")
	private String PM;
	@Column(name = "technology")
	private String technology;
	@Column(name = "description")
	private String description;
	public Project(int id, String projectName, String customerName, String pM, String technology, String description) {
		super();
		this.id = id;
		this.projectName = projectName;
		this.customerName = customerName;
		PM = pM;
		this.technology = technology;
		this.description = description;
	}
	public Project() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getPM() {
		return PM;
	}
	public void setPM(String pM) {
		PM = pM;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
