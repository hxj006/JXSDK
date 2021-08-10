import BaseEventDispatcher from "../abstract/BaseEventDispatcher";
import { JXEvent } from "../def/JXEvent";

/**
 * sdk的全局事件单例
 * @author: hs.lin
 * @date: 2020/07/25 17:51:50
 */
export const JXEventMgr = new BaseEventDispatcher<JXEvent>();
