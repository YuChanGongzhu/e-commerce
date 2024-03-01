<template name="skeleton">
    <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                </swiper-item>
            </swiper>
            <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
            </view>
        </view>
    </view>
    <view is="pages/index/component/CategoryPanel">
        <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-291 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-410 sk-text">美食</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-741 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-476 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-555 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-865 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-513 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-247 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-300 sk-text">杂项</text>
            </navigator>
        </view>
    </view>
    <view is="pages/index/component/HotPannel">
        <view class="panel HotPannel--panel hot HotPannel--hot">
            <view class="item HotPannel--item">
                <view class="title HotPannel--title">
                    <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-723 sk-text">特惠推荐</text>
                    <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-993 sk-text">精选全攻略</text>
                </view>
                <navigator class="cards HotPannel--cards" hover-class="none">
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPannel--item">
                <view class="title HotPannel--title">
                    <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-370 sk-text">爆款推荐</text>
                    <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-925 sk-text">最受欢迎</text>
                </view>
                <navigator class="cards HotPannel--cards" hover-class="none">
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPannel--item">
                <view class="title HotPannel--title">
                    <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-461 sk-text">一站买全</text>
                    <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-280 sk-text">精心优选</text>
                </view>
                <navigator class="cards HotPannel--cards" hover-class="none">
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPannel--item">
                <view class="title HotPannel--title">
                    <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-723 sk-text">新鲜好物</text>
                    <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-761 sk-text">生活加分项</text>
                </view>
                <navigator class="cards HotPannel--cards" hover-class="none">
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
        </view>
    </view>
    <view is="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption">
            <text
                class="text XtxGuess--text sk-transparent sk-text-0-0000-125 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
        </view>
    </view>
</template>

<style lang="scss">
/* #ifdef H5 || APP-PLUS */
// h5端默认开启scoped隔离样式
@import '@/components/styles/XtxSwiper.scss';
@import './styles/CategoryPanel.scss';
@import './styles//HotPannel.scss';
/* #endif */

.sk-transparent {
    color: transparent !important;
}

.sk-text-3-5714-753 {
    background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-466 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
}

.sk-text-14-2857-291 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-410 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-741 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-476 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-555 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-865 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-513 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-247 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-300 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-723 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-993 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-370 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-925 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-461 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-280 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-761 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-0-0000-125 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 32.0000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>