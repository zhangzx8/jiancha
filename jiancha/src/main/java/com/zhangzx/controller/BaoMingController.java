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

import com.zhangzx.common.ReturnCode;
import com.zhangzx.model.BaoMing;
import com.zhangzx.model.LiuYan;
import com.zhangzx.service.BaoMingSevice;

@Controller
@RequestMapping(value = "/baoming")
public class BaoMingController {
	
	
	@Resource
	private BaoMingSevice baoMingSevice;
	
	@RequestMapping(value = "/add", method = {RequestMethod.POST,RequestMethod.GET})
	public String add(HttpServletRequest request, HttpServletResponse response,ModelMap modelMap) throws Exception {

		//modelMap.addAttribute("parentid", id);
		return "fuzhin";
	}
	
    @RequestMapping(value = "/filesUpload", method = {RequestMethod.POST,RequestMethod.GET})  
    public String filesUpload(@Valid BaoMing baoMing,HttpServletRequest request,HttpServletResponse response) { 
    	System.out.println(baoMing.getUserName());
		String path = request.getRealPath("/");
		try {
			baoMingSevice.save(baoMing, path);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "fail"; 
		}
        return "success";  
    }  
    
    
	@RequestMapping(value = "/getStatus", method = {RequestMethod.POST})
	public String getStatus(HttpServletRequest request,HttpServletResponse response,@Valid BaoMing baoMing,ModelMap modelMap)
			throws JsonGenerationException, JsonMappingException, IOException {
		
		List<BaoMing> list = baoMingSevice.getStatus(baoMing);
		modelMap.addAttribute("list", list);
		return "chaxunbaoming";
	}

}
