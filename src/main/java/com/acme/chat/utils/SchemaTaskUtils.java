package com.acme.chat.utils;

import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

/**
 * @Description TODO
 * @Author wangkai
 * @Date 2023/10/4 19:11
 */
public class SchemaTaskUtils {

    /**
     * 定时清理指定map缓存key
     * @param map
     * @param key
     * @param delay
     */
    public static void clearMapKeyByDelay(Map map,String key,Long delay){
        Timer timer = new Timer();
        TimerTask timerTask = new TimerTask(){
            @Override
            public void run() {
                map.remove(key);
            }
        };
        timer.schedule(timerTask, delay, delay);
    }


}
