package com.example.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the `log time sheet` database table.
 * 
 */
@Entity
@Table(name="`log time sheet`")
public class Log_time_sheet implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private Log_time_sheetPK id;

	private int hours;

	private String type;

	//bi-directional many-to-one association to Project
	@ManyToOne
	@JoinColumn(name="project_id")
	private Project project;

	public Log_time_sheet() {
	}

	public Log_time_sheetPK getId() {
		return this.id;
	}

	public void setId(Log_time_sheetPK id) {
		this.id = id;
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