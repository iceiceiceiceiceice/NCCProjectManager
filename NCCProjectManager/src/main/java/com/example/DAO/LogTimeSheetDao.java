package com.example.DAO;

import java.util.List;


import com.example.Entity.LogTimeSheet;
import com.example.Model.ProjectLogTimeSheetDTO;


public interface LogTimeSheetDao{

	public List<LogTimeSheet> findAll();
	public ProjectLogTimeSheetDTO findLogTimeSheetByProjectIdWithListUser(int project_id);
}
