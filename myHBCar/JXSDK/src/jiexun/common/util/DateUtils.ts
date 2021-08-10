/**
 * 日期工具类
 * @author: hs.lin
 * @date: 2020/07/23 18:05:12
 */
export default class DateUtils {
    /** 毫秒转换为秒字符串，保留两位小数 */
    public static toSecondStr($ms: number) {
        return ($ms / 1000).toFixed(2);
    }

    /**
     * 格式化日期
     * @param $pattern 参考如下
     * - 标准日期格式：yyyy-MM-dd
     * - 标准时间格式：hh:mm:ss
     * - 标准日期时间格式，精确到分：yyyy-MM-dd HH:mm
     * - 标准日期时间格式，精确到秒：yyyy-MM-dd HH:mm:ss
     * - 标准日期时间格式，精确到毫秒：yyyy-MM-dd HH:mm:ss.SSS
     * - 标准日期格式：yyyy年MM月dd日
     * - 标准日期格式：yyyyMMdd
     * - 标准日期格式：HHmmss
     * - 标准日期格式：yyyyMMddHHmmss
     * - 标准日期格式：yyyyMMddHHmmssSSS
    * @param $date 不传则用当前日期
    */
    public static getDateString($pattern = "yyyy-MM-dd HH:mm:ss", $date?: Date): string {
        $date = $date || new Date();
        const o = {
            "M+": $date.getMonth() + 1,                 //月份
            "d+": $date.getDate(),                    //日
            "H+": $date.getHours(),                   //小时
            "h+": $date.getHours(),                   //小时
            "m+": $date.getMinutes(),                 //分
            "s+": $date.getSeconds(),                 //秒
            "q+": Math.floor(($date.getMonth() + 3) / 3), //季度
            "S": $date.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test($pattern)) {
            $pattern = $pattern.replace(RegExp.$1, ($date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (const k in o) {
            if (new RegExp("(" + k + ")").test($pattern)) {
                $pattern = $pattern.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return $pattern;
    }
}