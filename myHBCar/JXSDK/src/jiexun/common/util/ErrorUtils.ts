/**
 * 错误工具封装
 * @author: sen
 * @date: 2020/04/10 10:08:38
 */
export default class ErrorUtils {
    public static throwNormalError($msg: string) {
        throw new Error($msg);
    }

    public static throwNot2BeNull($test: any, $name: string) {
        if ($test === null || $test === undefined) {
            this.throwNormalError(`${$name} is supposed to be valid!!!`)
        }
    }
}