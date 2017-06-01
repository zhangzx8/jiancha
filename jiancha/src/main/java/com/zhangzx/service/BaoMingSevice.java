package com.zhangzx.service;

import java.io.IOException;
import java.util.List;

import com.zhangzx.common.PageModel;
import com.zhangzx.model.BaoMing;

public interface BaoMingSevice {
	
	public void save(BaoMing baoMing,String path) throws IOException;
	
	public List<BaoMing> getStatus(BaoMing baoMing);
	
	public List<BaoMing> getList(BaoMing baoMing,int pageNo,int pageSize);
	
	public int getCount(BaoMing baoMing);
	
	public PageModel queryPage(BaoMing baoMing);
	
	public void updateStatus(String[] ids);
	
	public BaoMing getById(int id);

}
