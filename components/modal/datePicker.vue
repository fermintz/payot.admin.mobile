<template>
  <el-drawer v-model="show" direction="btt" :show-close="false" size="auto">
    <template #header>
      <h2>일정선택</h2>
      <el-button circle text @click="show=false">
        <span class="material-icons">close</span>
      </el-button>
    </template>

    <div class="middle">
      <div class="date_selector row">
        <dl class="first">
          <dt>부터</dt>
          <dd>
            <el-button text>
              선택해주세요
            </el-button>
          </dd>
        </dl>
        <dl class="second">
          <dt>까지</dt>
          <dd>
            <el-button text>
              선택해주세요
            </el-button>
          </dd>
        </dl>
      </div>

      <div class="calendar">
        <div class="control">
          <el-button plain class="button" @click="dec(1)">
            이전
          </el-button>
          <strong>
            {{ $dayjs(month).format('YYYY.MM') }}
          </strong>
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
          <dl v-for="(day, dayIndex) in week" :key="dayIndex" :class="{not:$dayjs(day).isBefore($dayjs(month).startOf('month')) || $dayjs(day).isAfter($dayjs(month).endOf('month'))}">
            <dt>
              <span>{{ $dayjs(day).format('D') }}</span> 
            </dt>
          </dl>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btn">
        <strong>선택한 날짜로 검색하기</strong>
        <span class="material-icons">chevron_right</span>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { useCounter } from '@vueuse/shared';

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
.el-drawer{
   border-radius:10px 10px 0 0;
}

.el-drawer__header{
  justify-content: space-between;
  margin-bottom:0px;
  
  h2{
    font-size:18px;
    font-weight:500;
    color:#292929;
  }
  .el-button{
    width:30px;
    height:30px;
    span{
      font-size:20px;
    }
  }
}

.date_selector{
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #e2e2e2;
  padding:10px 0;
  margin-bottom:20px;

  dl{
    flex:1;
    &:first-child{
      border-right:1px solid #e2e2e2;
      padding-right:15px;
    }
    &:last-child{
      padding-left:15px;
    }
    dt{
      font-size:12px;
      color:#0044FF;
      margin-bottom:5px;
    }
    dd{
      display:flex;
      align-items: center;
      justify-content: center;
      font-size:14px;
      height:40px;
      background:#f5f5f7;
      border-radius:5px;

      .el-button{
        height:40px;
        width:100%;
        border-radius:5px;
      }
    }
  }
}

.calendar{
  .control{
    display:flex;
    justify-content: space-between;
    align-items: center;

    strong{
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
        height:35px;
        cursor: pointer;
        span{
          position: relative;
          font-size:12px;
          z-index:2;
        }
      }
    }
  }
}

.bottom{
  margin-top:20px;
  .btn{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 15px;
    border-radius:5px;
    width:100%;
    height:50px;
    background:#0044FF;
    color:#fff;
    cursor: pointer;

    strong{
      font-size:14px;
    }
  }
}
</style>