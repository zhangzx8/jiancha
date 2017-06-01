package com.zhangzx.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

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


}
