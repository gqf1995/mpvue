<template name="components">
  <view>
    <cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg" isBack="true">
      <view slot="backText">返回</view>
      <view slot="content">索引</view>
    </cu-custom>
    <scroll-view scroll-x class="bg-white nav text-center fixed" :style="'top:'+CustomBar+'px'">
      <view
        class="cu-item"
        :class="index==TabCur?'text-blue cur':''"
        v-for="(item,index) in tabNav"
        :key="index"
        @tap="tabSelect"
        :data-id="index"
      >{{tabNav[index]}}</view>
    </scroll-view>
 
 
    <block v-if="TabCur==0">
      <view class="cu-bar bg-white solid-bottom margin-top gqf">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>固定尺寸<view class="demo" style="background:red;"></view><i class="iconfont icon-daohang" style="color:red;"></i>
        </view>
      </view>
      <view class="padding bg-white">
        <view class="flex flex-wrap">
          <view class="basis-xs bg-grey margin-xs padding-sm radius">xs(20%)</view>
          <view class="basis-df"></view>
          <view class="basis-sm bg-grey margin-xs padding-sm radius">sm(40%)</view>
          <view class="basis-df"></view>
          <view class="basis-df bg-grey margin-xs padding-sm radius">sub(50%)</view>
          <view class="basis-lg bg-grey margin-xs padding-sm radius">lg(60%)</view>
          <view class="basis-xl bg-grey margin-xs padding-sm radius">xl(80%)</view>
        </view>
      </view>
      <view class="cu-bar bg-white margin-top solid-bottom">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>比例布局
        </view>
      </view>
      <view class="padding bg-white">
        <view class="flex">
          <view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
          <view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
        </view>
        <view class="flex p-xs margin-bottom-sm mb-sm">
          <view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
          <view class="flex-twice bg-grey padding-sm margin-xs radius">2</view>
        </view>
        <view class="flex p-xs margin-bottom-sm mb-sm">
          <view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
          <view class="flex-twice bg-grey padding-sm margin-xs radius">2</view>
          <view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
        </view>
      </view>
      <view class="cu-bar bg-white margin-top solid-bottom">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>水平对齐(justify)
        </view>
      </view>
      <view class="bg-white">
        <view class="flex solid-bottom padding justify-start">
          <view class="bg-grey padding-sm margin-xs radius">start</view>
          <view class="bg-grey padding-sm margin-xs radius">start</view>
        </view>
        <view class="flex solid-bottom padding justify-end">
          <view class="bg-grey padding-sm margin-xs radius">end</view>
          <view class="bg-grey padding-sm margin-xs radius">end</view>
        </view>
        <view class="flex solid-bottom padding justify-center">
          <view class="bg-grey padding-sm margin-xs radius">center</view>
          <view class="bg-grey padding-sm margin-xs radius">center</view>
        </view>
        <view class="flex solid-bottom padding justify-between">
          <view class="bg-grey padding-sm margin-xs radius">between</view>
          <view class="bg-grey padding-sm margin-xs radius">between</view>
        </view>
        <view class="flex solid-bottom padding justify-around">
          <view class="bg-grey padding-sm margin-xs radius">around</view>
          <view class="bg-grey padding-sm margin-xs radius">around</view>
        </view>
      </view>
      <view class="cu-bar bg-white margin-top solid-bottom">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>垂直对齐(align)
        </view>
      </view>
      <view class="bg-white">
        <view class="flex solid-bottom padding align-start">
          <view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
          <view class="bg-grey padding-sm margin-xs radius">start</view>
        </view>
        <view class="flex solid-bottom padding align-end">
          <view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
          <view class="bg-grey padding-sm margin-xs radius">end</view>
        </view>
        <view class="flex solid-bottom padding align-center">
          <view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
          <view class="bg-grey padding-sm margin-xs radius">center</view>
        </view>
      </view>
    </block>
    <block v-if="TabCur==1">
      <view class="cu-bar bg-white margin-top solid-bottom">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>等分列
        </view>
        <view class="action"></view>
      </view>
      <view class="bg-white padding">
        <view
          class="grid margin-bottom text-center"
          v-for="(item,index) in 5"
          :key="index"
          :class="'col-' + (index+1)"
        >
          <view
            class="padding"
            :class="indexs%2==0?'bg-cyan':'bg-blue'"
            v-for="(item,indexs) in (index+1)*2"
            :key="indexs"
          >{{indexs+1}}</view>
        </view>
      </view>
      <view class="cu-bar bg-white margin-top solid-bottom">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>等高
        </view>
        <view class="action"></view>
      </view>
      <view class="bg-white padding">
        <view class="grid col-4 grid-square">
          <view
            class="bg-img"
            v-for="(item,index) in avatar"
            :key="index"
            :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"
          ></view>
        </view>
      </view>
    </block>
    <block v-if="TabCur==2">
      <view class="cu-bar bg-white margin-top solid-bottom">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>浮动
        </view>
      </view>
      <view class="bg-white padding">
        <view class="cf padding-sm">
          <view class="bg-grey radius fl padding-sm">ColorUi fl</view>
          <view class="bg-grey radius fr padding-sm">ColorUi fr</view>
        </view>
      </view>
      <view class="cu-bar bg-white solid-bottom margin-top solid-bottom">
        <view class="action">
          <text class="cuIcon-title text-blue"></text>内外边距
        </view>
      </view>
      <view class="bg-white">
        <view class="padding bg-gray">{size}的尺寸有xs/sm/df/lg/xl</view>
        <view class="flex flex-wrap padding solid-top">
          <view class="basis-df padding-bottom-xs">外边距</view>
          <view class="basis-df padding-bottom-xs">内边距</view>
          <view class="basis-df">.margin-{size}</view>
          <view class="basis-df">.padding-{size}</view>
        </view>
        <view class="flex flex-wrap padding solid-top">
          <view class="basis-df padding-bottom-xs">水平方向外边距</view>
          <view class="basis-df padding-bottom-xs">水平方向内边距</view>
          <view class="basis-df">.margin-lr-{size}</view>
          <view class="basis-df">.padding-lr-{size}</view>
        </view>
        <view class="flex flex-wrap padding solid-top">
          <view class="basis-df padding-bottom-xs">垂直方向外边距</view>
          <view class="basis-df padding-bottom-xs">垂直方向内边距</view>
          <view class="basis-df">.margin-tb-{size}</view>
          <view class="basis-df">.padding-tb-{size}</view>
        </view>
        <view class="flex flex-wrap padding solid-top">
          <view class="basis-df padding-bottom-xs">上外边距</view>
          <view class="basis-df padding-bottom-xs">上内边距</view>
          <view class="basis-df">.margin-top-{size}</view>
          <view class="basis-df">.padding-top-{size}</view>
        </view>
        <view class="flex flex-wrap padding solid-top">
          <view class="basis-df padding-bottom-xs">右外边距</view>
          <view class="basis-df padding-bottom-xs">右内边距</view>
          <view class="basis-df">.margin-right-{size}</view>
          <view class="basis-df">.padding-right-{size}</view>
        </view>
        <view class="flex flex-wrap padding solid-top">
          <view class="basis-df padding-bottom-xs">下外边距</view>
          <view class="basis-df padding-bottom-xs">下内边距</view>
          <view class="basis-df">margin-bottom-{size}</view>
          <view class="basis-df">.padding-bottom-{size}</view>
        </view>
        <view class="flex flex-wrap padding solid-top">
          <view class="basis-df padding-bottom-xs">左外边距</view>
          <view class="basis-df padding-bottom-xs">左内边距</view>
          <view class="basis-df">.margin-left-{size}</view>
          <view class="basis-df">.padding-left-{size}</view>
        </view>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  data() {
    return {
      CustomBar: this.globalData.CustomBar,
      TabCur: 0,
      avatar: [
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
      ],
      tabNav: ["Flex布局", "Grid布局", "辅助布局"]
    };
  },
  mounted() {
    console.log(this.$data);
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    }
  }
};
</script>

<style>
.demo{
  width:15px;height:15px;
}
page {
  padding-top: 45px;
}
</style>
