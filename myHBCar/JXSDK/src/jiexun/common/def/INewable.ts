/**
 * 
 * @author: xj.huang 
 * @date: 2021/07/31 12:02:55
 */
 export default interface INewable<T = any> extends Function {
    new(...args: any[]): T;
}