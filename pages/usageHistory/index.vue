<template>
  <div class="usageHistory contents">
    

    <div class="calendar">
      <div class="control">
        <el-button class="button" @click="dec(1)">
          이전
        </el-button>
        <el-button class="text" plain text>
          {{ $dayjs(month).format('YYYY.MM') }}
        </el-button>
        <el-button class="button" @click="inc(1)">
          다음
        </el-button>
      </div>

      <div class="week-text">
        <label>일</label>
        <label>월</label>
        <label>화</label>
        <label>수</label>
        <label>목</label>
        <label>금</label>
        <label>토</label>
      </div>

      <div class="week" v-for="(week, weekIndex) in calendar" :key="weekIndex">
        <dl 
          v-for="(day, dayIndex) in week" 
          :key="dayIndex" 
          :class="{not:$dayjs(day).isBefore($dayjs(month).startOf('month')) || $dayjs(day).isAfter($dayjs(month).endOf('month'))}"
          @click="$router.push('/usageHistory/1')"  
        >
          <dt>
            <span>{{ $dayjs(day).format('D') }}</span> 
          </dt>
          <dd>
            234,000
          </dd>
        </dl>
      </div>
    </div>

    <div class="guide">
      <p>날짜를 탭하시면 상세내역을 확인하실 수 있습니다.</p>
    </div>

    <el-divider></el-divider>

    <div class="total">
      <dl class="title between">
        <dt>
          총매출
        </dt>
        <dd>3,481,000원</dd>
      </dl>
      
      <div class="summary">
        <dl>
          <dt>스마트페이</dt>
          <dd>150,000원</dd>
        </dl>
        <dl>
          <dt>카드</dt>
          <dd>90,000원</dd>
        </dl>
        <dl>
          <dt>지폐</dt>
          <dd>45,000원</dd>
        </dl>
        <dl>
          <dt>동전</dt>
          <dd>5,000원</dd>
        </dl>
      </div>
    </div>

    
    

    
  </div>
</template>

<script lang="ts" setup>

import { useCounter } from '@vueuse/shared';

definePageMeta({
  layout:'sub',
  name:'이용내역'
})

const props = defineProps<{
  modelValue: boolean

}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})


const { $dayjs } = useNuxtApp();
const { inc, dec, count } = useCounter(0, { max: 0, min: -12 })
const { month, calendar } = useCalendar();

watch(count, value => {
  month.value = $dayjs().add(value, 'month').toDate()
})

</script>

<style lang="scss" scoped>

.calendar{
  .control{
    display:flex;
    justify-content: space-between;
    align-items: center;

    .text{
      font-size:20px;
      font-weight:800;
      font-family:'Roboto';
      color:#292929;
    }

    .button{
      height:24px;
      border-radius:15px;
      overflow:hidden;
      font-size:12px;
    }
  }

  .week-text{
    display:flex;
    height:30px;
    border-radius:20px;
    background:#f5f5f7;
    align-items: center;
    margin:20px 0;

    label{
      flex:1;
      text-align:center;
      font-size:12px;
    }

    label:first-child{
      color:#EB1464
    }
    label:last-child{
      color:#0044FF;
    }
  }

  .week{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
 
    dl:nth-child(7n + 1){
      dt{
        color:#EB1464;
      }
    }
    dl:nth-child(7n){
      dt{
        color:#0044FF;
      }
    }

    dl{
      overflow:hidden;
      padding:10px 0;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0,0,0,0.1);
      &.not{
        visibility: hidden;
      }
      &.today{
        dt{
          span{
            color:#fff;
          }
        }
        dt:after{
          content:'';
          display:block;
          position: absolute;
          width:28px;
          height:28px;
          border-radius:15px;
          background:#292929;
          z-index:1;
        }
      }

      dt{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-bottom:10px;
        
        span{
          position: relative;
          font-size:14px;
          z-index:2;
        }
      }
      dd{
        display:flex;
        justify-content: center;
        font-size:9px;
      }
    }
  }
}

.guide{
  display:flex;
  justify-content: center;
  margin-top:20px;
  
  border-radius:20px;
  p{
    display:flex;
    justify-content: center;
    align-items: center;
    background:#F9F2F4;
    height:30px;
    padding:0 15px;
    border-radius:15px;
    text-align:center;
    font-size:12px;

    &:before{
      content:'*';
      margin-right:5px;
      color:#EB1464;
    }
  }
}

.total{
  .title{
    dt{
      font-size:14px;
      font-weight:500;
    }
    dd{
      display:block;
      font-size:18px;
      font-weight:600;
      color:#1E5DEF;
    }
  }


  .summary{
    margin-top:20px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;
   
    dl{
      background:#f5f5f7;
      border-radius:5px;
      padding:15px;
      dt{
        font-size:14px;
        color:#797979;
      }
      dd{
        font-size:14px;
        font-weight:500;
        margin-top:5px;
      }
    }
  }
}
</style>