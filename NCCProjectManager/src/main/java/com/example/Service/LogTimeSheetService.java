package com.example.Service;

import java.util.List;

import com.example.Entity.LogTimeSheet;
import com.example.Model.ProjectLogTimeSheetDTO;

public interface LogTimeSheetService {

	public List<LogTimeSheet> findAll();
	public List<LogTimeSheet> findLogTimeSheetByUserId(int user_id);
	public List<LogTimeSheet> findLogTimeSheetByUserIdAndProjectId(int userId, int projectId);
	public LogTimeSheet findLogTimeSheetById(int id);
	public LogTimeSheet createLogTimeSheet(LogTimeSheet logTimeSheet) throws Exception;
	public String updatelogTimeSheet(LogTimeSheet logTimeSheet);
	public String deleteLogTimeSheet(int id);
	public ProjectLogTimeSheetDTO findLogTimeSheetByProjectIdWithListUser(int project_id);
}
