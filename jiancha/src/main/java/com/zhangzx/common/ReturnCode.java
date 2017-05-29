package com.zhangzx.common;

import java.io.Serializable;

public class ReturnCode implements Serializable {
	
	private int code;
	private String msg;
	private Object data;
	
	
	public ReturnCode(int code, Object data) {
		this.code = code;
		this.data = data;
	}
	public ReturnCode(int code, String msg) {
		super();
		this.code = code;
		this.msg = msg;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	

}
