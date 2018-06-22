package com.example.Entity;

import java.io.Serializable;
import javax.persistence.*;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



/**
 * The persistent class for the project database table.
 * 
 */
@Entity
@Table(name="project")
@NamedQuery(name="Project.findAll", query="SELECT p FROM Project p")
public class Project implements Serializable {
	private static final long serialVersionUID = 1L;


	@ManyToMany(mappedBy = "projects")
	
	/*@OneToOne(fetch = FetchType.LAZY, mappedBy = "projectLog", cascade = CascadeType.ALL)
	private LogTimeSheet logTimeSheet;*/
	
	private int project_id;



	
	private String customer;

	
	private String description;

	
	private String pm;


	
	private String technology;
	
	private String projectName;



	public Project() {
	}
	
	

	public Project(int project_id, String customer,String projectName, String description, String pm, String technology) {
		this.project_id = project_id;
		this.customer = customer;
		this.description = description;
		this.pm = pm;
		this.technology = technology;
		this.projectName = projectName;
	}




	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="project_id",unique= true, nullable = false)
	public int getproject_id() {
		return this.project_id;
	}
	

	public void setproject_id(int project_id) {
		this.project_id = project_id;
	}

	@Column(name="customer")
	public String getCustomer() {
		return this.customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	@Column(name="description")
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name="PM")
	public String getPm() {
		return this.pm;
	}

	public void setPm(String pm) {
		this.pm = pm;
	}


	@Column(name="technology")
	public String getTechnology() {
		return this.technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}


	
	@Column(name="projectName")
	public String getProjectName() {
		return projectName;
	}



	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	

}