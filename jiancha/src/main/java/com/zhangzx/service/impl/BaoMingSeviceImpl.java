package com.zhangzx.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.zhangzx.common.PageModel;
import com.zhangzx.dao.BaoMingDao;
import com.zhangzx.model.BaoMing;
import com.zhangzx.service.BaoMingSevice;

@Service("baoMingSevice")
public class BaoMingSeviceImpl implements BaoMingSevice {
	@Resource
	private BaoMingDao baoMingDao;

	@Override
	public void save(BaoMing baoMing,String path) throws IOException {
		Long time = System.currentTimeMillis();
		String pic = this.saveFileFromInputStream(baoMing.getPic(), path);
		String picImg = this.saveFileFromInputStream(baoMing.getPicimg(), path);
		String picImg1 = this.saveFileFromInputStream(baoMing.getPicimg1(), path);
		String picImg2 = this.saveFileFromInputStream(baoMing.getPicimg2(), path);
		String picImg3 = this.saveFileFromInputStream(baoMing.getPicimg3(), path);
		String picImg4 = this.saveFileFromInputStream(baoMing.getPicimg4(), path);
		baoMing.setPicStr(pic);
		baoMing.setPicimgStr(picImg);
		baoMing.setPicimg1Str(picImg1);
		baoMing.setPicimg2Sr(picImg2);
		baoMing.setPicimg3Str(picImg3);
		baoMing.setPicimg4Str(picImg4);
		baoMing.setCreateTime(time);
		baoMing.setUpdateTime(time);
		baoMingDao.save(baoMing);
	}

	
	
	public String saveFileFromInputStream(MultipartFile multipartFile, String path) throws IOException {
		if(multipartFile == null || multipartFile.isEmpty()){
			return "";
		}
		String fileName =File.separator +"resource"+ File.separator+"upload"+ File.separator + System.currentTimeMillis()+multipartFile.getOriginalFilename();
		path = path+fileName;
		FileOutputStream fs = new FileOutputStream(path);
		byte[] buffer = new byte[1024 * 1024];
		int bytesum = 0;
		int byteread = 0;
		InputStream stream = multipartFile.getInputStream();
		while ((byteread = stream.read(buffer)) != -1) {
			bytesum += byteread;
			fs.write(buffer, 0, byteread);
			fs.flush();
		}
		fs.close();
		stream.close();
		return fileName;
	}
	
	
	public List<BaoMing> getStatus(BaoMing baoMing){
		List<BaoMing> list =  baoMingDao.getBy(baoMing.getUserName(),baoMing.getPhone());
		return list;
	}
	
	

	
	
	public List<BaoMing> getList(BaoMing baoMing,int pageNo,int pageSize){
		List<BaoMing> list = new ArrayList<>();
		if(baoMing == null){
			return list;
		}
		List<Object> listParam = new ArrayList<Object>();
		StringBuilder builder = new StringBuilder();
		builder.append("select * from bao_ming where 1=1");
		if(StringUtils.isEmpty(baoMing.getUserName())){
			builder.append(" and user_name=?");
			listParam.add(baoMing.getUserName());
		}
		if(baoMing.getStartTime() != null){
			builder.append(" and create_time >= ?");
			listParam.add(baoMing.getStartTime());
		}
		if(baoMing.getEndTime() != null){
			builder.append(" and create_time <= ?");
			listParam.add(baoMing.getEndTime());
		}
		builder.append(" limit ").append((pageNo-1)*pageSize).append(" ").append(pageSize);
		return baoMingDao.getList(builder.toString(), listParam.toArray());
		
	}
	
	
	public int getCount(BaoMing baoMing){
		List<Object> listParam = new ArrayList<Object>();
		StringBuilder builder = new StringBuilder();
		builder.append("select * from bao_ming where 1=1");
		if(StringUtils.isEmpty(baoMing.getUserName())){
			builder.append(" and user_name=?");
			listParam.add(baoMing.getUserName());
		}
		if(baoMing.getStartTime() != null){
			builder.append(" and create_time >= ?");
			listParam.add(baoMing.getStartTime());
		}
		if(baoMing.getEndTime() != null){
			builder.append(" and create_time <= ?");
			listParam.add(baoMing.getEndTime());
		}
		return baoMingDao.getCount(builder.toString(), listParam.toArray());
	}
	
	
	
	public PageModel queryPage(BaoMing baoMing){
		
		
		return baoMingDao.queryPage(baoMing);
	}
	
	public void updateStatus(String[] ids){
		for(String id : ids){
			baoMingDao.updateStatus(Integer.parseInt(id));
		}
		
	}
	
	public BaoMing getById(int id){
		return baoMingDao.getById(id);
	}
}
