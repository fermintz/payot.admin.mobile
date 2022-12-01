<template>
  <el-dialog v-model="show" :show-close="false" width="90%" align-center>
    <template #header>
      <h2>010-8525-4651님</h2>
      <h4>포인트 적립/차감</h4>
    </template>
    <div class="middle">
      <el-radio-group v-model="radio1" size="large" fill="#1E5DEF">
        <el-radio-button label="1">포인트적립</el-radio-button>
        <el-radio-button label="2">포인트차감</el-radio-button>
      </el-radio-group>
      <dl class="userPoint">
        <dt>보유포인트</dt>
        <dd>4,300P</dd>
      </dl>
      <dl class="price">
        <dt>포인트입력</dt>
        <dd>
          <el-input v-model="text1" type="number" size="large" placeholder="0"></el-input>
          <span>P</span>
        </dd>
      </dl>
      <dl class="text">
        <dt>사유입력</dt>
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

const radio1 = ref(1)
const text1 = ref('')
const text2 = ref('')
</script>

<style lang="scss" scoped>

h2{
  font-size:18px;
  font-weight:600;
}
h4{
  font-size:14px;
  color:#797979;
}

.middle{
  display:flex;
  flex-direction: column;
  gap:20px;


  dl{
    dt{
      margin-bottom:8px;
      font-size:12px;
      font-weight:500;
    }
    dd{

    }
  }

  dl.userPoint{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:50px;
    background:#f5f5f7;
    padding:0 10px;
    border-radius:5px;
    dt{
      margin-bottom:0;
    }
    dd{
      font-size:16px;
      font-weight:600;
      color:#1E5DEF;
    }
  }

  dl.price{
    dd{
      position: relative;
      display:flex;
      align-items: center;

      span{
        display:flex;
        align-items: center;
        justify-content: center;
        background:#f2f2f2;
        border-radius:5px;
        min-width:40px;
        height:40px;
        font-weight:500;
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
    background:#292929;
    color:#fff;
    border:0;
  }
}
</style>