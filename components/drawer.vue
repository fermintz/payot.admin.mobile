<template>
  <el-drawer v-model="show" size="100%">
    <template #title>
      <div class="title">
        전체메뉴
      </div>
    </template>
    <template #default>
      <div class="menu">
        <dl>
          <dt>
            <span class="material-icons">bar_chart</span>
            <strong>매출/통계</strong>
          </dt>
          <dd>
            <el-button>
              이용내역
            </el-button>
            <el-button>
              매출통계
            </el-button>
            <el-button>
              매출비교
            </el-button>
          </dd>
        </dl>
        <dl>
          <dt>
            <span class="material-icons">person</span>
            <strong>회원관리</strong>
          </dt>
          <dd>
            <el-button>
              회원리스트
            </el-button>
            <el-button>
              문자보내기
            </el-button>
          </dd>
        </dl>
        <dl>
          <dt>
            <span class="material-icons">settings</span>
            <strong>관리/설정</strong>
          </dt>
          <dd>
            <el-button @click="$router.push('/kioskSetting')">
              키오스크 설정
            </el-button>
            <el-button @click="$router.push('/kioskRemote')">
              키오스크 원격제어
            </el-button>
            <el-button>
              장비 상품관리
            </el-button>
            <el-button>
              장비 원격제어
            </el-button>
            <el-button>
              경고방송 송출
            </el-button>
            <el-button>
              적립률 설정
            </el-button>
          </dd>
        </dl>
      </div>
      
    </template>
  </el-drawer>
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
</script>

<style lang="scss" scoped>
.title{
  font-size:24px;
  color:#292929;
}
.menu{
  display:flex;
  flex-direction: column;
  gap:40px;
  dl{
    dt{
      display:flex;
      span{
        margin-right:8px;
      }
      strong{
        font-size:18px;
      }
    }
    dd{
      margin-top:15px;
      display:grid;
      gap:10px;
      grid-template-columns: 1fr 1fr;
      .el-button{
        height:40px;
      }
    }
  }
}

</style>