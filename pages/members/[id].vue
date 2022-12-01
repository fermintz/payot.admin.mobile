<template>
  <div class="member_detail">
    <div class="detail_top">
      <div class="title">
        <h2>010-8525-4561</h2>
        <p>가입일: 2022-10-01</p>
      </div>

      <div class="dashboard">
        <dl class="date">
          <dt>최근이용일</dt>
          <dd>2022.10.11</dd>
        </dl>
        <dl class="userPoint">
          <dt>남은포인트</dt>
          <dd>32,000P</dd>
        </dl>
        <dl class="price">
          <dt>누적결제금액</dt>
          <dd>328,000원</dd>
        </dl>
        <dl class="pointControl">
          <dt>포인트<br/>적립/차감</dt>
          <dd>
            <span class="material-icons">chevron_right</span>
          </dd>
        </dl>
      </div>

      <div class="memo">
        <h4>회원메모</h4>
        <el-input 
          v-model="memo" 
          type="textarea" 
          placeholder="내용을 입력해주세요"
          :autosize="{minRows:4}"
          show-word-limit
          maxlength="200"
        />
        <el-button text
          @click="message('저장되었습니다.')"
        >메모 저장하기</el-button>
      </div>
    </div>

    <div class="divider" />

    <div class="list_wrap">
      <div class="list_top">
        <div class="search_box" @click="visible = true">
          <span class="material-icons date">date_range</span>
          <strong>날짜검색</strong>
          <span class="material-icons more">expand_more</span>
        </div>
      </div>
      <div class="list">
        <dl>
          <dt>10.11</dt>
          <dd>
            <orderCard :cate="0" :service="0"/>
            <orderCard :cate="1" :service="1"/>
          </dd>
        </dl>
        <dl>
          <dt>10.11</dt>
          <dd>
            <orderCard :cate="1" :service="1"/>
            <orderCard :cate="0" :service="1"/>
            <orderCard :cate="1" :service="1"/>
            <orderCard :cate="1" :service="1"/>
          </dd>
        </dl>
      </div>
    </div>

    <modalDatePicker v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
import {ElMessage} from 'element-plus'

const message = (text:string)=>{
  ElMessage({
    type: 'success',
    message:text,
    duration:1000
  })
}

definePageMeta({
  layout:'sub',
  name:'회원 상세정보'
})

const visible = ref(false)
const memo = ref('')

</script>

<style lang="scss" scoped>
.detail_top{
  padding:20px;

  .title{
    h2{
      font-size:24px;
      font-weight:600;
    }
    p{
      font-size:14px;
      color:#797979;
    }
  }

  .dashboard{
    margin-top:20px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;
    dl{
      display:flex;
      flex-direction: column;
      justify-content: center;
      padding:10px;
      background:#f5f5f7;
      border-radius:5px;
      min-height:80px;
      dt{
        font-size:13px;
        color:#797979;
      }
      dd{
        font-size:18px;
        font-weight:500;
        margin-top:5px;
      }
    }

    dl.userPoint{
      dd{
        color:#1E5DEF;
      }
    }

    dl.pointControl{
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background:#1E5DEF;
      cursor: pointer;

      dt{
        font-size:14px;
        font-weight:500;
        color:#fff;
      }
      dd{
        span{
          color:#fff;
        }
      }
    }
  }

  .memo{
    margin-top:30px;
    h4{
      margin-bottom:5px;
      font-size:14px;
      font-weight:500;
    }
    .el-button{
      height:50px;
      width:100%;
      background:#292929;
      color:#fff;
      margin-top:10px;
    }
  }
}

.divider{
  height:10px;
  background:#f2f2f2;
}

.list_wrap{
  padding:0 20px;
  padding-top:10px;
  padding-bottom:20px;

  .list_top{
    margin-bottom:20px;
    padding:10px 0;
    position: sticky;
    top:0;
    background:#fff;
    .search_box{
      display:flex;
      align-items: center;
      height:50px;
      border:1px solid #e2e2e2;
      border-radius:5px;
      padding:0 10px;
      cursor: pointer;

      strong{
        flex:1;
        font-size:14px;
        font-weight:500;
        margin:0 10px;
      }

      span.more{
        color:#aaa;
        font-size:18px;
      }
    }
  }

  .list{
    display:flex;
    flex-direction: column;
    gap:30px;

    dl{
      dt{
        font-weight:500;
        margin-bottom:10px;
      }
      dd{
        display:flex;
        flex-direction: column;
        gap:10px;
      }
    }
  }
}
</style>