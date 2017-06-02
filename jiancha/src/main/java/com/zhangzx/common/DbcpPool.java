package com.zhangzx.common;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.dbcp.BasicDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DbcpPool {
	private static DbcpPool instance = null;
	private final static Logger logger = LoggerFactory
			.getLogger(DbcpPool.class);
	private BasicDataSource dataSource = null;
	private int maxActive = 200;// 最大连接数量
	private int maxIdle = 20;// 最大空闲连接
	private int minIdle = 20;// 最小空闲连接
	private int maxWait = 1000;// 超时等待时间以毫秒为单位 1000等于60秒
	private int initialSize = 10;// 初始化连接
	private boolean removeAbandoned = true;// 是否自动回收超时连接
	private int removeAbandonedTimeout = 120;// 超时时间(以秒数为单位)
	private boolean testOnBorrow = true;
	private boolean logAbandoned = true;// 是否在自动回收超时连接的时候打印连接的超时错误

	private DbcpPool() {
	}

	/**
	 * 获得实例
	 * @return
	 */
	public synchronized static DbcpPool getInstance() {
		if (instance == null) {
			instance = new DbcpPool();
			instance.initPools();
		}
		return instance;
	}

	/**
	 * 初始化连接池
	 */
	public void initPools() {
		logger.info("start init connection pools");
		try {
			dataSource = new BasicDataSource();
			dataSource.setDriverClassName("com.mysql.jdbc.Driver");
			dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&serverTimezone=UTC");
			dataSource.setUsername("root");
			dataSource.setPassword("123");
			
//			dataSource.setUrl("jdbc:oracle:thin:@10.1.253.236:1521:ORA11G");
//			dataSource.setUsername("msm_tcls");
//			dataSource.setPassword("msm_tcls");

			dataSource.setMaxActive(this.maxActive);// 最大连接数量
			dataSource.setMaxIdle(this.maxIdle);// 最大空闲连接
			dataSource.setMinIdle(this.minIdle);// 最小空闲连接
			dataSource.setMaxWait(this.maxWait);// 超时等待时间以毫秒为单位 1000等于60秒
			dataSource.setInitialSize(this.initialSize);// 初始化连接
			dataSource.setRemoveAbandoned(this.removeAbandoned);
			dataSource.setRemoveAbandonedTimeout(this.removeAbandonedTimeout);
			dataSource.setTestOnBorrow(this.testOnBorrow);
			dataSource.setLogAbandoned(this.logAbandoned);
			logger.info("end init connection pools");
		} catch (Exception e) {
			logger.error("init error", e);
		}
	}

	/**
	 * 从数据源获得一个连接
	 * @return
	 */
	public Connection getConn() {
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error("getConn error", e);
		}
		return conn;
	}

	/**
	 * 获得数据源连接状态
	 * 
	 * @return
	 */
	public Map<String, Integer> getDataSourceStats() {
		Map<String, Integer> map = new HashMap<String, Integer>(2);
		map.put("active_number", dataSource.getNumActive());
		map.put("idle_number", dataSource.getNumIdle());
		return map;
	}

	/**
	 * 关闭数据源
	 * 
	 * @throws SQLException
	 */
	protected void shutdownDataSource() throws SQLException {
		try {
			dataSource.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.error("shutdownDataSource error", e);
		}

	}

	/**
	 * 关闭执行查询操作的连接
	 * 
	 * @param resultSet
	 * @param statement
	 * @param connection
	 */
	public void closeConnection(ResultSet resultSet, Statement statement,
			Connection connection) {
		try {
			if (resultSet != null) {
				resultSet.close();
				resultSet = null;
			}
			if (statement != null) {
				statement.close();
				statement = null;
			}
			if (connection != null) {
				connection.close();
				connection = null;
			}
		} catch (SQLException e) {
			logger.error("closeConnection error", e);
		}
	}
}