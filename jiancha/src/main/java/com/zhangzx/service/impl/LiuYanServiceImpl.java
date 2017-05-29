package com.zhangzx.service.impl;

import org.springframework.stereotype.Service;

import com.zhangzx.common.OpDao;
import com.zhangzx.model.LiuYan;
import com.zhangzx.service.LiuYanService;

@Service("liuYanService")
public class LiuYanServiceImpl implements LiuYanService {
	private static OpDao opDao = new OpDao();

	@Override
	public void save(LiuYan liuYan) {
		String addsql = " insert into liuyan(name,email,title,conent,phone) values(?,?,?,?,?) ";
		Object[] obj = { liuYan.getUserName(),
				liuYan.getEmail(), liuYan.getTitle(),
				liuYan.getContent(),liuYan.getPhone()};
		opDao.update(addsql, obj, false);
		
	}

}
