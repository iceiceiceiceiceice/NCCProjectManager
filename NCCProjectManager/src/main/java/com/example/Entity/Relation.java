package com.example.Entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity
@NamedQuery(name="Relation.findAll", query="SELECT r FROM Relation r")
public class Relation implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@Column(name="project_id")
	private int project_id;

	@Column(name="user_id")
	private int user_id;

	public Relation() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getproject_id() {
		return this.project_id;
	}

	public void setproject_id(int project_id) {
		this.project_id = project_id;
	}

	public int getuser_id() {
		return this.user_id;
	}

	public void setuser_id(int user_id) {
		this.user_id = user_id;
	}

}

