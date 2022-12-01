<template>
  <el-dialog v-model="show" custom-class="dialog" :show-close="false" width="90%" align-center>
    <template #header>
      <h4>장비 원격제어</h4>
    </template>
    <div class="middle">
      <dl class="select">
        <dt>선택된 장비</dt>
        <dd>
          1번세탁기(27kg)
        </dd>
      </dl>
      <dl class="input">
        <dt>투입할 금액</dt>
        <dd>
          <el-input type="number" v-model="text1" size="large" clearable placeholder="0"></el-input>
          <span>원</span>
        </dd>
      </dl>
      <dl>
        <dt>투입사유입력</dt>
        <dd>
          <el-input
            v-model="text2"
            type="textarea" 
            placeholder="내용을 입력해주세요"
            :autosize="{minRows:5}"
            show-word-limit
            maxlength="200"
          />
        </dd>
      </dl>
    </div>
    <template #footer>
      <div class="bottom">
        <el-button class="cancle">취소</el-button>
        <el-button class="confirm">확인</el-button>
      </div>
    </template>
  </el-dialog>
</template>


<script lang="ts" setup>
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

const text1 = ref('')
const text2 = ref('')

</script>

<style lang="scss" scoped>
.dialog{
  border-radius:10px;

  h4{
    font-weight:600;
    font-size:18px;
  }

  .middle{
    display:flex;
    flex-direction: column;
    gap:24px;
    dl{
      dt{
        font-size:12px;
        margin-bottom:10px;
      }
    }
    dl.select{
      dd{
        display:flex;
        align-items: center;
        background:#EFF2F8;
        height:50px;
        padding:0 10px;
        border-radius:5px;
        color:#1E5DEF;
        font-size:16px;
      }
    }
    dl.input{
      dd{
        display:flex;
        align-items: center;
        position: relative;

        span{
          margin-left:10px;
        }
      }
    }
    
  }

  .bottom{
    display:flex;
    gap:10px;
    margin-top:20px;

    .el-button{
      height:40px;
      flex:1;
    }
    .el-button.confirm{
      background:#1E5DEF;
      color:#fff;
      border:0;
    }
  }
}
</style>