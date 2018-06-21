package com.example.Entity;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the relation database table.
 * 
 */
@Entity
@NamedQuery(name="Relation.findAll", query="SELECT r FROM Relation r")
public class Relation implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private RelationPK id;

	public Relation() {
	}

	public RelationPK getId() {
		return this.id;
	}

	public void setId(RelationPK id) {
		this.id = id;
	}

}