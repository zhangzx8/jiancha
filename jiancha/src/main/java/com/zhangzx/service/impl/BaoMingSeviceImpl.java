package com.zhangzx.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.zhangzx.common.ExcelUtil;
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
	
	
	public void export(HttpServletResponse response) throws IOException{
		
		List<String> headers = new ArrayList<String>();
		headers.add("姓名");
		headers.add("性别");
		headers.add("出生日期");
		headers.add("年龄");
		headers.add("身份证号");
		headers.add("民族");
		headers.add("政治面貌");
		headers.add("应聘岗位");
		headers.add("联系方式");
		headers.add("全日制本科毕业院校及时间");
		headers.add("专业");
		headers.add("全日制硕士毕业院校及时间");
		headers.add("专业及方向");
		headers.add("全日制博士毕业院校及时间");
		headers.add("专业及方向");
		headers.add("审核状态");
		String[] title = headers.toArray(new String[headers.size()]);
		List<Object[]> listAll = new ArrayList<Object[]>();
		List<Object> listCell = null;

		//List<Map<String,Object>> list = priceMonitorDao.queryForMapDownLoad(p_province, p_month);
		List<BaoMing> listBaoMing =  baoMingDao.getAll();
		for(BaoMing baoMing : listBaoMing){
			listCell = new ArrayList<Object>();
			listCell.add(baoMing.getUserName());
			if("1".equals(baoMing.getSex())){
				listCell.add("男");
			}else{
				listCell.add("女");
			}
			listCell.add(baoMing.getBirthDay());
			listCell.add(baoMing.getAge());
			listCell.add(baoMing.getIdCart());
			listCell.add(baoMing.getMz());
			listCell.add(baoMing.getZzmm());
			listCell.add(baoMing.getYpgw());
			listCell.add(baoMing.getPhone());
			listCell.add(baoMing.getSchool());
			listCell.add(baoMing.getMajor());
			listCell.add(baoMing.getSchool2());
			listCell.add(baoMing.getMajor2());
			listCell.add(baoMing.getSchool3());
			listCell.add(baoMing.getMajor3());
			if(1==baoMing.getStatus()){
				listCell.add("审核中");
			}else{
				listCell.add("已审核");
			}

			listAll.add(listCell.toArray());
		}
		
		response.setHeader("Content-Disposition", "attachment;filename=\""+ new String("报名列表".getBytes( "utf-8" ), "ISO8859-1" )+ ".xls");
		// 设定输出文件头
		response.setContentType("application/vnd.ms-excel;charset=UTF-8");
		ExcelUtil.writeExcel(response.getOutputStream(), listAll, title);
		
	}
}
