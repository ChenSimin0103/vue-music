<template>
    <div>
        <h1>这是推荐页面</h1>
    </div>
</template>

<script type="text/ecmascript-6">
import { getRecommend } from 'api/recommend';
import { ERR_OK } from 'api/config';

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {
    this._getRecommend();
  },
  methods: {
    _getRecommend() {
      getRecommend(res => {
        if (res.code === ERR_OK) {
          console.log('数据导入成功');
          console.log(res.data.slider);
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>