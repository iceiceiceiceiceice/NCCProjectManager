package com.example.Entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the user_role database table.
 * 
 */
@Embeddable
public class UserRolePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	private int id;

	@Column(name="role_id", insertable=false, updatable=false)
	private int roleId;

	@Column(name="user_id", insertable=false, updatable=false)
	private int userId;

	public UserRolePK() {
	}
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getRoleId() {
		return this.roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public int getUserId() {
		return this.userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof UserRolePK)) {
			return false;
		}
		UserRolePK castOther = (UserRolePK)other;
		return 
			(this.id == castOther.id)
			&& (this.roleId == castOther.roleId)
			&& (this.userId == castOther.userId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.id;
		hash = hash * prime + this.roleId;
		hash = hash * prime + this.userId;
		
		return hash;
	}
}