package com.venkatasai.servlet;

import com.venkatasai.dao.ContactMessageDao;
import com.venkatasai.ContactMessage;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/api/contact")
public class ContactServlet extends HttpServlet {

    private final ContactMessageDao contactMessageDao = new ContactMessageDao();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String message = request.getParameter("message");

        ContactMessage contact = new ContactMessage(name, email, message);
        boolean ok = contactMessageDao.save(contact);

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        if (ok) {
            out.write("{\"status\":\"ok\"}");
        } else {
            out.write("{\"status\":\"error\"}");
        }
        out.flush();
    }
}
