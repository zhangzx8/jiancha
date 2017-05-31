package com.zhangzx.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;
import com.zhangzx.common.OpDao;
import com.zhangzx.common.PageModel;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;
import com.zhangzx.model.News;



@Repository
public class NewsDao {
	
	private static OpDao opDao = new OpDao();
	
	
	public void save(News news) {
		Long time = System.currentTimeMillis();
		String addsql = " insert into news(type,title,content,create_time,update_time) values(?,?,?,?,?) ";
		Object[] obj = { news.getType(),
				news.getTitle(),news.getContent(),
				time,time};
		opDao.update(addsql, obj, false);
		
	}
	
	
	public PageModel queryPage(News news) {
		List<Object> listParam = new ArrayList<Object>();
		listParam.add(news.getType());
		Integer pageeNo = (news.getPageNo() == null) ? 1 : news.getPageNo(); 
		Integer pageSize = (news.getPageSize() == null) ? 10 : news.getPageSize();
		StringBuffer buffer1 = new StringBuffer();
		buffer1.append("SELECT * FROM news where type = ? order by create_time desc");
		buffer1.append(" limit ").append((pageeNo-1)*pageSize).append(",").append(pageSize);
		
		StringBuffer buffer2 = new StringBuffer();
		buffer2.append("SELECT count(1) FROM news  where type = ?");
		
		int i = opDao.count(buffer2.toString(), listParam.toArray());
		
		List<News> list = (List<News>) opDao.query(buffer1.toString(), listParam.toArray(),
				new NewsObjectMapper());
		PageModel pagemodel = new PageModel();
		pagemodel.setPageNo(pageeNo);
		pagemodel.setPageSize(pageSize);
		pagemodel.setList(list);
		pagemodel.setTotalRecords(i);
		return pagemodel;
	}
	
	
	public News getById(Integer id){
		List<Object> listParam = new ArrayList<Object>();
		String sql = "select * from news where id = ?";
		listParam.add(id);
		return (News) opDao.find(sql, listParam.toArray(), new NewsObjectMapper());
	}
	
	
	public List<News> getBy(News news) {
		String sql = "select * from bao_ming where type = ? ";
		Object[] obj = {news.getType()};
		return (List<News>) opDao
				.query(sql, obj, new NewsObjectMapper());
	}

}
