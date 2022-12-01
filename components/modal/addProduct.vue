<template>
  <el-dialog v-model="show" custom-class="dialog" :show-close="false" width="90%" align-center>
    <template #header>
      <h4>상품등록</h4>
    </template>
    <div class="middle">
      <dl>
        <dt>상품명 입력</dt>
        <dd>
          <el-input v-model="text1" type="text" clearable size="large" placeholder="내용을 입력해주세요"></el-input>
        </dd>
      </dl>
      <div class="row">
        <dl>
          <dt>동작시간</dt>
          <dd>
            <el-input v-model="text2" type="number" placeholder="0" size="large"></el-input>
            <span>분</span>
          </dd>
        </dl>
        <dl>
          <dt>상품가격</dt>
          <dd>
            <el-input v-model="text3" type="number" placeholder="0" size="large"></el-input>
            <span>원</span>
          </dd>
        </dl>
      </div>
      <dl>
        <dt>상품에 대한 설명입력</dt>
        <dd>
          <el-input
            v-model="text4"
            type="textarea" 
            placeholder="내용을 입력해주세요"
            :autosize="{minRows:4}"
            show-word-limit
            maxlength="100"
          />
        </dd>
      </dl>
      
    </div>
    <template #footer>
      <div class="bottom">
        <el-button class="cancle" @click="show = false">취소</el-button>
        <el-button class="confirm" @click="show = false">확인</el-button>
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
const text3 = ref('')
const text4 = ref('')

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

    .row{
      gap:20px;
      dl{
        dd{
          display:flex;
          align-items: center;
          span{
            margin-left:6px;
          }
        }
      }
    }
    
    dl{
      dt{
        font-size:12px;
        margin-bottom:10px;
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