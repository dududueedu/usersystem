package com.dev.usersystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UsersystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsersystemApplication.class, args);
		System.out.println("*** Running api ***");
	}
}