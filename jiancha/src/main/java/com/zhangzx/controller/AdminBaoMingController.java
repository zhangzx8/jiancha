package com.zhangzx.controller;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.apache.commons.lang.StringUtils;
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
import org.springframework.web.multipart.MultipartFile;

import com.zhangzx.common.BaseResult;
import com.zhangzx.common.BeanJsonUtil;
import com.zhangzx.common.DataResult;
import com.zhangzx.common.PageModel;
import com.zhangzx.common.ReturnCode;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;
import com.zhangzx.service.BaoMingSevice;

@Controller
@RequestMapping(value = "/admin")
public class AdminBaoMingController {
	
	@Resource
	private BaoMingSevice baoMingSevice;
	
	
	@RequestMapping(value = "/index", method = {RequestMethod.POST,RequestMethod.GET})
	public String index(@Valid BaoMing baoMing,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		PageModel page = baoMingSevice.queryPage(baoMing);
		modelMap.addAttribute("page", page);
		return "admin-bm";
	}
	
	
	@RequestMapping(value = "/baoming/get", method = {RequestMethod.POST,RequestMethod.GET})
	public String getById(@Valid BaoMing baoMing,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		//String path = request.getRequestURL().toString();
		//String path2 = request.getRequestURI().toString();
		//String path3 = request.get
		BaoMing baoMingRes = baoMingSevice.getById(baoMing.getId());
		modelMap.addAttribute("baoMing", baoMingRes);
		return "admin-bm-detail";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/shenhe", method = {RequestMethod.POST,RequestMethod.GET})
	public ReturnCode shenhe(@RequestParam(value="id") String ids,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		String[] id = ids.split(",");
		baoMingSevice.updateStatus(id);
		//BaoMing baoMing = new BaoMing();
		//baoMing.
		//PageModel page = baoMingSevice.queryPage(baoMing);
		//modelMap.addAttribute("page", page);
		return new ReturnCode(0,"success");
	}

	@RequestMapping(value = "/exportBaoMing", method = { RequestMethod.POST,
			RequestMethod.GET })
	//@ResponseBody
	public void downPriceMonitor(HttpServletRequest request,HttpServletResponse response)
			throws Exception {
		
		BaseResult br = null;
		try{
			baoMingSevice.export(response);
			br = new DataResult(BaseResult.SUCCESS.getCode(),BaseResult.SUCCESS.getMsg(), null);
		}catch(Exception e){
			e.printStackTrace();
			br = new DataResult(BaseResult.FAILED.getCode(),
					BaseResult.FAILED.getMsg(), "");
		}


		//return new ReturnCode(0,"success");
	}
}
