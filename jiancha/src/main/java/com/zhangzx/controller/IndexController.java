package com.zhangzx.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zhangzx.common.PageModel;
import com.zhangzx.model.News;
import com.zhangzx.service.NewsService;

@Controller
public class IndexController {
	@Resource
	private NewsService newsService;
	
	@RequestMapping(value = "/index", method = {RequestMethod.POST,RequestMethod.GET})
	public String add(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
		return "index";
	}
	
	@RequestMapping(value = "/xueyuan", method = {RequestMethod.POST,RequestMethod.GET})
	public String xueyuan(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
		return "gsjj";
	}
	
	
	@RequestMapping(value = "/zhaokao", method = {RequestMethod.POST,RequestMethod.GET})
	public String zhaokao(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		News news = new News();
		news.setType("zhaokao");
		PageModel page = newsService.queryPage(news);
		modelMap.addAttribute("page", page);
		return "news";
	}
	
	@RequestMapping(value = "/chaxun", method = {RequestMethod.POST,RequestMethod.GET})
	public String chaxun(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
		return "fuwu";
	}
	
	@RequestMapping(value = "/xinwen", method = {RequestMethod.POST,RequestMethod.GET})
	public String xinwen(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {
		News news = new News();
		news.setType("xinwen");
		PageModel page = newsService.queryPage(news);
		modelMap.addAttribute("page", page);
		return "zp";
	}

	
	@RequestMapping(value = "/liuyan", method = {RequestMethod.POST,RequestMethod.GET})
	public String liuyan(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
		return "liuy";
	}
	
	@RequestMapping(value = "/lianxiwomen", method = {RequestMethod.POST,RequestMethod.GET})
	public String lianxiwomen(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
		return "lxwm";
	}

}
