package com.zhangzx.model;

import java.io.Serializable;

public class LiuYan  implements Serializable{
	
	private Integer id;
	private String userName;
	private String phone;
	private String email;
	private String title;
	private String content;
	private Integer pageNo;
	private Integer pageSize;
	private String huifuContent;
	private Long createTime;
	private Long updateTime;
	private String createTimeeStr;
	private String updateTimeStr;
	
	

	
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
	public String getCreateTimeeStr() {
		return createTimeeStr;
	}
	public void setCreateTimeeStr(String createTimeeStr) {
		this.createTimeeStr = createTimeeStr;
	}
	public String getUpdateTimeStr() {
		return updateTimeStr;
	}
	public void setUpdateTimeStr(String updateTimeStr) {
		this.updateTimeStr = updateTimeStr;
	}
	public String getHuifuContent() {
		return huifuContent;
	}
	public void setHuifuContent(String huifuContent) {
		this.huifuContent = huifuContent;
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
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	
	

}
