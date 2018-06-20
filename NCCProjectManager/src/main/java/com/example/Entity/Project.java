package com.example.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the project database table.
 * 
 */
@Entity
@Table(name = "project")
public class Project implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="project_id")
	private int projectId;

	private String customer;

	private String description;

	private String pm;

	private String technology;

	//bi-directional many-to-one association to Log_time_sheet
	@OneToMany(mappedBy="project")
	private List<Log_time_sheet> logTimeSheets;

	//bi-directional many-to-one association to Relation
	@OneToMany(mappedBy="project")
	private List<Relation> relations;

	public Project() {
	}

	public int getProjectId() {
		return this.projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
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

	public String getTechnology() {
		return this.technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public List<Log_time_sheet> getLogTimeSheets() {
		return this.logTimeSheets;
	}

	public void setLogTimeSheets(List<Log_time_sheet> logTimeSheets) {
		this.logTimeSheets = logTimeSheets;
	}

	public Log_time_sheet addLogTimeSheet(Log_time_sheet logTimeSheet) {
		getLogTimeSheets().add(logTimeSheet);
		logTimeSheet.setProject(this);

		return logTimeSheet;
	}

	public Log_time_sheet removeLogTimeSheet(Log_time_sheet logTimeSheet) {
		getLogTimeSheets().remove(logTimeSheet);
		logTimeSheet.setProject(null);

		return logTimeSheet;
	}

	public List<Relation> getRelations() {
		return this.relations;
	}

	public void setRelations(List<Relation> relations) {
		this.relations = relations;
	}

	public Relation addRelation(Relation relation) {
		getRelations().add(relation);
		relation.setProject(this);

		return relation;
	}

	public Relation removeRelation(Relation relation) {
		getRelations().remove(relation);
		relation.setProject(null);

		return relation;
	}

}