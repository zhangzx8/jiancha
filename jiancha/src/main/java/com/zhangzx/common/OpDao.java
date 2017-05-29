package com.zhangzx.common;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OpDao {
	private DbcpPool dbcp = DbcpPool.getInstance();
	private final static Logger logger = LoggerFactory
			.getLogger(OpDao.class);
	public Object find(String sql, Object[] obj, ObjectMapper mapper) {
		Object o = null;
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = dbcp.getConn();
			pstmt = conn.prepareStatement(sql);
			for (int i = 0; i < obj.length; i++) {
				pstmt.setObject(i + 1, obj[i]==null?"":obj[i]);
				rs = pstmt.executeQuery();
				if (rs.next()) {
					o = mapper.mapping(rs);
				}
			}
		} catch (Exception ex) {
			logger.error(ex.getMessage(), ex);
		} finally {
			dbcp.closeConnection(rs, pstmt, conn);
		}
		return o;
	}

	
	public int count(String sql, Object[] obj) {
		int o = 0;
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = dbcp.getConn();
			pstmt = conn.prepareStatement(sql);
			for (int i = 0; i < obj.length; i++) {
				pstmt.setObject(i + 1, obj[i]==null?"":obj[i]);
			}
			rs = pstmt.executeQuery();
			if (rs.next()) {
				o = rs.getInt(1);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.error(ex.getMessage(), ex);
		} finally {
			dbcp.closeConnection(rs, pstmt, conn);
		}
		return o;
	}
	
	public List<? extends Object> query(String sql, Object[] obj,
			ObjectMapper mapper) {
		Object o = null;
		List<Object> list = new ArrayList<Object>();
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = dbcp.getConn();
			pstmt = conn.prepareStatement(sql);
			for (int i = 0; i < obj.length; i++) {
				pstmt.setObject(i + 1, obj[i]==null?"":obj[i]);
			}
			rs = pstmt.executeQuery();

			while (rs.next()) {
				o = mapper.mapping(rs);
				list.add(o);
			}

		} catch (SQLException ex) {
			logger.error(ex.getMessage(), ex);
		} finally {
			dbcp.closeConnection(rs, pstmt, conn);
		}
		return list;
	}

	public boolean update(String sql, Object[] obj, boolean isGenerateKey) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		boolean bFlag = false;
		try {
			conn = dbcp.getConn();
			pstmt = isGenerateKey ? conn.prepareStatement(sql,
					Statement.RETURN_GENERATED_KEYS) : conn
					.prepareStatement(sql);
			for (int i = 0; i < obj.length; i++) {
				pstmt.setObject(i + 1, obj[i]==null?"":obj[i]);
			}
			conn.setAutoCommit(false);
			int i = pstmt.executeUpdate();
			conn.commit();
			if (i > 0)
				bFlag = true;
		} catch (SQLException ex) {
			logger.error(ex.getMessage(), ex);
		} finally {
			dbcp.closeConnection(null, pstmt, conn);
		}
		return bFlag;
	}

}
