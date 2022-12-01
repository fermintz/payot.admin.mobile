<template>
  <div class="noticeViewer contents">
    <dl>
      <dt>
        <strong>
          키오스크 에러 관련 추가공지
        </strong>
        <span>작성일: 2022년 10월 10일</span>
      </dt>
      <dd>
        게시글 내용 자리
      </dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub',
  name:'공지사항 상세'
})
</script>

<style lang="scss" scoped>
.noticeViewer{
  dl{
    dt{
      strong,span{
        display:block;
      }
      strong{
        font-size:16px;
        font-weight:500;
      }
      span{
        font-size:12px;
        margin-top:5px;
        color:#797979;
      }
    }

    dd{
      margin-top:20px;
      padding-top:20px;
      font-size:14px;
      border-top:1px solid #e2e2e2;
    }
  }
}
</style>