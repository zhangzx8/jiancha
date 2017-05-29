package com.zhangzx.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
	
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

		//modelMap.addAttribute("parentid", id);
		return "news";
	}
	
	@RequestMapping(value = "/chaxun", method = {RequestMethod.POST,RequestMethod.GET})
	public String chaxun(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
		return "fuwu";
	}
	
	@RequestMapping(value = "/xinwen", method = {RequestMethod.POST,RequestMethod.GET})
	public String xinwen(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
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
