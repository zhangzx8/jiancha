package com.zhangzx.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhangzx.common.BaseResult;
import com.zhangzx.common.BeanJsonUtil;
import com.zhangzx.common.DataResult;
import com.zhangzx.common.ReturnCode;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;
import com.zhangzx.service.LiuYanService;


@Controller
@RequestMapping(value = "/liuyann")
public class LiuyanController extends JsonController{
	
	@Resource
	private LiuYanService liuYanService;
	
	@ResponseBody
	@RequestMapping(value = "/add", method = {RequestMethod.POST})
	public ReturnCode add(LiuYan liuYan,HttpServletRequest request,HttpServletResponse response)
			throws JsonGenerationException, JsonMappingException, IOException {
		
		
		liuYanService.save(liuYan);
		return new ReturnCode(0,"success");
	}
}
