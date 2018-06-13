package com.meituan;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.io.PrintWriter;
/**
 * Servlet implementation class LoginCheck
 */

public class LoginCheck extends HttpServlet {
	private static final long serialVersionUID = 1L; 
    public LoginCheck() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        String x = request.getParameter("userTel");
        String p = request.getParameter("userPass");
        System.out.println(x);
        System.out.println(p);
        PrintWriter out = response.getWriter();
        JSONArray jsonList = new JSONArray();
        JSONObject jsonChecked = new JSONObject();
        jsonChecked.put("checked","true");
        jsonList.add(jsonChecked);
        out.println(jsonList);
		//request.getRequestDispatcher("/loginFailed.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
