package com.example.Entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;


/**
 * The persistent class for the user database table.
 * 
 */
@Entity
@Table(name = "user" ,uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
	@OneToOne(fetch = FetchType.LAZY, mappedBy = "userLog", cascade = CascadeType.ALL)
	private LogTimeSheet logTimeSheet;
	
	private int id;

	
	private String email;

	
	private String password;

	
	private int role;

	
	private Set<Project> projects = new HashSet<>(0);
	
	public User() {
	}
	
	

	public User(int id, String email, String password, int role, Set<Project> projects) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.role = role;
		this.projects = projects;
	}
	
	public User(int id, String email, String password, int role) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.role = role;
	}



	@Id
	@Column(name="id", unique = true, nullable = false)
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}
	@Column(name="email")
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name="password")
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name="role")
	public int getRole() {
		return this.role;
	}

	public void setRole(int role) {
		this.role = role;
	}


	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name = "relation", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id", unique= true), 
	inverseJoinColumns = @JoinColumn(name = "project_id", referencedColumnName = "project_id"),
	uniqueConstraints = @UniqueConstraint(columnNames="project_id"))
	public Set<Project> getProjects() {
		return projects;
	}



	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}





	

	
}