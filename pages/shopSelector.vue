<template>
  <div class="shopSelector contents">
    <p>운영중인 매장을 전환합니다.</p>
  
    <ul>
      <li class="row" 
        :class="{active:index === shopActive}" 
        v-for="(item, index) in shop" 
        :key="index"
        @click="shopActive = index"
      >
        <span class="material-icons check">
          check_circle
        </span>
        <dl>
          <dt>
            {{item.brand}}
          </dt>
          <dd>
            {{item.name}}
          </dd>
        </dl>
        <span class="material-icons arrow">
          chevron_right
        </span>
      </li>

    </ul>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'매장 전환하기'
})

const shopActive = ref(0)
const shop = [
  {
    brand:'워시프렌즈',
    name:'광안점'
  },
  {
    brand:'워시프렌즈',
    name:'수영점'
  }
]
</script>

<style lang="scss" scoped>
.shopSelector{
  ul{
    display:flex;
    flex-direction: column;
    gap:15px;
    margin-top:20px;
    li{
      align-items: center;
      border-radius:10px;
      padding:14px;
      overflow:hidden;
      background:#f5f5f7;

      cursor: pointer;

      dl{
        flex:1;
        dt{
          font-weight:500;
        }
        dd{
          font-size:12px;
          color:#1E5DEF;
        }
      }

      span.check{
        color:#d2d2d2;
        margin-right:14px;
        align-self: flex-start;
        font-size:22px;
      }
      span.arrow{
        color:#c2c2c2;
        font-size:18px;
      }
    }

    li.active{
      border:1px solid #1E5DEF;
      span.check{
        color:#1E5DEF;
      }
    }
  }
}
</style>