package com.example.Entity;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the relation database table.
 * 
 */
@Entity
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