/*
package com.insurance.order.controller;

import com.insurance.api.order.FastDFSControllerApi;
import com.insurance.order.service.FastDFSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

*/
/**
 * 文件上传
 *//*

@RestController
@RequestMapping("/FastDFS")
public class FastDFSController implements FastDFSControllerApi {

    @Autowired
    FastDFSService fastDFSService;

    */
/**
     * 添加图片
     * 1.获取从页面提交图片
     * 2.初始化FastDFS文件系统的配置信息
     * 3.得到storeStorage服务器
     * 4.创建storageClient来上传文件
     * 5.把图片上传至FastDFS系统
     * @param multipartFile
     * @return 文件上传地址
     *//*

    @PostMapping(value = "/uploadPictures")
    public Map upload(@RequestPart(value = "multipartFile") MultipartFile multipartFile){
        Map<String,Object> map = new HashMap<>();
        if(multipartFile == null){
            map.put("code",1);
            map.put("hint","图片为空,重新选择图片");
            return map;
        }
        String fileId = fastDFSService.upload(multipartFile);
        if(fileId == null){
            map.put("code",1);
            map.put("hint","上传失败,点击提交图片按钮继续上传");
            return map;
        }
        map.put("code",0);
        map.put("src",fileId);
        map.put("message","提交成功");
        System.out.println(map);
        return map;
    }
}
*/
