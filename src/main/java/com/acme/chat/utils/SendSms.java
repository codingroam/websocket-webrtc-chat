package com.acme.chat.utils;


import com.alibaba.fastjson.JSONObject;
import com.aliyun.dysmsapi20170525.models.SendSmsRequest;
import com.aliyun.dysmsapi20170525.models.SendSmsResponse;
import com.aliyun.teaopenapi.models.Config;

public class SendSms {
    public static com.aliyun.dysmsapi20170525.Client createClient(String accessKeyId, String accessKeySecret) throws Exception {
        Config config = new Config()
                // 您的AccessKey ID
                .setAccessKeyId(accessKeyId)
                // 您的AccessKey Secret
                .setAccessKeySecret(accessKeySecret);
        // 访问的域名
        config.endpoint = "dysmsapi.aliyuncs.com";
        return new com.aliyun.dysmsapi20170525.Client(config);
    }

    public static JSONObject send(String phone, String code)  {
        JSONObject jsonObject = new JSONObject();
        SendSmsResponse sendSmsResponse = null;
        try{
            com.aliyun.dysmsapi20170525.Client client = SendSms.createClient("LTAI5tHFsUnyi1kYRA1gQ2Au", "Ww7ehcLeYkvGVDKajafNkD3YFFB6W4");
            SendSmsRequest sendSmsRequest = new SendSmsRequest()
                    .setPhoneNumbers(phone) // 手机号
                    .setSignName("飞鱼") // 短信签名名称
                    .setTemplateCode("SMS_288140486") // 短信模板CODE
                    .setTemplateParam(code+""); // 验证码
            sendSmsResponse = client.sendSms(sendSmsRequest);
            jsonObject.put("Code", sendSmsResponse.getBody().getCode());
            jsonObject.put("Message", sendSmsResponse.getBody().getMessage());
            return jsonObject;

        }catch(Exception e){
            e.printStackTrace();
            jsonObject.put("Message", sendSmsResponse.getBody().getMessage());
        }
        return jsonObject;

    }
}
