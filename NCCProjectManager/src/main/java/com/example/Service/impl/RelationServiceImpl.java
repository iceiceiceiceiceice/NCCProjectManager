package com.example.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Dao.impl.relationDaoImpl;
import com.example.Entity.RelationPK;
import com.example.Model.RelationDTO;
import com.example.Service.RelationService;
@Service
public class RelationServiceImpl implements RelationService {
	
	@Autowired
	relationDaoImpl relationDaoImpl;
	
	@Override
	public void addUser(RelationDTO relationDTO) {
		RelationPK r = new RelationPK();
		r.setProjectId(relationDTO.getProject_ID());
		r.setUserId(relationDTO.getUser_ID());
		relationDaoImpl.saveRelation(r);
		
	}

}
