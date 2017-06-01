package com.zhangzx.dao;

import java.sql.ResultSet;

import com.zhangzx.common.DateUtil;
import com.zhangzx.common.ObjectMapper;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;

public class BaoMingObjectMapper implements ObjectMapper {


	@Override
	public Object mapping(ResultSet rs) {
		BaoMing baoMing = new BaoMing();
		try{
			
			baoMing.setId(rs.getInt("id"));
			baoMing.setUserName(rs.getString("user_name"));
			baoMing.setSex(rs.getString("sex"));
			baoMing.setBirthDay(rs.getString("birthday"));
			baoMing.setAge(rs.getString("age"));
			baoMing.setIdCart(rs.getString("id_chart"));
			baoMing.setMz(rs.getString("mz"));
			baoMing.setZzmm(rs.getString("zzmm"));
			baoMing.setJg(rs.getString("jg"));
			baoMing.setYpgw(rs.getString("ypgw"));
			baoMing.setPhone(rs.getString("phone"));
			baoMing.setSchool(rs.getString("school"));
			baoMing.setMajor(rs.getString("major"));
			baoMing.setSchool2(rs.getString("school2"));
			baoMing.setMajor2(rs.getString("major2"));
			baoMing.setSchool3(rs.getString("school3"));
			baoMing.setMajor3(rs.getString("major3"));
			baoMing.setPicStr(rs.getString("picimg"));
			baoMing.setPicimg1Str(rs.getString("picimg1"));
			baoMing.setPicimg2Sr(rs.getString("picimg2"));
			baoMing.setPicimg3Str(rs.getString("picimg3"));
			baoMing.setPicimg4Str(rs.getString("picimg4"));
			baoMing.setStatus(rs.getInt("status"));
			baoMing.setCreateTime(rs.getLong("create_time"));
			if(baoMing.getCreateTime() != null && baoMing.getCreateTime() != 0){
				baoMing.setCreateTimeStr(DateUtil.long2date(baoMing.getCreateTime(), "yyyy-MM-dd HH:mm:ss"));
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return baoMing;
	}


}
