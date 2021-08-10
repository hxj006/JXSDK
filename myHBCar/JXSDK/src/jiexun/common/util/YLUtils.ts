/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 
 * @author: hs.lin
 * @date: 2020/10/31 11:25:20
 */
export default class YLUtils {

    /** 修复unity地图编辑器输出的数据坐标系和laya的不一样，方法归纳：by 叶方琪，位置x轴取反，旋转y和z轴取反 */
    public static fixYLEditorPosZ($jsonObj: any, $propDic: { [key: string]: boolean } = { "pos": true, "rot": true }) {
        if (typeof ($jsonObj) === "object") {
            for (const key in $jsonObj) {
                const value = $jsonObj[key];
                if (typeof (key) === "string" && $propDic[key] && typeof (value) === "object") {
                    if (key === "pos" && typeof (value["x"]) === "number") {
                        value["x"] = -value["x"];
                    } else if (key === "rot") {
                        if (typeof (value["y"]) === "number") {
                            value["y"] = - value["y"];
                        } else if (typeof (value["z"]) === "number") {
                            value["z"] = - value["z"];
                        }
                    }
                } else {
                    this.fixYLEditorPosZ(value, $propDic);
                }
            }
        }
    }
}