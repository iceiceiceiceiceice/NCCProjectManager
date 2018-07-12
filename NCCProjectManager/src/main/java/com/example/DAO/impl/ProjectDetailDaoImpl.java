package com.example.DAO.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.DAO.LogTimeSheetDao;
import com.example.DAO.ProjectDao;
import com.example.DAO.ProjectDetailDao;
import com.example.DAO.UserDao;
import com.example.DAO.relationDao;
import com.example.Entity.LogTimeSheet;
import com.example.Entity.Project;
import com.example.Entity.Relation;
import com.example.Entity.RelationPK;
import com.example.Entity.User;
import com.example.Entity.UserDTOProjectDetail;
import com.example.Entity.UserInfo;
import com.example.Model.UserJoinMultiProjectDTO;


@Repository

public class ProjectDetailDaoImpl implements ProjectDetailDao {


	@PersistenceContext
    private EntityManager entityManager;
	@Autowired
	private UserDao userdao;
	@Autowired
	private LogTimeSheetDao logtimesheetdao;
	@Autowired
	private relationDao relationdao;
	@Autowired
	private ProjectDao projectdao;
	
	@SuppressWarnings("unchecked")
	public List<Project> getProjectDetail(int project_id){
		//Session session = factory.openSession();
		String hql = "SELECT p FROM Project p WHERE p.id = "+project_id;
		Query<Project> query = (Query<Project>) entityManager.createQuery(hql);
		List<Project> result =  query.list();
	
		return result;
	}

	
	@SuppressWarnings("unchecked")
	public List<UserDTOProjectDetail> findByProjectID(int project_id) {
		Query<Relation> query = (Query<Relation>) entityManager.createQuery("SELECT r FROM Relation r WHERE r.id.projectId = "+project_id);
		List<Relation> rela = query.list();
		if(rela.isEmpty()) return null;
		else {
			Query<UserDTOProjectDetail> query2 = (Query<UserDTOProjectDetail>) entityManager.createQuery("SELECT u FROM UserDTOProjectDetail u WHERE u.id = "+ rela.get(0).getuser_id());
			List<UserDTOProjectDetail> userlist = query2.list();
			if(rela.size()<2) return userlist;
			else {
				for(int i = 1;i<rela.size();i++) {
					query2 = (Query<UserDTOProjectDetail>) entityManager.createQuery("SELECT u FROM UserDTOProjectDetail u WHERE u.id = "+ rela.get(i).getuser_id());
					userlist.addAll(query2.list());
				}
				return userlist;
			}
		}
	}

	
	@SuppressWarnings("unchecked")
	public List<UserInfo> getPM(){
		//char a='"';
		String qr = "select ui from UserInfo ui where ui.job='PM'";
		Query<UserInfo> queryInfo =  (Query<UserInfo>) entityManager.createQuery(qr);
		List<UserInfo> info = queryInfo.list();
		return info;
	}
	@Override
	public List<UserDTOProjectDetail> findPM() {
		// 
		List<UserInfo> info = this.getPM();
		if(info.isEmpty())	return null;
		else {
			List<User> users = new ArrayList<User>();
			for(int i =0;i<info.size();i++) {
				users.add(userdao.findById(info.get(i).getUserId()));
			}
			List<UserDTOProjectDetail> userdetail = new ArrayList<UserDTOProjectDetail>();
			for(int i =0;i<users.size();i++) {
				userdetail.add(new UserDTOProjectDetail(users.get(i).getId(),users.get(i).getUsername()));
			}
			return userdetail;
		}
	}
	@Override
	public int getNumberOfHourInProject(int project_id) {
		List<LogTimeSheet> listlog = logtimesheetdao.findAll();
		int numberofhourinproject = 0;
		for(int i =0; i <listlog.size();i++) {
			if(listlog.get(i).getProject_id()==project_id) {
				numberofhourinproject+=listlog.get(i).getHours();
			}
		}
		return numberofhourinproject;
	}
	@Override
	public List<UserJoinMultiProjectDTO> getmultiuser(){
		List<Integer> listrela =  relationdao.findmultiprojectuser();
		if(listrela.isEmpty()) return null;
		else {
//			ArrayList arr = new ArrayList();
//			for(int i = 0; i < listrela.size();i++) {
//				List<Relation> rela_i = relationdao.findByUserId(listrela.get(i).intValue());
//				int count_run_project = 0 ;
//				for(int j = 0 ; j < rela_i.size();j++) {
//					if(projectdao.findById(rela_i.get(j).getId().getProjectId()).getStatus().matches("running")) count_run_project++;
//				}
//				if(count_run_project<2) listrela.remove(i);
//				else {
//					arr.add(count_run_project);
//				}
//			}
//			if(listrela.isEmpty()) {
//				return null;
//			}
//			else {
//				List<User> users = new ArrayList<User>();
//				for(int i =0 ;i < listrela.size();i++) {
//					users.add(userdao.findById(listrela.get(i).intValue()));
//				}
//				List<UserDTOProjectDetail> listuser = new ArrayList<UserDTOProjectDetail>();
//				for(int i =0 ; i < users.size();i++) {
//					listuser.add(new UserDTOProjectDetail(users.get(i).getId(),users.get(i).getUsername()));
//				}
//				List<UserJoinMultiProjectDTO> lastresult = new ArrayList<UserJoinMultiProjectDTO>();
//				for(int i =0 ; i < users.size();i++) {
//					lastresult.add(new UserJoinMultiProjectDTO(listuser.get(i), (int) arr.get(i)));
//				}
//				return lastresult;
//			}
			List<UserJoinMultiProjectDTO> result = new ArrayList<UserJoinMultiProjectDTO>();
			for(int i = 0; i < listrela.size();i++) {
				List<Relation> rela_i = relationdao.findByUserId(listrela.get(i).intValue());
				int count_run_project = 0 ;
				for(int j = 0 ; j < rela_i.size();j++) {
					if(projectdao.findById(rela_i.get(j).getId().getProjectId())!=null) count_run_project ++;
				}
				User user = userdao.findById(listrela.get(i).intValue());
				UserDTOProjectDetail userDTO = new UserDTOProjectDetail(user.getId(),user.getUsername());
				UserJoinMultiProjectDTO user_i = new UserJoinMultiProjectDTO(userDTO,count_run_project);
				result.add(user_i);
			}
			return result;
		}
	}



}
