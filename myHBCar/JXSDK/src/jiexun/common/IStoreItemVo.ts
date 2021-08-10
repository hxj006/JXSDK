export default interface IStoreItemVo {
    /** 皮肤id */
    id: number,
    /** 预览图片地址，对位按照爬梯钢铁侠来对位 */
    previewPath: string,
    /** 是否默认，默认的是免费的，试用时不会出现，只有在商城时才会显示 */
    isDefault?: boolean,
    /** 商城中图标格子的x值偏移 */
    gridOffsetX?: number;
    /** 商城中图标格子的y值偏移 */
    gridOffsetY?: number;
    /** 商城中展示图标的x值偏移 */
    iconOffsetX?: number;
    /** 商城中展示图标的y值偏移 */
    iconOffsetY?: number;
}