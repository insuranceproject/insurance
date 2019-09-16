package com.insurance.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
@Mapper
public interface UserMapper extends BaseMapper<User> {


    @Select("<script>SELECT * FROM `insurance_user` where user_password = #{userPassword} and " +
            "<if test=' userEmail != null '> user_email = #{userEmail} </if>  "
            + " <if test='userPhonenumber !=null '> user_phonenumber = #{userPhonenumber} </if> "
            + " <if test='userName !=null '> user_name = #{userName} </if> </script>")
    public User getUser(User user);


    /**
     * 用户显示分页+模糊姓名查询
     * @param map
     * @return
     */
    @Select({"<script>",
            "SELECT * FROM insurance_user",
            "where 1=1 ",
            "<if test=\"user_name!=null and user_name!=''\">and user_name like  concat('%',#{user_name},'%')",
            "</if>",
            "</script>"})
    public List<User> selectUserPage(Map<String, Object> map);


    /**
     * 根据id查询用户
     * @param userId
     * @return
     */
    @Select("select*from insurance_authentication where user_id=#{userId}")
    public Authentication selectAuth(int userId);



}
