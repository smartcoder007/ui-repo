package com.angular.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;


@SpringBootApplication
public class Application extends SpringBootServletInitializer {

	public static void main(String args[]){
		SpringApplication.run(Application.class, args);
	}
	
	@Override
	public SpringApplicationBuilder configure(SpringApplicationBuilder builder){
		return builder.sources(applicationClass);
	}
	
	private static Class<Application> applicationClass = Application.class;
}
