package com.zhangzx.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;
import com.zhangzx.common.OpDao;
import com.zhangzx.common.PageModel;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;



@Repository
public class LiuYanDao {
	
	private static OpDao opDao = new OpDao();
	
	public List<BaoMing> getList(String sql,Object[] obj) {
        return (List<BaoMing>) opDao
				.query(sql, obj, new BaoMingObjectMapper());
	}
	
	public int getCount(String sql,Object[] obj) {
        return opDao.count(sql, obj);
	}
	
	
	public PageModel queryPage(LiuYan liuyan) {
		List<Object> listParam = new ArrayList<Object>();
		Integer pageeNo = (liuyan.getPageNo() == null) ? 1 : liuyan.getPageNo(); 
		Integer pageSize = (liuyan.getPageSize() == null) ? 10 : liuyan.getPageSize();
		StringBuffer buffer1 = new StringBuffer();
		buffer1.append("SELECT * FROM liuyan order by create_time desc");
		buffer1.append(" limit ").append((pageeNo-1)*pageSize).append(",").append(pageSize);
		
		StringBuffer buffer2 = new StringBuffer();
		buffer2.append("SELECT count(1) FROM liuyan");
		
		int i = opDao.count(buffer2.toString(), listParam.toArray());
		
		List<LiuYan> list = (List<LiuYan>) opDao.query(buffer1.toString(), listParam.toArray(),
				new LiuYanObjectMapper());
		PageModel pagemodel = new PageModel();
		pagemodel.setPageNo(pageeNo);
		pagemodel.setPageSize(pageSize);
		pagemodel.setList(list);
		pagemodel.setTotalRecords(i);
		return pagemodel;
	}
	
	
	public LiuYan getById(Integer id){
		List<Object> listParam = new ArrayList<Object>();
		String sql = "select * from liuyan where id = ?";
		listParam.add(id);
		return (LiuYan) opDao.find(sql, listParam.toArray(), new LiuYanObjectMapper());
	}

}
