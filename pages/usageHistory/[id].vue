<template>
  <div class="history_detail contents">
    <div class="top">
      <dl>
        <dt>19시까지 총 매출</dt>
        <dd>433,000원</dd>
      </dl>
      <ul>
        <li class="between">
          <span>스마트페이</span>
          <strong>150,000원</strong>
        </li>
        <li class="between">
          <span>카드</span>
          <strong>160,000원</strong>
        </li>
        <li class="between">
          <span>지폐</span>
          <strong>50,000원</strong>
        </li>
        <li class="between">
          <span>동전</span>
          <strong>23,000원</strong>
        </li>
      </ul>
    </div>
    <div class="divider" />

    <div class="list">
      <dl v-for="items in 5" :key="items">
        <dt>16시</dt>
        <dd>
          <div class="item">
            <div class="item_top between">
              <div class="labels">
                <span class="chage box-center">충전</span>
                <span class="credit box-center">카드</span>
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
              <li class="between">
                <span>스마트페이 결제</span>
                <strong>3,000원</strong>
              </li>
              <li class="between">
                <span>포인트결제</span>
                <strong>2,000P</strong>
              </li>
            </ul>
          </div>

          <div class="item" v-for="item in 2" :key="item">
            <div class="item_top between">
              <div class="labels">
                <span class="order box-center">결제</span>
                <span class="credit box-center">스마트페이</span>
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
              <li class="between">
                <span>스마트페이 결제</span>
                <strong>3,000원</strong>
              </li>
              <li class="between">
                <span>포인트결제</span>
                <strong>2,000P</strong>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
      
    </div> <!-- list -->
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'매출 상세내역',
})
</script>

<style lang="scss" scoped>
.history_detail{
  padding:0;
  .top{
    padding:20px;
    dl{
      dt{
        color:#797979;
        font-size:14px;
        margin-bottom:5px;
      }
      dd{
        font-size:24px;
        font-weight:600;
      }
    }
    ul{
      display:flex;
      flex-direction: column;
      margin-top:20px;
      gap:8px;
      li{
        span{
          font-size:14px;
          color:#797979;
        }
        strong{
          font-size:14px;
          font-weight:500;
        }
      }
    }
  }

  .divider{
    height:10px;
    background:#f2f2f2;
  }

  .list{
    padding:20px;
    display:Flex;
    flex-direction: column;
    gap:40px;

    dl{
      dt{
        margin-bottom:10px;
        font-weight:600;
      }
      dd{
        display:flex;
        flex-direction: column;
        gap:10px;
      }
    }
    .item{
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
  }
}
</style>