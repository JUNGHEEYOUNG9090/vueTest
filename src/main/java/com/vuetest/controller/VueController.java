package com.vuetest.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vuetest.dto.LoginDTO;

@RestController
public class VueController {
	@PostMapping("/login")
    public String test(@RequestBody LoginDTO login ) {   	
        System.out.println("id = " + login.getId());
        System.out.println("password = " + login.getPassword());
        return "Hello World";
    }
}