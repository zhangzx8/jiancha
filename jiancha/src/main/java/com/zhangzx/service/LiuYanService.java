package com.zhangzx.service;

import com.zhangzx.common.PageModel;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;

public interface LiuYanService {
	
	public void save(LiuYan liuYan);
	
	
	public PageModel queryPage(LiuYan liuyan);
	
	public LiuYan getById(Integer id);

}
