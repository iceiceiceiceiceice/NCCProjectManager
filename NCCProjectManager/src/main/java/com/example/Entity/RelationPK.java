package com.example.Entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the relation database table.
 * 
 */
@Embeddable
public class RelationPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;
	@Column(name = "id")
	private int id;

	@Column(name="user_id", insertable=false, updatable=false)
	private int userId;

	@Column(name="project_id", insertable=false, updatable=false)
	private int projectId;

	public RelationPK() {
	}
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserId() {
		return this.userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getProjectId() {
		return this.projectId;
	}
	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof RelationPK)) {
			return false;
		}
		RelationPK castOther = (RelationPK)other;
		return 
			(this.id == castOther.id)
			&& (this.userId == castOther.userId)
			&& (this.projectId == castOther.projectId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.id;
		hash = hash * prime + this.userId;
		hash = hash * prime + this.projectId;
		
		return hash;
	}
}