<template>
  <el-drawer v-model="show" direction="btt" :show-close="false" size="auto">
    <template #header>
      <h2>시간선택</h2>
      <el-button circle text @click="show=false">
        <span class="material-icons">close</span>
      </el-button>
    </template>

    <div class="middle">
      <p>시간을 선택해주세요</p>
      <div class="btns">
        <el-button v-for="item in 12" :key="item">{{item}}:00</el-button>
      </div>
      <el-divider></el-divider>
      <div class="btns">
        <el-button v-for="item in 12" :key="item">{{item+12}}:00</el-button>
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

.middle{
  p{
    margin-bottom:15px;
    color:#797979;
  }
  .btns{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:5px;
    .el-button{
      border:1px solid #c2c2c2;
    }
  }
}

</style>