package com.insurance.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.CorpMapper;
import com.insurance.pojo.Corp;
import com.insurance.service.CorpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
@Service
@Transactional
public class CorpServiceImpl extends ServiceImpl<CorpMapper, Corp> implements CorpService {

    @Autowired
    private CorpMapper corpMapper;

}
