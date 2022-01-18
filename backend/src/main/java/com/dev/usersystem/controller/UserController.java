package com.dev.usersystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.usersystem.model.User;
import com.dev.usersystem.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/users")
	public ResponseEntity<?> getAllUsers(){
		List<User> getUsers = userRepo.findAll();
		if(getUsers.size() > 0) {
			return new ResponseEntity<List<User>>(getUsers, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("No users available!", HttpStatus.NOT_FOUND);
		}
	}
}