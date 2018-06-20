package com.example.Entity;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the `log time sheet` database table.
 * 
 */
@Entity
@Table(name="`log time sheet`")
public class LogTimeSheet implements Serializable {

	@Id
	@Column(name ="id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private int hours;

	@Column
	private String type;

	//bi-directional many-to-one association to Project
	@ManyToOne
	@JoinColumn(name="project_id")
	private Project project;

	public LogTimeSheet() {
	}



	public int getHours() {
		return this.hours;
	}

	public void setHours(int hours) {
		this.hours = hours;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

}