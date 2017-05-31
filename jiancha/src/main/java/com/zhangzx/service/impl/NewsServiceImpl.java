package com.zhangzx.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.zhangzx.common.PageModel;
import com.zhangzx.dao.NewsDao;
import com.zhangzx.model.News;
import com.zhangzx.service.NewsService;

@Service("newsService")
public class NewsServiceImpl implements NewsService {
	
	@Resource
	private NewsDao newsDao;
	
	public PageModel queryPage(News news){
		return newsDao.queryPage(news);
	}
	
	
	public News getById(Integer id){
		return newsDao.getById(id);
	}
	
	
	public List<News> getBy(News news){
		return newsDao.getBy(news);
	}
	
	public void save(News news){
		newsDao.save(news);
	}

}
