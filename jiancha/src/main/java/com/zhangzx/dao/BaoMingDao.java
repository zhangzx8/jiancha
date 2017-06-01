package com.zhangzx.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;
import com.zhangzx.common.OpDao;
import com.zhangzx.common.PageModel;
import com.zhangzx.model.BaoMing;



@Repository
public class BaoMingDao {
	
	private static OpDao opDao = new OpDao();
	
	public boolean save(BaoMing baoMing) {
		String addsql = " insert into bao_ming(user_name,sex,pic,birthday,age,id_chart,mz,zzmm,jg,ypgw,phone,school,major,school2,major2,school3,major3,picimg,picimg1,picimg2,picimg3,picimg4,create_time,update_time) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
		Object[] obj = { baoMing.getUserName(),
				baoMing.getSex(), baoMing.getPicStr(),
				baoMing.getBirthDay(), baoMing.getAge(),
				baoMing.getIdCart(), baoMing.getMz(),
				baoMing.getZzmm(), baoMing.getJg(),
				baoMing.getYpgw(),baoMing.getPhone(),
				baoMing.getSchool(), baoMing.getMajor(),
				baoMing.getSchool2(),baoMing.getMajor2(),
				baoMing.getSchool3(), baoMing.getMajor3(),
				baoMing.getPicimgStr(),baoMing.getPicimg1Str(),
				baoMing.getPicimg2Sr(), baoMing.getPicimg3Str(),
				baoMing.getPicimg4Str(),baoMing.getCreateTime(),baoMing.getUpdateTime() };
		return opDao.update(addsql, obj, false);
	}
	
	
	
	public List<BaoMing> getBy(String userName,String phone) {
		String sql = "select * from bao_ming where user_name = ? or phone = ?";
		Object[] obj = {userName,phone};
		return (List<BaoMing>) opDao
				.query(sql, obj, new BaoMingObjectMapper());
	}
	
	
	public List<BaoMing> getList(String sql,Object[] obj) {
        return (List<BaoMing>) opDao
				.query(sql, obj, new BaoMingObjectMapper());
	}
	
	public int getCount(String sql,Object[] obj) {
        return opDao.count(sql, obj);
	}
	
	
	public PageModel queryPage(BaoMing baoMing) {
		List<Object> listParam = new ArrayList<Object>();
		StringBuilder builder1 = new StringBuilder();
		builder1.append("select * from bao_ming where 1=1 order by create_time desc");
		StringBuilder builder2 = new StringBuilder();
		builder2.append("select count(1) from bao_ming where 1=1");
		
		StringBuilder builder3 = new StringBuilder();
		if(!StringUtils.isEmpty(baoMing.getUserName())){
			builder3.append(" and user_name=?");
			listParam.add(baoMing.getUserName());
		}
		if(baoMing.getStartTime() != null){
			builder3.append(" and create_time >= ?");
			listParam.add(baoMing.getStartTime());
		}
		if(baoMing.getStatus() != null && baoMing.getStatus() != 0){
			builder3.append(" and status = ?");
			listParam.add(baoMing.getStatus());
		}
		
		
		Integer pageeNo = (baoMing.getPageNo() == null) ? 1 : baoMing.getPageNo(); 
		Integer pageSize = (baoMing.getPageSize() == null) ? 10 : baoMing.getPageSize();
		StringBuilder builder4 = new StringBuilder();
		builder4.append(" limit ").append((pageeNo-1)*pageSize).append(",").append(pageSize);
		String countSql = builder2.append(builder3).toString();
		String querySql = builder1.append(builder3).append(builder4).toString();
		int i = opDao.count(countSql, listParam.toArray());
		List<BaoMing> list = (List<BaoMing>) opDao.query(querySql, listParam.toArray(),
				new BaoMingObjectMapper());
		PageModel pagemodel = new PageModel();
		pagemodel.setPageNo(pageeNo);
		pagemodel.setPageSize(pageSize);
		pagemodel.setList(list);
		pagemodel.setTotalRecords(i);
		return pagemodel;
	}
	
	
	public void updateStatus(int ids) {
		String sql = "update bao_ming set status=2 where id = ?";
		opDao.update(sql, new Object[]{ids}, false);
	}
	
	public BaoMing getById(int id){
		List<Object> listParam = new ArrayList<Object>();
		listParam.add(id);
		String sql = "select * from bao_ming where id = ?";
		return (BaoMing) opDao.find(sql, listParam.toArray(), new BaoMingObjectMapper());
	}

}
