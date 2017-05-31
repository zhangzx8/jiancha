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
import com.zhangzx.common.PageModel;
import com.zhangzx.common.ReturnCode;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;
import com.zhangzx.model.News;
import com.zhangzx.service.LiuYanService;
import com.zhangzx.service.NewsService;


@Controller
@RequestMapping(value = "/news")
public class NewsController extends JsonController{
	
	@Resource
	private NewsService newsService;
	
	@RequestMapping(value = "/admin/add", method = {RequestMethod.POST,RequestMethod.GET})
	public String list(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		return "admin-news-add";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/ajax/add", method = {RequestMethod.POST})
	public ReturnCode add(News news,HttpServletRequest request,HttpServletResponse response)
			throws JsonGenerationException, JsonMappingException, IOException {
		
		newsService.save(news);
		return new ReturnCode(0,"success");
	}
	
	@RequestMapping(value = "/list", method = {RequestMethod.POST,RequestMethod.GET})
	public String list(@Valid News news,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		PageModel page = newsService.queryPage(news);
		modelMap.addAttribute("page", page);
		return "admin-liuyan";
	}
	
	@RequestMapping(value = "/get", method = {RequestMethod.POST,RequestMethod.GET})
	public String get(@Valid News news,HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		News newsRes = newsService.getById(news.getId());
		modelMap.addAttribute("news", newsRes);
		return "news-detail";
	}
}
