package com.zhangzx.dao;

import java.sql.ResultSet;

import com.zhangzx.common.ObjectMapper;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;

public class LiuYanObjectMapper implements ObjectMapper {

	@Override
	public Object mapping(ResultSet rs) {
		LiuYan liuYna = new LiuYan();
		try{
			liuYna.setId(rs.getInt("id"));
			liuYna.setUserName(rs.getString("name"));
			liuYna.setEmail(rs.getString("email"));
			liuYna.setTitle(rs.getString("title"));
			liuYna.setPhone(rs.getString("phone"));
			liuYna.setContent(rs.getString("conent"));
		}catch(Exception e){
			e.printStackTrace();
		}
		return liuYna;
	}
}
