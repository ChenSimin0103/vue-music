<template>
    <div class="recommend">
      <div class=recommend-content>
        <div class="slider-wrapper" v-if="recommends.length">
          <slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
      </div>
        <h1>这是推荐页面</h1>
    </div>
</template>

<script type="text/ecmascript-6">
import { getRecommend } from "api/recommend";
import { ERR_OK } from "api/config";
import slider from "base/slider/slider";

export default {
  name: "",
  components: {
    slider
  },
  props: {},
  data() {
    return {
      recommends: []
    };
  },
  created() {
    this._getRecommend();
    // console.log()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          console.log("数据导入成功");
          console.log(res.data);
          this.recommends = res.data.slider;
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>