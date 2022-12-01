<template>
  <el-dialog v-model="show" :show-close="false" custom-class="dialog" width="90%" align-center>
    <div class="cont">
      <p>[30분] 표준코스(세탁1 + 헹굼2)</p>
      <p>삭제하시겠습니까?</p>
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

  .cont{
    p{
      font-size:16px;
      font-weight:500;
    }
    p:first-child{
      color:#1E5DEF;
    }
  }

  
  .bottom{
    display:flex;
    justify-content: flex-end;
    gap:10px;
    margin-top:10px;


    .el-button{
      height:36px;
      border:1px solid #c2c2c2;

    }
    .el-button.confirm{
      background:#1E5DEF;
      color:#fff;
      border:0;
    }
  }
}
</style>