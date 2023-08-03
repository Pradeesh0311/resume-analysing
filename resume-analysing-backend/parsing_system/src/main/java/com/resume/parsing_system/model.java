package com.resume.parsing_system;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;



import java.io.IOException;

@WebServlet(name = "Servletmodel", value = "/Servletmodel")
public class model extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest  request,HttpServletRequest  response) throws ServletException, IOException {

    }

}