<template>
  <div class="kioskRemote">
    <div class="page_top">
      <dl>
        <dt>키오스크 선택</dt>
        <dd>
          <el-select v-model="kioskSelect" size="large">
            <el-option v-for="item in options" :key="item.label" :value="item.label" style="font-size:16px;height:40px;">

            </el-option>
          </el-select>
        </dd>
      </dl>
    </div>
    <div class="divider" />
    <div class="list">
      <dl class="between">
        <dt>
          <strong>키오스크 판매시작</strong>
          <span>키오스크의 판매를 재개합니다.</span>
        </dt>
        <dd><span class="material-icons">chevron_right</span></dd>
      </dl>
      <dl class="between">
        <dt>
          <strong>키오스크 판매중지</strong>
          <span>키오스크의 판매를 중지합니다.</span>
        </dt>
        <dd><span class="material-icons">chevron_right</span></dd>
      </dl>
      <dl class="between">
        <dt>
          <strong>키오스크 프로그램 재실행</strong>
          <span>키오스크의 프로그램이 종료 후 재실행됩니다.</span>
        </dt>
        <dd><span class="material-icons">chevron_right</span></dd>
      </dl>
      <dl class="between">
        <dt>
          <strong>키오스크 PC 재부팅</strong>
          <span>키오스크 PC의 전원이 완전히 종료 후 재시작됩니다.</span>
        </dt>
        <dd><span class="material-icons">chevron_right</span></dd>
      </dl>

    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'키오스크 제어'
})

const kioskSelect = ref('키오스크1')
const options = [
  {
    valeu:1,
    label:'키오스크1',
  },
  {
    valeu:2,
    label:'키오스크2',
  }
]
</script>

<style lang="scss" scoped>
.kioskRemote{
  .page_top{
    padding:20px;
    dl{
      dt{
        margin-bottom:10px;
        font-weight:500;
        font-size:14px;
      }
    }

    .el-select{
      width:100%;
    }
  }

  .divider{
    height:10px;
    background:#f2f2f2;
  }

  .list{
    display:flex;
    flex-direction: column;

    dl{
      display:flex;
      align-items: center;
      padding:20px;
      border-bottom:1px solid #e2e2e2;
      cursor: pointer;

      dt{
        strong,span{
          display:block;
        }
        strong{
          font-size:15px;
          font-weight:500;
        }
        span{
          font-size:12px;
          margin-top:3px;
          color:#797979;
        }
      }
      dd{
        span{
          
          font-size:18px;
        }
      }
    }
  }
}
</style>