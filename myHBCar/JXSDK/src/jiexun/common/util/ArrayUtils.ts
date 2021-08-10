
/**
 * 数组的工具类
 * @author: hs.lin
 * @date: 2020/07/03 10:29:16
 */
export default class ArrayUtils {

    /** 删除数组中重复的元素，此函数会修改传入数组 */
    public static uniq<T>($arr: T[]): T[] {
        const map: Map<T, boolean> = new Map();
        let len = $arr.length;
        for (let i = 0; i < len; i++) {
            const element = $arr[i];
            if (!map.get(element)) {
                map.set(element, true);
            } else {
                $arr.splice(i, 1);
                i--;
                len--;
            }
        }

        return $arr;
    }

    /**
     * 数组中随机取一个元素
     * @param $arr 
     * @param $exclude 不包含的数组
     */
    public static randomOne<T>($arr: T[], $exclude?: T[]): T {
        let len = $arr.length;
        if (!len) return undefined;
        if ($exclude?.length) {
            $arr = $arr.filter($el => $exclude.indexOf($el) !== -1);
            len = $arr.length;
            if (!len) return undefined;
        }
        return $arr[Math.random() * len >> 0];
    }

    /**
     * 打散数组，返回原数组
     * @param $a 
     */
    public static disturb<T>($a: T[]): T[] {
        $a.sort(() => Math.random() - .5);
        return $a;
    }

    /**
     * 创建一个number数组，数组元素为从$from到$to的所有int
     * @param $from 
     * @param $to 
     */
    public static createNumberArrary($from: number, $to: number): number[] {
        const result: number[] = [];
        for (let i = $from; i <= $to; i++) {
            result.push(i);
        }
        return result;
    }

    // /**
    //  * 生成贝塞尔的点
    //  * @param $points 
    //  * @param $outputNum 输出的点数据数量
    //  * @see https://blog.csdn.net/nicepainkiller/article/details/91390452
    //  */
    // public static createBezierPoints($points: PointLike[], $outputNum: number): PointLike[] {
    //     const result: PointLike[] = [];
    //     for (let i = 0; i < $outputNum; i++) {
    //         result.push(this.multiPointBezier($points, i / $outputNum));
    //     }
    //     return result;
    // }

    // private static multiPointBezier($points: PointLike[], $percent: number): PointLike {
    //     const len = $points.length;
    //     let x = 0, y = 0;
    //     for (let i = 0; i < len; i++) {
    //         const point = $points[i];
    //         x += point.x * Math.pow((1 - $percent), (len - 1 - i)) * Math.pow($percent, i) * (this.erxiangshi(len - 1, i));
    //         y += point.y * Math.pow((1 - $percent), (len - 1 - i)) * Math.pow($percent, i) * (this.erxiangshi(len - 1, i));
    //     }
    //     return { x: x, y: y };
    // }


    private static erxiangshi($start: number, $end: number): number {
        let cs = 1, bcs = 1;
        while ($end > 0) {
            cs *= $start;
            bcs *= $end;
            $start--;
            $end--;
        }
        return (cs / bcs);
    }

    /** object的keys */
    public static keys($obj: any): any[] {
        // return Object.keys($obj);
        const result = [];
        for (const key in $obj) {
            result.push(key);
        }

        return result;
    }

    /** obj的values */
    public static values($obj: any): any[] {
        // return Object.values($obj);
        const result = [];
        for (const key in $obj) {
            if (Object.prototype.hasOwnProperty.call($obj, key)) {
                result.push($obj[key]);
            }
        }

        return result;
    }

    /** 
     * 数组中删除元素
     * @returns 返回元素删除前所在索引，不存在则返回-1
     */
    public static remove<T>($arr: T[], $element: T): number {
        const index = $arr.indexOf($element);
        if (index !== -1) {
            $arr.splice(index, 1);
        }
        return index;
    }


    // /**
    //  * 假设parent中有属性item1,item2,item3,...，此方法能返回所有相关item的数组
    //  * @param $parent 
    //  * @param $nameSection 
    //  * @param $beginIndex 
    //  */
    // public static getChildrenByNameSection<CHILD>($parent: any, $nameSection: string, $beginIndex = 1, $filterClass?: INewable<CHILD>, $isGetChildByName = false): CHILD[] {
    //     const result: CHILD[] = [];
    //     // eslint-disable-next-line no-constant-condition
    //     while (true) {
    //         const name = $nameSection + $beginIndex;
    //         const child: CHILD = $isGetChildByName ? $parent.getChildByName(name) : $parent[name];
    //         if (child) {
    //             if (!$filterClass || child instanceof $filterClass) {
    //                 result.push(child);
    //                 $beginIndex++;
    //             }
    //         } else {
    //             break;
    //         }
    //     }
    //     return result;
    // }
}