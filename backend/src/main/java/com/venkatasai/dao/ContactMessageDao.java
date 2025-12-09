package com.venkatasai.dao;
import com.venkatasai.ContactMessage;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ContactMessageDao {

    private static final String INSERT_SQL =
            "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";

    public boolean save(ContactMessage msg) {
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement ps = conn.prepareStatement(INSERT_SQL)) {

            ps.setString(1, msg.getName());
            ps.setString(2, msg.getEmail());
            ps.setString(3, msg.getMessage());
   
            int rows = ps.executeUpdate();
            return rows > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}