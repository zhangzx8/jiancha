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
import com.zhangzx.service.LiuYanService;

@Controller
@RequestMapping(value = "/admin/liuyan")
public class AdminLiuyanController {
	
	@Resource
	private LiuYanService liuYanService;
	
	
	@RequestMapping(value = "/list", method = {RequestMethod.POST,RequestMethod.GET})
	public String index(@Valid LiuYan liuYan,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		PageModel page = liuYanService.queryPage(liuYan);
		modelMap.addAttribute("page", page);
		return "admin-liuyan";
	}
	
	
	@RequestMapping(value = "/get", method = {RequestMethod.POST,RequestMethod.GET})
	public String get(@Valid LiuYan liuYan,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		LiuYan liuy = liuYanService.getById(liuYan.getId());
		modelMap.addAttribute("liuy", liuy);
		return "admin-liuyan-edit";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/huifu", method = {RequestMethod.POST,RequestMethod.GET})
	public ReturnCode shenhe(@Valid LiuYan liuYan,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		liuYanService.save(liuYan);
		return new ReturnCode(0,"success");
	}


}
