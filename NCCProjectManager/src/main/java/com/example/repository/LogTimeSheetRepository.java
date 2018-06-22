package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Entity.LogTimeSheet;


public interface LogTimeSheetRepository extends JpaRepository<LogTimeSheet, Integer>{

}
