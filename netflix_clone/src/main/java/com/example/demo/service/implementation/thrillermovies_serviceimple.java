package com.example.demo.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.thrillermovies;
import com.example.demo.repository.thrillermovies_repository;
import com.example.demo.service.thrillermovies_service;
@Service
public class thrillermovies_serviceimple implements thrillermovies_service {
	@Autowired
	thrillermovies_repository repo;
	public thrillermovies_serviceimple() {
		// TODO Auto-generated constructor stub
	}


	@Override
	public List<thrillermovies> getthrillermoviesservicedata() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

}
