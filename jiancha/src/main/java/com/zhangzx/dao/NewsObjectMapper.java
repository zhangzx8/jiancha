package com.zhangzx.dao;

import java.sql.ResultSet;

import com.zhangzx.common.DateUtil;
import com.zhangzx.common.ObjectMapper;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;
import com.zhangzx.model.News;

public class NewsObjectMapper implements ObjectMapper {

	@Override
	public Object mapping(ResultSet rs) {
		News news = new News();
		try{
			news.setId(rs.getInt("id"));
			news.setContent(rs.getString("content"));
			news.setCreateTime(rs.getLong("create_time"));
			news.setUpdateTime(rs.getLong("update_time"));
			news.setTitle(rs.getString("title"));
			news.setType(rs.getString("type"));
			if(news.getCreateTime()!=null && news.getCreateTime() !=0){
				news.setCreateTimeStr(DateUtil.long2date(news.getCreateTime(), "yyyy-MM-dd"));
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return news;
	}
}
