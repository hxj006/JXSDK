import MathUtils from "./MathUtils";

/**
 * 字符串的工具类
 * @author: hs.lin
 * @date: 2020/08/03 17:01:47
 */
export default class StringUtils {

    /**
     * 对比两个版本字符串。格式(1.2.3.4等)。
     * @param $ver1 
     * @param $ver2 
     * @returns 1：大于。0：等于。-1：小于
     */
    public static compareVersion($ver1: string, $ver2: string): 1 | 0 | -1 {
        const v1: string[] = $ver1.split(".");
        const v2: string[] = $ver2.split(".");
        const max = Math.max(v1.length, v2.length);
        for (let i = 0; i < max; i++) {
            const vs1 = parseInt(v1[i]) || 0;
            const vs2 = parseInt(v2[i]) || 0;
            if (vs1 > vs2) {
                return 1;
            } else if (vs1 < vs2) {
                return -1;
            }
        }
        return 0;
    }


    /** 
     * 裁剪字符串。
     * truncate("hello world", 10)//"hello worl..."。
     * truncate("hello world", 10, "...", 1)//"hello worl..."。
     * truncate("hello world", 10, "...", 0)//"...ello world"。
     * truncate("hello world", 10, "...", 0.2)//"he...lo world"。
     * truncate("hello world", 10, "...", 0.4)//"hell... world"。
     * truncate("hello world", 10, "...", 0.6)//"hello ...orld"。
     * truncate("hello world", 10, "...", 0.8)//"hello wo...ld"。
     */
    public static truncate($str: string, $maxLen: number, $strEllipsis = "...", $nRatio = 1): string {
        const strLen = $str.length;
        if (strLen < $maxLen) return $str;
        const subLen = $maxLen - $strEllipsis.length;
        if (subLen === 0) {
            return $strEllipsis;
        } else if (subLen < 0) {
            $strEllipsis = "";
        }
        $nRatio = MathUtils.calValueBetween($nRatio, 0, 1);
        const strs: string[] = [];
        let chunkLen = Math.round($maxLen * $nRatio);
        strs.push($str.substr(0, chunkLen));
        chunkLen = strLen - ($maxLen - chunkLen);
        strs.push($str.substr(chunkLen));
        return strs.join($strEllipsis);
    }
}