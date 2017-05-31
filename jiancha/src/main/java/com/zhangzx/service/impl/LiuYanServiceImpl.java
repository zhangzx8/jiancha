package com.zhangzx.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.zhangzx.common.OpDao;
import com.zhangzx.common.PageModel;
import com.zhangzx.dao.LiuYanDao;
import com.zhangzx.model.LiuYan;
import com.zhangzx.service.LiuYanService;

@Service("liuYanService")
public class LiuYanServiceImpl implements LiuYanService {
	private static OpDao opDao = new OpDao();
	@Resource
	private LiuYanDao liuYanDao;
	

	@Override
	public void save(LiuYan liuYan) {
		Long time = System.currentTimeMillis();
		String addsql = " insert into liuyan(name,email,title,conent,phone,create_time,update_time,huifu_content) values(?,?,?,?,?,?,?,?) ";
		Object[] obj = { liuYan.getUserName(),
				liuYan.getEmail(), liuYan.getTitle(),
				liuYan.getContent(),liuYan.getPhone(),time,time,liuYan.getHuifuContent()};
		opDao.update(addsql, obj, false);
		
	}

	@Override
	public PageModel queryPage(LiuYan liuyan) {
		PageModel page = liuYanDao.queryPage(liuyan);
		return page;
	}
	
	
	public LiuYan getById(Integer id){
		return liuYanDao.getById(id);
	}

}
