package com.example.Dao;

import org.springframework.stereotype.Service;

import com.example.Entity.RelationPK;

@Service
public interface relationDao {
	

	public void saveRelation(final RelationPK relation);
}
