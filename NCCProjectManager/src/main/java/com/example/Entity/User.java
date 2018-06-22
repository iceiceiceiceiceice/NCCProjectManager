package com.example.Entity;

import java.io.Serializable;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import java.util.ArrayList;
import java.util.List;


import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;


/**
 * The persistent class for the user database table.
 * 
 */

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(value = { "role", "authorities" })
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String password;

	private String role;

	private String username;

	
	private Set<Project> projects = new HashSet<>(0);
	
	public User() {
	}
	
	

	public User(int id, String username, String password, String role, Set<Project> projects) {
		this.id = id;
		this.password = password;
		this.role = role;
		this.projects = projects;
		this.username = username;
	}
	
	public User(int id, String username, String password, String role) {
		this.id = id;
		this.username = username;
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

	@Column(name="username")
	public String getUserName() {
		return this.username;
	}

	public void setUserName(String username) {
		this.username = username;
	}
	
	@Column(name="password")
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name="role")
	public String getRole() {
		return this.role;
	}

	public void setRole(String role) {
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

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	 public List<GrantedAuthority> getAuthorities() {
		  List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		  authorities.add(new SimpleGrantedAuthority(role));
		  return authorities;
		 }

}