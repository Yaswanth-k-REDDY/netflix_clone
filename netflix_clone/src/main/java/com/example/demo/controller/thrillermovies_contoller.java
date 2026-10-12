package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.thrillermovies;
import com.example.demo.service.thrillermovies_service;
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1")
public class thrillermovies_contoller {
	@Autowired
thrillermovies_service service;
	@GetMapping("/thrillermoviesdata")
	public List<thrillermovies> getthrillermoviesservicedata(){
		return service.getthrillermoviesservicedata();
	}
}
