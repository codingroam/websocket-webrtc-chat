package com.acme.chat.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;
import com.alibaba.druid.pool.DruidDataSource;
/**
 * 配置数据源，指定mapper包的扫描路径和SessionFactory对象
 */
@Configuration
@MapperScan(value = "boot.spring.mapper",sqlSessionFactoryRef = "sqlSessionFactory")
public class MyDataSource {

    @Value("${spring.datasource.ssm.url}")
    private String url;

    @Value("${spring.datasource.ssm.username}")
    private String username;

    @Value("${spring.datasource.ssm.password}")
    private String password;

    @Value("${spring.datasource.ssm.driver-class-name}")
    private String driverClassName;

    @Bean
    public DataSource dataSource() {
    	DruidDataSource datasource = new DruidDataSource();
        datasource.setUrl(url);
        datasource.setUsername(username);
        datasource.setPassword(password);
        datasource.setDriverClassName(driverClassName);
        return datasource;
    }
    
    @Bean
    public SqlSessionFactory sqlSessionFactory( ) throws Exception {
    	// 设置mapper的xml文件路径
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource());
        Resource[] resources = new PathMatchingResourcePatternResolver()
                .getResources("classpath:mapper/*.xml");
        factoryBean.setMapperLocations(resources);
        // 设置mybatis-config.xml的路径
        Resource config = new PathMatchingResourcePatternResolver()
                .getResource("classpath:mybatis-config.xml");
        factoryBean.setConfigLocation(config);
        return factoryBean.getObject();
    }

    @Bean
    public DataSourceTransactionManager primaryTransactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }

    
    @Bean
    public SqlSessionTemplate sqlSessionTemplate() throws Exception {
    	// 使用上面配置的Factory
        SqlSessionTemplate template = new SqlSessionTemplate(sqlSessionFactory()); 
        return template;
    }
    
    
    
}
