/**
 * 数学工具类
 * @author: hs.lin
 * @date: 2020/07/03 09:56:02
 */
export default class MathUtils {

    public static readonly DEGREE_2_RADIAN_FACTOR = Math.PI / 180;

    /**
     * 是否两值之间
     * @param $t 
     * @param $v1 
     * @param $v2 
     * @param $includeEqual 
     */
    public static isBetween($t: number, $v1: number, $v2: number, $includeEqual = false): boolean {
        if ($includeEqual) {
            return $t >= Math.min($v1, $v2) && $t <= Math.max($v1, $v2);
        } else {
            return $t > Math.min($v1, $v2) && $t < Math.max($v1, $v2);
        }
    }

    /** 返回大小组合 */
    public static minMax($v1: number, $v2: number): { min: number, max: number } {
        return { min: Math.min($v1, $v2), max: Math.max($v1, $v2) };
    }

    /** 依据范围取值 */
    public static calValueBetween($t: number, $min: number, $max: number): number {
        const { min, max } = this.minMax($min, $max);
        return Math.max(Math.min(max, $t), min);
    }

    /**
     * 范围内随机，不包含 $max
     * @param $min 
     * @param $max 
     */
    public static randomBetween($min: number, $max: number): number {
        const { min, max } = this.minMax($min, $max);
        return min + Math.random() * (max - min);
    }

    /** 计算直角三角形斜边长度 */
    public static calLen($x: number, $y: number): number {
        return Math.sqrt($x * $x + $y * $y);
    }

    /** as3时常用的缓动公式，需要每一帧调用 */
    public static easeTo($cur: number, $to: number, $easeFactor: number): number {
        return $cur + ($to - $cur) * $easeFactor;
    }

    /** 数字相等 */
    public static isEqual($a: number, $b: number, $threshold = 0.000000001): boolean {
        return Math.abs($a - $b) < $threshold;
    }

    /** 修复欧拉旋转角度，保证范围[0,360) */
    public static fixRotationDegree($degree: number): number {
        if ($degree < 0) {
            $degree += 360 * (Math.abs(Math.ceil($degree / 360)) + 1);
        }
        return $degree % 360;
    }


    /** 计算旋转角度，返回值范围[0,360) */
    public static calRotation($myX: number, $myY: number, $targetX: number, $targetY: number) {
        const deltaX = $targetX - $myX;
        const deltaY = $targetY - $myY;
        return this.calRotationByDelta(deltaX, deltaY);
    }


    /** 是否在三维盒子中，注意盒子中心点在底部中心 */
    public static isInBox($testX: number, $testY: number, $testZ: number, $boxX: number, $boxY: number, $boxZ: number, $boxLongZ: number, $boxWidthX: number, $boxHeightY: number) {
        return this.isBetween($testY, $boxY, $boxY + $boxHeightY) &&
            this.isBetween($testX, $boxX - $boxWidthX * .5, $boxX + $boxWidthX * .5) &&
            this.isBetween($testZ, $boxZ - $boxLongZ * .5, $boxZ + $boxLongZ * .5);
    }


    /** 计算旋转角度，返回值范围[0,360) */
    public static calRotationByDelta($deltaX: number, $deltaY: number) {
        let result = 0;
        if (!$deltaX) {
            result = ($deltaY > 0 ? 1 : -1) * 90;
        } else {
            result = Math.atan($deltaY / $deltaX) * 180 / Math.PI;
            if ($deltaX < 0) {
                result = result - 180;
            }
        }
        return this.fixRotationDegree(result);
    }
}