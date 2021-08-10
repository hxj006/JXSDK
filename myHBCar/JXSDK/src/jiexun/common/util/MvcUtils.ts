/* eslint-disable @typescript-eslint/no-explicit-any */

import AbstractModel from "../abstract/mvc/AbstractModel";

/**
 * mvc工具类
 * @author: sen
 * @date: 2020/04/10 16:10:32
 */
export default class MvcUtils {
    /**
     * 显示对象的visible与model中的某个属性进行绑定
     * @param $displayObj 显示对象
     * @param $model 
     * @param $prop model中的属性
     * @param $isVisibleReverse 是否为不相等时才显示
     * @param $specifiedValue model中的属性与指定值进行比较
     * @param $specifiedCaller 一般不用传，该值是希望用$model.offAllCaller可以传$displayObj进行清空绑定而已
     */
    public static bindVisible<M extends AbstractModel<M>>($displayObj: Laya.Sprite, $model: M, $prop: keyof M, $isVisibleReverse = false, $specifiedValue: unknown = undefined, $specifiedCaller: unknown = undefined) {
        $specifiedCaller = $specifiedCaller || $displayObj;//注意这里caller是用$displayObj，并不是希望this为$displayObj（因为回调onChanged没有也不能，使用this）而是希望$model.offAllCaller可以传$displayObj进行清空绑定
        const onChanged = () => {
            let isVisible = !!$model[$prop];
            if ($specifiedValue !== undefined) {
                isVisible = $model[$prop] === $specifiedValue;
            }
            if ($isVisibleReverse) {
                isVisible = !isVisible;
            }
            $displayObj.visible = isVisible;
        };
        $model.on($prop as any, onChanged, $specifiedCaller, true);
    }

    /**
     * 函数监听的封装
     * @param $model 
     * @param $event 
     * @param $handler 
     * @param $caller 
     */
    public static bindFunctionNCall<M extends AbstractModel<M>>($model: M, $event: keyof M, $handler: ($value: unknown) => void, $caller: unknown) {
        $model.on($event as any, $handler, $caller);
        $handler.call($caller);
    }
}