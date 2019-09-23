/*
package com.insurance.order.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

*/
/**
 *文件上传
 *//*

@Service
public class FastDFSService {
    @Value("${xuecheng.fastdfs.tracker_servers}")
    String tracker_servers;
    @Value("${xuecheng.fastdfs.connect_timeout_in_seconds}")
    int connect_timeout_in_seconds;
    @Value("${xuecheng.fastdfs.network_timeout_in_seconds}")
    int network_timeout_in_seconds;
    @Value("${xuecheng.fastdfs.charset}")
    String charset;

    */
/**
     * 文件上传
     * @param multipartFile 上传图片
     * @return 保存路径
     *//*

    public String upload(MultipartFile multipartFile) {
        if(multipartFile == null){
            System.out.println("照片为空!");
        }
        StorageClient1 storageClient1 = storageClient1();
        try {
            //上传文件
            //得到文件字节
            byte[] bytes = multipartFile.getBytes();
            //得到文件原始名称
            String originalFilename = multipartFile.getOriginalFilename();
            //得到文件扩展名
            String ext = originalFilename.substring(originalFilename.lastIndexOf(".") + 1);
            //返回图片id(储存路径)
            String fileId = storageClient1.upload_file1(bytes, ext, null);
            return fileId;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    */
/**
     * 删除图片(或文件文件)
     * @param storagePath 文件储存地址
     * @return -1失败,0成功
     *//*

    public Integer delete_file(String storagePath){
        if(storagePath == null){
            System.out.println("地址为空!");
        }
        StorageClient1 storageClient1 = storageClient1();
        int result=-1;
        try {
            result = storageClient1.delete_file1(storagePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    */
/**
     * 初始化fastDFS环境并创建storageClient
     * @return
     *//*

    private StorageClient1 storageClient1(){
        try {
            //初始化fastDFS的环境
            initFdfsConfig();
            TrackerClient trackerClient = new TrackerClient();
            TrackerServer trackerServer = trackerClient.getConnection();
            //得到storeStorage服务器
            StorageServer storeStorage = trackerClient.getStoreStorage(trackerServer);

            //创建storageClient来上传文件
            StorageClient1 storageClient1 = new StorageClient1(trackerServer,storeStorage);
            return storageClient1;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    //初始化fastDFS环境
    private void initFdfsConfig(){
        try {
            ClientGlobal.initByTrackers(tracker_servers);
            ClientGlobal.setG_charset(charset);
            ClientGlobal.setG_network_timeout(network_timeout_in_seconds);
            ClientGlobal.setG_connect_timeout(connect_timeout_in_seconds);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
*/
