<template>
  <div class="eq_remote contents">
    <P>기기를 원격으로 접속하여 금액을 투입할 수 있습니다.</P>

    <div class="list">
      <div class="item between" v-for="item in 10" :key="item" @click="visible =true">
        <div class="left">
          <div class="labels">
            <span class="access box-center" v-if="true">연결됨</span>
            <span class="error box-center" v-else>연결안됨</span>
          </div>
          <div class="name">
            {{item}}번세탁기
          </div>

        </div>
        <span class="material-icons icon">
          chevron_right
        </span>
      </div>
    </div>

    <modalEqRemote v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout:'sub',
  name:'장비 원격투입'
})

const visible = ref(false)

</script>

<style lang="scss" scoped>
.eq_remote{
  p{
    margin-bottom:20px;
  }
  .list{
    display:flex;
    flex-direction: column;
    gap:15px;
  }
  .item{
    border:1px solid #c2c2c2;
    border-radius:10px;
    padding:14px;
    cursor: pointer;
    .left{
      .labels{
        display:flex;
        align-items: center;
        gap:5px;

        span{
          font-size:10px;
          height:20px;
          border:1px solid #e2e2e2;
          padding:0 5px;
          border-radius:3px;
        }
        span.access{
          border-color:#1E5DEF;
          color:#1E5DEF
        }
        span.error{
          border-color:#E61245;
          color:#E61245;
        }
      }
      .name{
        font-weight:500;
        margin-top:10px;
      }
    }
    span.icon{
      color:#c2c2c2;   
    }
  }
}
</style>