<template>
  <div class="warningSound">
    <div class="page_top">
      <p>키오스크를 통해 저장된 경고음성을<br/>내보낼 수 있습니다.</p>

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
    <div class="divider"></div>
    
    <div class="image">
      <img src="~/assets/img/sound.png"/>
    </div>
    
    <div class="list">
      <div class="item">
        <dl class="top">
          <dt>
            <span class="material-icons">volume_up</span>
            <strong>일반 경고음성</strong>
          </dt>
          <dd><b>내용</b> "빨래방을 이용하지 않는 분들은 퇴장해주시길 바랍니다."</dd>
        </dl>
        <div class="bottom row">
          <el-button text>미리듣기</el-button>
          <el-button text>송출하기</el-button>
        </div>
      </div>
      <div class="item">
        <dl class="top">
          <dt>
            <span class="material-icons">volume_up</span>
            <strong>퇴장 경고음성</strong>
          </dt>
          <dd><b>내용</b> "빨래방을 이용하지 않는 분들은 퇴장해주시길 바랍니다."</dd>
        </dl>
        <div class="bottom row">
          <el-button text>미리듣기</el-button>
          <el-button text>송출하기</el-button>
        </div>
      </div>
      <div class="item">
        <dl class="top">
          <dt>
            <span class="material-icons">volume_up</span>
            <strong>CCTV 경고음성</strong>
          </dt>
          <dd><b>내용</b> "CCTV 촬영중입니다. 퇴거하지 않으시면 업무방해로 경찰출동조치 하도록 하겠습니다."</dd>
        </dl>
        <div class="bottom row">
          <el-button text>미리듣기</el-button>
          <el-button text>송출하기</el-button>
        </div>
      </div>
    </div>

  </div>  
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'경고음성 송출'
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
.page_top{
  padding:20px;
  padding-top:0;
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

  p{
    font-size:14px;
    color:#797979;
    margin-bottom:20px;
  }
}
.divider{
  height:10px;
  background:#f2f2f2;
}

.image{
  padding:20px;
  padding-bottom:0;

  img{
    width:100%;
    background:#f5f5f7;
    border-radius:10px;
    padding:20px;
  }
}

.list{
  display:flex;
  flex-direction: column;
  gap:15px;
  padding:20px;
  padding-bottom:100px;
}

.item{
  border:1px solid #c2c2c2;
  border-radius:10px;
  overflow:hidden;
  .top{
    padding:14px;
    dt{
      
      display:flex;
      align-items: center;
      strong{
        font-weight:500;
      }
      span{
        font-size:18px;
        margin-right:10px;
        color:#1E5DEF;
      }
    }
    dd{
      margin-top:8px;
      font-size:14px;
      color:#797979;

      b{
        font-weight:500;
        color:#292929;
      }
    }
  }
  .bottom{
    border-top:1px solid #e2e2e2;
    align-items: center;
    background:#f5f5f7;
    .el-button{
      flex:1;
      border-radius:0;
      height:40px;
    }
    .el-button:last-child{
      color:#1E5DEF;
    }
  }    
}


</style>