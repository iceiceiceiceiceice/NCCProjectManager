package com.example.Service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.example.DAO.LogTimeSheetDao;
import com.example.DAO.ProjectDao;
import com.example.DAO.ProjectDetailDao;
import com.example.DAO.UserDao;
import com.example.Service.ProjectDetailService;
import com.example.Entity.Project;
import com.example.Entity.UserDTOProjectDetail;


@Service
public class ProjectDetailServiceImpl implements ProjectDetailService{
	@Autowired
	private ProjectDetailDao projectdetaildao;
	@Autowired
	private ProjectDao projectdao;
	@Autowired
	private UserDao userdao;
	@Autowired
	private LogTimeSheetDao logtimesheetdao;
//	@Autowired
//	private JpaRepository<Project, Long> repo;
//	
	@Override
	public String getProjectNumber() {
		int result = projectdao.findAll().size();
		char a = '"';
		return "{"+ a+"number"+a+":"+result+"}";
	}
	@Override
	public String getLogTimeSheetNumber() {
		int result = logtimesheetdao.findAll().size();
		char a = '"';
		return "{"+ a+"number"+a+":"+result+"}";
	}
	@Override
	public String getUserNumber() {
		int result = userdao.findAll().size();
		char a = '"';
		return "{"+ a+"number"+a+":"+result+"}";
	}
	@Override
	public List<UserDTOProjectDetail> findPM() {
		return projectdetaildao.findPM();
	}
	
}
