/**
 * 异步工具
 * @author: hs.lin
 * @date: 2020/07/01 18:42:41
 */
export default class AsyncUtils {
    /** 休眠 */
    public static sleep($ms: number): Promise<void> {
        return new Promise<void>(($resolved) => {
            Laya.timer.once($ms, undefined, $resolved);
        });
    }
}