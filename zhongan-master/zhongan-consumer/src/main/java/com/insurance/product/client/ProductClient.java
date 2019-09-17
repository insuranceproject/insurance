package com.insurance.product.client;

import com.insurance.pojo.Childtype;
import com.insurance.pojo.Partype;
import com.insurance.pojo.Plan;
import com.insurance.pojo.Product;
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
}
