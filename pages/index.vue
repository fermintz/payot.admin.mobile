<template>
  <div class="main contents">
    <div class="toMonth between">
      <h2>2022.10</h2>
      <p>
        <span>적용시간</span>
        <strong>13시 45분</strong>
      </p>
    </div>
    <div class="dashboard">
      <div class="col">
        <div class="box today_sales" @click="$router.push('/usageHistory/1')">
          <dl>
            <dt>
              오늘 매출(20일)
            </dt>
            <dd>
              218,500원
            </dd>
          </dl>
          <ul>
            <li class="between">
              <span>스마트페이</span>
              <strong>123,500</strong>
            </li>
            <li class="between">
              <span>카드</span>
              <strong>123,500</strong>
            </li>
            <li class="between">
              <span>지폐</span>
              <strong>123,500</strong>
            </li>
            <li class="between">
              <span>동전</span>
              <strong>123,500</strong>
            </li>
          </ul>
        </div>
        <div class="box member_point">
          <dl>
            <dt>고객 잔여포인트</dt>
            <dd>1,505,000P</dd>
          </dl>
        </div>
      </div>
      <div class="col">
        <div class="box month_sales" @click="$router.push('/usageHistory')">
          <dl>
            <dt>
              이번달 매출
            </dt>
            <dd>3,450,000원</dd>
          </dl>
        </div>
        <div class="members row">
          <div class="box new member box-center" @click="$router.push('/members')">
            <dl>
              <dt>
                신규회원
              </dt>
              <dd>10</dd>
            </dl>
          </div>

          <div class="box total member box-center" @click="$router.push('/members')">
            <dl>
              <dt>
                총회원수
              </dt>
              <dd>9,999</dd>
            </dl>
          </div>
        </div>
        <div class="box message row" @click="$router.push('/members/sms')">
          <span class="material-icons">mail</span>
          <strong>
            회원<br/>문자보내기
          </strong>
        </div>
      </div>
    </div> <!-- dashboard -->

    <div class="tip">
      박스를 탭하시면 해당 상세페이지로 이동합니다.
    </div>

    <div class="chart">
      <BarChart :data="chartData" :options="chartOptions" :height="200"/>
    </div>

    <div class="quick">
      <h4>빠른메뉴</h4>
      <div class="btns row">
        <dl class="box-center" @click="$router.push('/eqRemote')">
          <dt>
            <span class="material-icons">wifi</span>
          </dt>
          <dd>장비원격제어</dd>
        </dl>
        <dl class="box-center" @click="$router.push('/savingPoint')">
          <dt>
            <span class="material-icons">tune</span>
          </dt>
          <dd>적립률설정</dd>
        </dl>
        <dl class="box-center" @click="$router.push('/kioskSetting')">
          <dt>
            <span class="material-icons">settings</span>
          </dt>
          <dd>키오스크설정</dd>
        </dl>
        <dl class="box-center" @click="$router.push('/warningSound')">
          <dt>
            <span class="material-icons">volume_down</span>
          </dt>
          <dd>경고방송</dd>
        </dl>
      </div>
    </div>

    <div class="notice">
      <h4>공지사항</h4>
      <ul>
        <li class="between new" @click="$router.push('/noticeViewer')">
          <span class="title">키오스크 에러 관련 추가공지</span>
          <span class="date">2022.10.10</span>
        </li>
        <li class="between new" @click="$router.push('/noticeViewer')">
          <span class="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit sapiente beatae, autem eos nobis veritatis eveniet nam, blanditiis necessitatibus dolore voluptatum totam saepe ut accusamus obcaecati cum omnis pariatur in.</span>
          <span class="date">2022.10.10</span>
        </li>
        <li class="between" @click="$router.push('/noticeViewer')">
          <span class="title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi id deleniti molestias aperiam reiciendis veritatis, at pariatur exercitationem, quaerat ipsa iusto porro suscipit sed eligendi minus maxime illo? Necessitatibus, amet.</span>
          <span class="date">2022.10.10</span>
        </li>
      </ul>
    </div>

    <div class="customer">
      <h4>고객지원</h4>
      <div class="text">
        <strong>070-7807-6857</strong>
        <span>평일 10:00~17:00 / 점심 12:30~14:00</span>
        <span>토요일/공휴일 휴무</span>
      </div>
      
      <div class="btns row">
        <el-button text>
          <span class="material-icons">phone</span>
          <strong>전화상담</strong>
        </el-button>
        <el-button text>
          <img src="~/assets/img/kakao.png">
          <strong>카카오톡 상담</strong>
        </el-button>
      </div>

      <el-divider></el-divider>

      <div class="btns2">
        <div class="btn">
          <strong>부가세 신고용 카드매출 확인</strong>
          <span class="material-icons">chevron_right</span>
        </div>
        <div class="btn">
          <strong>키오스크 문제발생 메뉴얼</strong>
          <span class="material-icons">chevron_right</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TChartData } from "vue-chartjs/dist/types"


const chartData: TChartData<'bar', number[], unknown> = {
  labels: [
    "1일",
    "2일",
    "3일",
    "4일",
    "5일",
    "6일",
    "7일",
  ],
  datasets: [
    {
      label: "매출",
      data: [145000, 98000, 123000, 56000, 78000, 124000, 133000],
      backgroundColor: "rgba(30, 93, 239, 1)",
      borderColor: "rgba(100, 255, 0, 1)",
      borderWidth:0, // 막대선 두께
      base:0,
      barPercentage:0.25, // 막대두께(퍼센트)
      maxBarThickness:15, // 최대 막대 두께제한
      minBarLength:5,
      indexAxis:'x',
      borderRadius:3,

    },
  ],
}

