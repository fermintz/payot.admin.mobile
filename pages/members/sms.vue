<template>
  <div class="sms">
    <div class="search">
      <dl>
        <dt>대상회원설정</dt>
        <dd>
          <el-select v-model="memberOptionValue" placeholder="Select" size="large" style="width:100%;">
            <el-option
              v-for="item in memberOption" :key="item.label" :label="item.label" :value="item.value"
            />
          </el-select>
        </dd>
      </dl>
      <dl class="date">
        <dt>기준 날짜선택</dt>
        <dd>
          <div class="datePicker">
            <el-date-picker
              v-model="dateValue"
              type="date"
              placeholder="날짜를 선택해주세요"
              size="large"
              style="width:100%;flex:1;"
            />
          </div>
          <div class="radioGroup">
            <el-radio-group v-model="dateRadio" size="large">
              <el-radio-button label="1">
                이전
              </el-radio-button>
              <el-radio-button label="2">
                이후
              </el-radio-button>
            </el-radio-group>
          </div>
        </dd>
      </dl>
      <dl class="price">
        <dt>
          누적결제 금액
        </dt>
        <dd>
          <el-input
            v-model="price"
            size="large" 
            placeholder="금액을 입력해주세요"
          >
          </el-input>
          <span>원 이상 사용자</span>
        </dd>
      </dl>
      <el-button style="width:100%;" size="large" plain>
        검색하기
      </el-button>
    </div>
    <div class="divider"/>

    <div class="options">
      <dl class="number">
        <dt>조회된 회원 수</dt>
        <dd>0명</dd>
      </dl>
      <dl>
        <dt>이벤트선택</dt>
        <dd>
          <el-radio-group v-model="eventRadio" size="large">
            <el-radio-button label="1">
              문자와 함께 포인트적립
            </el-radio-button>
            <el-radio-button label="2">
              문자만 발송
            </el-radio-button>
          </el-radio-group>
        </dd>
      </dl>
      <dl>
        <dt>적립될 포인트</dt>
        <dd>
          <el-input size="large" v-model="point">

          </el-input>
        </dd>
      </dl>
      <dl>
        <dt>문자내용 입력</dt>
        <dd>
          <el-input
            type="textarea" 
            placeholder="내용을 입력해주세요"
            :autosize="{minRows:5}"
            show-word-limit
            maxlength="200"
          >

          </el-input>
        </dd>
      </dl>
    </div>
    <div class="divider"/>

    <div class="order">
      <dl>
        <dt>
          대상회원
        </dt>
        <dd>900명</dd>
      </dl>
      <dl>
        <dt>
          이벤트
        </dt>
        <dd>문자+포인트적립</dd>
      </dl>
      <dl>
        <dt>
          대상분류
        </dt>
        <dd>-</dd>
      </dl>
      <el-divider></el-divider>
      <dl>
        <dt>
          회원수x문자발송비(건당55원)
        </dt>
        <dd>45,000원</dd>
      </dl>
      <dl>
        <dt>
          부가가치세
        </dt>
        <dd>4,500원</dd>
      </dl>
      <el-divider></el-divider>
      <dl class="lastPrice">
        <dt>
          최종결제금액
        </dt>
        <dd>49,500원</dd>
      </dl>
      <el-button plain> 
        문자발송 결제하기
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'문자보내기'
})

const price = ref(0)
const point = ref(0)
const dateValue = ref('')
const dateRadio = ref(1)
const eventRadio = ref(1)
const memberOptionValue = ref(1)
const memberOption = [
  {
    label:'전체가입자',
    value:1
  },
  {
    label:'회원 가입일 기준',
    value:2
  },
  {
    label:'회원 이용일 기준',
    value:3
  },
]

</script>

<style lang="scss" scoped>
.sms{
  dl{
    margin-bottom:20px;
    dt{
      font-size:14px;
      font-weight:500;
      margin-bottom:5px;
    }
    dd{

    }
  }

  .divider{
    height:10px;
    background:#f2f2f2;
  }

  .search{
    padding:20px;
    dl.date{
      dd{
        display:flex;
        gap:10px;
        .datePicker{
          flex:1;
        }
      }
    }
    dl.price{
      dd{
        display:flex;
        gap:10px;
        .el-input{
          flex:1;
        }

        span{
          display:flex;
          align-items: center;
          font-size:12px;
          background:#f2f2f2;
          padding:0 10px;
          border-radius:5px;
          height:40px;
        }
      }
    }
    .el-button{
      height:40px;
      background:#292929;
      color:#fff;
      border:0;
    }
  }

  .options{
    padding:20px;

    dl.number{
      dd{
        font-size:20px;
        font-weight:600;
      }
    }
  }

  .order{
    padding:20px;

    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin:6px;

      &:last-child{
        margin-bottom:0;
      }

      dt{
        margin-bottom:0;
        font-weight:normal;
        color:#797979;
      }
      dd{
        font-size:14px;
        font-weight:500;
      }
    }

    dl.lastPrice{
      dt{
        color:#292929;
      }
      dd{
        font-size:18px;
        font-weight:600;
        color:#E61245
      }
    }

    .el-button{
      margin-top:30px;
      height:50px;
      width:100%;
      background:#E61245;
      color:#fff;
      border:0;
    }
  }

}
</style>