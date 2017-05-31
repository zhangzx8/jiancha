package com.zhangzx.service;

import java.util.List;

import com.zhangzx.common.PageModel;
import com.zhangzx.model.News;

public interface NewsService {
	
	public PageModel queryPage(News news);
	public News getById(Integer id);
	public List<News> getBy(News news);
	public void save(News news);

}
