import { _decorator, Component, Node, find, Sprite, Button, EventHandler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {
    start() {
        // 獲取 Canvas 節點
        const canvasNode = find('Canvas');
        if (canvasNode) {
            console.log('Canvas 節點找到:', canvasNode);

            // 從 Canvas 節點下獲取 Sprite 節點
            const spriteNode = canvasNode.getChildByName('Sprite');
            if (spriteNode) {
                console.log('Sprite 節點找到:', spriteNode);

                // 獲取 Sprite 組件
                const sprite = spriteNode.getComponent(Sprite);
                if (sprite) {
                    console.log('Sprite 組件找到:', sprite);
                } else {
                    console.log('Sprite 節點上未找到 Sprite 組件。');
                }
            } else {
                console.log('在 Canvas 下未找到 Sprite 節點。');
            }

            // 從 Canvas 節點下獲取 Button 節點
            const buttonNode = canvasNode.getChildByName('Button');
            if (buttonNode) {
                console.log('Button 節點找到:', buttonNode);

                // 獲取 Button 組件
                const button = buttonNode.getComponent(Button);
                if (button) {
                    console.log('Button 組件找到:', button);

                    // 註冊 Button 的點擊事件
                    this.registerButtonEvent(button);
                } else {
                    console.log('Button 節點上未找到 Button 組件。');
                }
            } else {
                console.log('在 Canvas 下未找到 Button 節點。');
            }
        } else {
            console.log('Canvas 節點未找到。');
        }
    }

    // 註冊 Button 的點擊事件
    registerButtonEvent(button: Button) {
        // 創建點擊事件處理函數
        const eventHandler = new EventHandler();
        eventHandler.target = this.node;  // 目標節點設為當前節點
        eventHandler.component = 'main';  // 腳本名稱為 'main'
        eventHandler.handler = 'onButtonClick';  // 處理函數名稱
        eventHandler.customEventData = 'button clicked';  // 自定義傳遞的數據

        // 添加事件到 Button 的 clickEvents 列表中
        button.clickEvents.push(eventHandler);
    }

    // 點擊按鈕的回調函數
    onButtonClick(event: Event, customEventData: string) {
        console.log('按鈕被點擊! 自定義事件數據:', customEventData);
        
        // 在此處調用 Java 方法
        this.callJavaMethod();
    }

    // 調用 Android Java 方法
    callJavaMethod() {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
            // 使用 jsb.reflection 調用 Android Java 方法
            jsb.reflection.callStaticMethod(
                "com/cocos/game/AppActivity",  // Java 類的完整包名
                "showRewardedAd",              // Java 方法名稱
                "()V"                          // Java 方法簽名，表示無參數無返回值
            );
        } else {
            console.log('此功能僅在 Android 原生設備上可用');
        }
    }

    update(deltaTime: number) {
        // 每幀更新的邏輯
    }
}