const chartOptions = {
  responsive:true,
  layout:{
    padding:{
      top:30
    },
  },
  scales:{
    x:{
      grid:{
        display:false,
        borderWidth:1,
        borderColor:'rgba(0,0,0,1)'
      },
    },
    y:{
      grid:{
        borderWidth:0,     
      },
      ticks:{
        display:false,
      },
    }
  },
  plugins:{
    tooltip:{
      enabled:false,
    },
    decimation:{
      enabled:true,
    },
    legend:{
      display:false,
    },
    datalabels:{
      color:'#292929',
      backgroundColor:'#fff',
      borderRadius:3,
      anchor:'end',
      align:'end',
      font:{
        size:10,
      },
    },
  },
}

</script>


<style lang="scss" scoped>

.contents{
  padding:10px 20px 50px 20px;
}

.main{
  .toMonth{
    align-items: flex-end;
    margin-bottom:10px;
    h2{
      font-size:28px;
      font-weight:600;
    }
    p{
      display:flex;
      span,strong{
        font-size:12px;
      }
      span{
        color:#797979;
        margin-right:10px;
      }
      strong{
        font-weight:500;
      }
    }
  }                

  .tip{
    background:#f2f2f2;
    padding:10px;
    border-radius:10px;
    margin-top:10px;
    font-size:12px;
    text-align:center;
    color:#797979;
  }

  .dashboard{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;

    p{
      background:#f8f8f8;
      width:100%;
    }

    .col{
      display:flex;
      flex-direction: column;
      gap:10px;
    }
    .box{
      min-height:80px;
      background:#f2f2f2;
      border-radius:10px;
      padding:14px;
    }
    .box.today_sales{
      height:170px;
      padding:0;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      background:#f2f2f7;
      dl{
        padding:14px;
        height:80px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        dt{
          font-size:14px;
        }
        dd{
          margin-top:5px;
          font-size:18px;
          font-weight:600;
          color:#1E5DEF;
        }
      }

      ul{
        display:flex;
        flex-direction: column;
        gap:3px;
        padding:0px 14px 14px 14px;
        li{
          span,strong{
            font-size:11px;
          }
          strong{
            font-weight:500;
          }
        }
      }
    }

    .month_sales{
      display:flex;
      flex-direction: column;
      justify-content: center;
      background:#f7f2f2;
      dl{
        dt{
          font-size:14px;
        }
        dd{
          margin-top:5px;
          font-size:18px;
          font-weight:600;
          color:#E61245;
        }
      }
    }

    .members{
      gap:10px;
      .box.member{
        flex:1;
        padding:0;
        dl{
          text-align:center;
          dt{
            font-size:12px;
          }
          dd{
            font-size:18px;
            font-weight:600;
            margin-top:5px;
          }
        }
      }
      .box.total{
        background:#292929;
        dt,dd{
          color:#fff;
        }
      }
    }
    .member_point{
      display:flex;
      flex-direction: column;
      justify-content: center;
      dt{
        font-size:14px;
      }
      dd{
        font-size:18px;
        font-weight:600;
        margin-top:5px;
      }
    }

    .message{
      align-items: center;
      background:#fff;
      border:1px solid #e2e2e2;
      gap:10px;
      span{
        display:flex;
        align-items: center;
        justify-content: center;
        background:#f2f2f2;
        font-size:20px;
        width:36px;
        height:36px;
        border-radius:18px;
      }
      strong{
        font-size:13px;
        line-height:1.3;
      }
    }
  }

  .chart{
    margin-top:50px;
  }

  .quick{
    gap:10px;
    margin-top:50px;

    h4{
      margin-bottom:15px;
      font-weight:500;
    }

    .btns{
      gap:10px;

      dl{
        flex:1;
        border:1px solid #e2e2e2;
        border-radius:10px;
        min-height:80px;

        dd{
          font-size:11px;
        }
      }
    }
  }

  .notice{
    margin-top:50px;
    h4{
      margin-bottom:15px;
      font-weight:500;
    }
    ul{
      display:flex;
      flex-direction: column;
      li{
        gap:40px;
        height:30px;
        cursor: pointer;
        span{
          font-size:14px;
        }
        span.title{
          flex:1;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        span.date{
          color:#797979;
          font-size:12px;
        }
      }

      li.new{
        span.title{
          &:before{
            content:'N';
            display:inline-block;
            text-align:center;
            line-height:12px;
            font-size:10px;
            width:12px;
            height:12px;
            background:#E61245;
            color:#fff;
            margin-right:5px;
            border-radius:2px;
            transform:translateY(-2px)
          }
        }
      }
    }
  }

  .customer{
    margin-top:50px;
    h4{
      font-weight:500;
      margin-bottom:10px;
    }
    .text{
      strong,span{
        display:block;
      }
      strong{
        font-size:20px;
        font-weight:600;
        line-height:1;
        margin-bottom:10px;
      }
      span{
        margin-bottom:3px;
        color:#797979;
        font-size:12px;

        &:last-child{
          margin-bottom:0;
        }
      }
    }

    .btns{
      margin-top:20px;
      gap:10px;
      .el-button{
        flex:1;
        height:45px;
        img{height:18px;}
        span{
          color:#292929;
          font-size:18px;
        }
        strong{
          margin-left:10px;
          color:#292929;
        }
      }
      .el-button:first-child{
        background:#72DB3D;
      }
      .el-button:last-child{
        background:#FAE100;
      }
    }

    .btns2{
      display:flex;
      flex-direction: column;
      gap:10px;
      .btn{
        cursor: pointer;
        border:1px solid #c2c2c2;
        height:45px;
        border-radius:5px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 15px;
        strong{
          font-size:14px;
        }
        span{
          color:#c2c2c2;
        }
      }
    }
  }
}
</style>