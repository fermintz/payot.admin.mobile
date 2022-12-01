<template>
  <div class="orderCard">
    <div class="item_top between">
      <div class="labels">
        <span class="order box-center" v-if="cate === 0">결제</span>
        <span class="chage box-center" v-else>충전</span>
        <span class="credit box-center">{{serviceName()}}</span>
      </div>
      <div class="date">
        12시 43분 14초
      </div>
    </div>
    <div class="item_middle between">
      <div class="title">
        <span>010-8525-4561</span>
        <strong>대형봉투/섬유유연제 판매기</strong>
      </div>
      <div class="price">
        5,000원
      </div>
    </div>

    <ul class="item_bottom">
      <li class="between">
        <span>남은포인트</span>
        <strong>15,000P</strong>
      </li>
      <li class="between" v-show="cate === 0">
        <span>스마트페이 결제</span>
        <strong>3,000원</strong>
      </li>
      <li class="between" v-show="cate === 0">
        <span>포인트결제</span>
        <strong>2,000P</strong>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup> 


const props = defineProps<{
  cate:number,
  service:number
}>()


const serviceName = ()=>{
  switch(props.service){
    case 0:
      return '스마트페이';
      break;
    case 1:
      return '카드';
      break;
    case 2:
      return '지폐';
      break;
    case 3:
      return '동전';
      break;
  }
}

onMounted(()=>{
  console.log(props.service)
})


</script>

<style lang="scss" scoped>
.orderCard{
  border:1px solid #e2e2e2;
  padding:15px;
  border-radius:5px;
  .item_top{
    .labels{
      display:flex;
      align-items: center;
      gap:6px;
      span{
        height:20px;
        font-size:11px;
        background:#f2f2f2;
        padding:0 6px;
        border-radius:3px;
      }
      span.order{
        background:#E61245;
        color:#fff;
      }
      span.chage{
        background:#1E5DEF;
        color:#fff;
      }
    }
    .date{
      font-size:12px;
      color:#797979;
    }
  }
  .item_middle{
    margin:10px 0;
    .title{
      span,strong{
        display:block;
      }
      span{
        font-size:14px;
        color:#1E5DEF;
      }
      strong{
        font-size:14px;
      }
    }
    .price{
      font-weight:600;
    }
  }
  .item_bottom{
    border-top:1px solid #e2e2e2;
    padding-top:10px;
    display:flex;
    flex-direction: column;
    gap:5px;
    li{
      span,strong{
        font-size:12px
      }
      span{
        color:#797979;
      }
      strong{
        font-weight:500;
      }
    }
  }
}
</style>