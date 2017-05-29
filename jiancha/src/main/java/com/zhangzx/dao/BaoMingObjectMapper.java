package com.zhangzx.dao;

import java.sql.ResultSet;

import com.zhangzx.common.ObjectMapper;
import com.zhangzx.model.BaoMing;

public class BaoMingObjectMapper implements ObjectMapper {

	@Override
	public Object mapping(ResultSet rs) {
		BaoMing baoMing = new BaoMing();
		try{
			baoMing.setAge(rs.getString("age"));
			baoMing.setId(rs.getInt("id"));
			baoMing.setUserName(rs.getString("user_name"));
			baoMing.setSex(rs.getString("sex"));
			baoMing.setStatus(rs.getInt("status"));
		}catch(Exception e){
			e.printStackTrace();
		}
		return baoMing;
	}

}
