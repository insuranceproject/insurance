package com.insurance.product.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.pojo.*;
import com.insurance.product.client.ProductClient;
import com.insurance.util.TimeUtil;
import javafx.scene.control.Alert;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sun.security.provider.certpath.CertId;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.*;

@RequestMapping("/consumer/product")
@Controller
public class ProductController{

    @Autowired
   private ProductClient productClient;


    @GetMapping("/findByParId")
    public  @ResponseBody List<Product> findByParId(Integer parId) {
      return productClient.findByParId(parId);
    }

    @GetMapping("/findByChildId")
    public List<Product> findByChildId(Integer childId) {
       return  null;
    }

    @RequestMapping("/{id}")
    public String getProductInfomation(@PathVariable("id") int proId, Model model){
        List<Partype> typeList = productClient.findAll();
        Product productInfo = productClient.findInfomation(proId);
        List<Plan> planList = productClient.getByProId(proId);
        model.addAttribute("typeList",typeList);
        model.addAttribute("product",productInfo);
        model.addAttribute("planList",planList);
        if (proId == 7){
            uavInfo(model,0);
        }
        return "userpervious/product/"+proId;
    };
    @GetMapping("/findModelByBrandId")
    public @ResponseBody List<Uavmodel> findModelByBrandId(int purId,int brandId){
        return productClient.getModelByPurId(purId,brandId);
    }

    @GetMapping("/getPlanPrice")
    public @ResponseBody List<Plan> getPlanPrice(int proId,int modelPrice){
        return productClient.getPlanPrice(proId,modelPrice);
    }

    public void uavInfo(Model model,Integer purId){
         Integer purId2 = 11;
        if (purId != 0){
            purId2 = purId;
        }
        Purpose purpose = productClient.findById(purId2);
        List<Uavbrand> brandList = productClient.getBrandByPurId(purId2);
        model.addAttribute("purpose",purpose);
        model.addAttribute("brandList",brandList);
    }

    @GetMapping("/insure")
    //String productId,Integer planId,Integer brandId,Integer modelId,String price
    public String uavIns(Integer proId,Integer planId,Integer brandId,Integer modelId,Integer price,Integer purId,Model model){
        Product product = productClient.findInfomation(proId);
        List<Plan> planList = productClient.getByProId(proId);
        Purpose purpose = productClient.findById(purId);
        List<Uavbrand> brandList = productClient.getBrandByPurId(purId);
        List<Certificates> certificates = productClient.listCertByProId(proId);
        List<Uavmodel> modelByPurId = productClient.getModelByPurId(purId, brandId);
        model.addAttribute("modelList",modelByPurId);
        model.addAttribute("certList",certificates);
        model.addAttribute("purpose",purpose);
        model.addAttribute("brandList",brandList);
        model.addAttribute("price",price);
        model.addAttribute("product",product);
        model.addAttribute("planList",planList);
        model.addAttribute("planId",planId);
        model.addAttribute("brandId",brandId);
        model.addAttribute("modelId",modelId);
        return "userpervious/product/uavInsure";
    }

    @RequestMapping("/confirm")
    public  String confirm(){return "userpervious/product/uavInsureConfirm";}

    @RequestMapping("/uavconfirm")
    //,Integer proId,Integer planId,Integer brandId,Integer modelId,Integer certId
    public @ResponseBody String uavconfirm(@RequestParam Map<String,String> map,HttpSession session){
        Set<String> keys = map.keySet();
        for (String key:keys) {
            map.put(key,map.get(key).replace("\"",""));
        }
        UavInfo uavInfo = new UavInfo();
        Policyholder policy = new Policyholder();
        String name = null ;
        name = map.get("\"uname");
        if (name == null || name == ""){
            name = map.get("uname");
        }
        policy.setHolderRealname(name);
        policy.setCertId(Integer.parseInt(map.get("certId")));
        policy.setHolderNumber(map.get("certnumber"));
        policy.setHolderPhonenumber(map.get("phone"));
        policy.setHolderEmail(map.get("email"));
        uavInfo.setHolder(policy);
        Insured insured = new Insured();
        insured.setInsuredRealname(map.get("uname"));
        insured.setCertId(Integer.parseInt(map.get("certId")));
        insured.setInsuredNumber(map.get("certnumber"));
        insured.setInsuredPhonenumber(map.get("phone"));
        insured.setInsuredEmail(map.get("email"));
        uavInfo.setInsured(insured);
        Insureduav insureduav = new Insureduav();
        insureduav.setPurposeId(Integer.parseInt(map.get("purId")));
        Uavbrand brand = productClient.getBrandById(Integer.parseInt(map.get("brandId")));
        Uavmodel model = productClient.getModelById(Integer.parseInt(map.get("modelId")));
        insureduav.setUavBrand(brand.getBrandName());
        insureduav.setUavModel(model.getModelName());
        insureduav.setUavNumber(map.get("no"));
        uavInfo.setUav(insureduav);
        Plan plan = productClient.getPlanById(Integer.parseInt(map.get("planId")));
        uavInfo.setPlan(plan);
        TimeUtil time = new TimeUtil();
        Date date = time.getBJTime();
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(date);
        calendar.add(calendar.DATE, 1);
       uavInfo.setStartTime(sf.format(calendar.getTime()));
       calendar.add(calendar.MONTH,plan.getPlanTerm());
       uavInfo.setEndTime(sf.format(calendar.getTime()));
       uavInfo.setPrice(map.get("price").substring(1,map.get("price").length()));
        Product proId = productClient.findInfomation(Integer.parseInt(map.get("proId")));
        uavInfo.setProduct(proId);
        uavInfo.setCertName(map.get("certname"));
        session.setAttribute("uavinfo",uavInfo);
        return "Y";
    }

}

