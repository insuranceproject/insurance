package com.insurance.product.client;

import com.insurance.pojo.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient("PROVIDER-PRODUCT")
public interface ProductClient {
    @GetMapping("/type/findAll")
    public List<Partype> findAll();

    @GetMapping("/childType/findByParId")
    public List<Childtype> findChildByParId(@RequestParam("parId") Integer parId);

    @GetMapping("/product/findByParId")
    public List<Product> findByParId(@RequestParam("parId") Integer parId);

    @GetMapping("/product/findByChildId")
    public List<Product> findByChildId(@RequestParam("childId") Integer childId);

    @GetMapping("/product/findByProId")
    public Product findByProId(@RequestParam("proId") Integer proId);

    @GetMapping("/product/findInfomation")
    public Product findInfomation(@RequestParam("proId") Integer proId);

    @GetMapping("/plan/getByProId")
    public List<Plan> getByProId(@RequestParam("proId") Integer proId);

    @GetMapping("/plan/getPlanPrice")
    public List<Plan> getPlanPrice(@RequestParam("proId") Integer proId, @RequestParam("modelPrice") Integer modelPrice);

    @GetMapping("/plan/getPlanById")
    public Plan getPlanById(@RequestParam("planId") Integer planId);

    @GetMapping("/uav/getBrandByPurId")
    public List<Uavbrand> getBrandByPurId(@RequestParam("purId") Integer purId);

    @GetMapping("/uav/getModelByPurId")
    public List<Uavmodel> getModelByPurId(@RequestParam("purId") Integer purId, @RequestParam("brandId") Integer brandId);

    @GetMapping("/uav/findById")
    public Purpose findById(@RequestParam("purId") Integer purId);

    @GetMapping("/cert/listCertByProId")
    public List<Certificates> listCertByProId(@RequestParam("proId") Integer proId);

    @GetMapping("/uav/getModelById")
    public Uavmodel getModelById(@RequestParam("modelId") Integer modelId);

    @GetMapping("/uav/getBrandById")
    public Uavbrand getBrandById(@RequestParam("brandId") Integer brandId);
}
