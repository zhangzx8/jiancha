package com.zhangzx.model;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;

public class BaoMing implements Serializable{
	
	private int id;
	private String userName;
	
	private String sex;
	private MultipartFile pic;
	private String birthDay;
	private String age;
	private String idCart;
	private String mz;
	private String zzmm;
	private String jg;
	private String ypgw;
	private String phone;
	private String school;
	private String major;
	private String school2;
	private String major2;
	private String school3;
	private String major3;
	private MultipartFile picimg;
	private MultipartFile picimg1;
	private MultipartFile picimg2;
	private MultipartFile picimg3;
	private MultipartFile picimg4;
	private String picStr;
	private String picimgStr;
	private String picimg1Str;
	private String picimg2Sr;
	private String picimg3Str;
	private String picimg4Str;
	private Integer status;
	private Long createTime;
	private Long updateTime;
	private Long startTime;
	private Long endTime;
	private Integer pageNo;
	private Integer pageSize;
	private String createTimeStr;
	
	
	
	
	public String getCreateTimeStr() {
		return createTimeStr;
	}
	public void setCreateTimeStr(String createTimeStr) {
		this.createTimeStr = createTimeStr;
	}
	public Integer getPageNo() {
		return pageNo;
	}
	public void setPageNo(Integer pageNo) {
		this.pageNo = pageNo;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Long getStartTime() {
		return startTime;
	}
	public void setStartTime(Long startTime) {
		this.startTime = startTime;
	}
	public Long getEndTime() {
		return endTime;
	}
	public void setEndTime(Long endTime) {
		this.endTime = endTime;
	}
	public Long getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Long createTime) {
		this.createTime = createTime;
	}
	public Long getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Long updateTime) {
		this.updateTime = updateTime;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPicStr() {
		return picStr;
	}
	public void setPicStr(String picStr) {
		this.picStr = picStr;
	}
	public String getPicimgStr() {
		return picimgStr;
	}
	public void setPicimgStr(String picimgStr) {
		this.picimgStr = picimgStr;
	}
	public String getPicimg1Str() {
		return picimg1Str;
	}
	public void setPicimg1Str(String picimg1Str) {
		this.picimg1Str = picimg1Str;
	}
	public String getPicimg2Sr() {
		return picimg2Sr;
	}
	public void setPicimg2Sr(String picimg2Sr) {
		this.picimg2Sr = picimg2Sr;
	}
	public String getPicimg3Str() {
		return picimg3Str;
	}
	public void setPicimg3Str(String picimg3Str) {
		this.picimg3Str = picimg3Str;
	}
	public String getPicimg4Str() {
		return picimg4Str;
	}
	public void setPicimg4Str(String picimg4Str) {
		this.picimg4Str = picimg4Str;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getBirthDay() {
		return birthDay;
	}
	public void setBirthDay(String birthDay) {
		this.birthDay = birthDay;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getIdCart() {
		return idCart;
	}
	public void setIdCart(String idCart) {
		this.idCart = idCart;
	}
	public String getMz() {
		return mz;
	}
	public void setMz(String mz) {
		this.mz = mz;
	}
	public String getZzmm() {
		return zzmm;
	}
	public void setZzmm(String zzmm) {
		this.zzmm = zzmm;
	}
	public String getJg() {
		return jg;
	}
	public void setJg(String jg) {
		this.jg = jg;
	}
	public String getYpgw() {
		return ypgw;
	}
	public void setYpgw(String ypgw) {
		this.ypgw = ypgw;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getSchool2() {
		return school2;
	}
	public void setSchool2(String school2) {
		this.school2 = school2;
	}
	public String getMajor2() {
		return major2;
	}
	public void setMajor2(String major2) {
		this.major2 = major2;
	}
	public String getSchool3() {
		return school3;
	}
	public void setSchool3(String school3) {
		this.school3 = school3;
	}
	public String getMajor3() {
		return major3;
	}
	public void setMajor3(String major3) {
		this.major3 = major3;
	}
	public MultipartFile getPic() {
		return pic;
	}
	public void setPic(MultipartFile pic) {
		this.pic = pic;
	}
	public MultipartFile getPicimg() {
		return picimg;
	}
	public void setPicimg(MultipartFile picimg) {
		this.picimg = picimg;
	}
	public MultipartFile getPicimg1() {
		return picimg1;
	}
	public void setPicimg1(MultipartFile picimg1) {
		this.picimg1 = picimg1;
	}
	public MultipartFile getPicimg2() {
		return picimg2;
	}
	public void setPicimg2(MultipartFile picimg2) {
		this.picimg2 = picimg2;
	}
	public MultipartFile getPicimg3() {
		return picimg3;
	}
	public void setPicimg3(MultipartFile picimg3) {
		this.picimg3 = picimg3;
	}
	public MultipartFile getPicimg4() {
		return picimg4;
	}
	public void setPicimg4(MultipartFile picimg4) {
		this.picimg4 = picimg4;
	}


}
