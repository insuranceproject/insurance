package com.insurance.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface UserMapper extends BaseMapper<User> {
    /**
     * 用户显示分页+模糊姓名查询
     * @param page
     * @param userName
     * @return
     */
    public IPage<User> selectPageVo(Page page, String userName);

   /* @Select("<script>SELECT * FROM `insurance_user` where user_password = #{userPassword} and " +
            "<if test=' userEmail != null '> user_email = #{userEmail} </if>  "
            + " <if test='userPhonenumber !=null '> user_phonenumber = #{userPhonenumber} </if> "
            + " <if test='userName !=null '> user_name = #{userName} </if> </script>")*/

    /**
     * 普通登陆
     * @param user
     * @return
     */
    @Select("<script>SELECT * FROM `insurance_user` where user_password = #{userPassword} and " +
            "<if test=' userEmail != null '> user_email = #{userEmail} </if>  "
            + " <if test='userPhonenumber !=null '> user_phonenumber = #{userPhonenumber} </if> "
            + " <if test='userName !=null '> user_name = #{userName} </if> </script>")
   public User getUser(User user);

    /**
     * 根据用户id查询用户实名信息
     * @param userId
     * @return
     */
    @Select("SELECT * FROM insurance_authentication where user_id = #{userId} ")
    public Authentication getUserAuthentication(Integer userId);
    
}
