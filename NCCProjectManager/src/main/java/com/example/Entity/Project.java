package com.example.Entity;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the project database table.
 * 
 */
@Entity
@NamedQuery(name="Project.findAll", query="SELECT p FROM Project p")
@Table(name="project")
public class Project implements Serializable {
	private static final long serialVersionUID = 1L;
	
	/*@ManyToMany(mappedBy = "projects")*/

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="project_id")
	private int project_id;
	@Column(name = "customer")
	private String customer;
	@Column(name = "description")
	private String description;
	@Column(name = "PM")
	private String pm;
	@Column(name="projectName")
	private String projectName;
	@Column(name = "technology")
	private String technology;

	public Project() {
	}

	public int getproject_id() {
		return this.project_id;
	}

	public void setproject_id(int project_id) {
		this.project_id = project_id;
	}

	public String getCustomer() {
		return this.customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPm() {
		return this.pm;
	}

	public void setPm(String pm) {
		this.pm = pm;
	}

	public String getProjectName() {
		return this.projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getTechnology() {
		return this.technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

}