package com.zhangzx.common;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	
	public static String long2date(long datelong, String format) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		Date date = new Date();
		date.setTime(datelong);
		return sdf.format(date);
	}

}
