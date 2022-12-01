<template>
  <div class="machine_detail">
    <div class="page_top">
      <div class="title">
        <div class="labels">
          <span class="enable">연결됨</span>
        </div>
        <h2>1번세탁기 27Kg</h2>
      </div>
      <div class="row">
        <dl>
          <dt>등록된 상품수</dt>
          <dd>{{product.length}}</dd>
        </dl>
        <el-button plain @click="visible = true">
          <span class="material-icons">
            add
          </span>
          <strong>
            상품등록
          </strong>
        </el-button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="list">
      <draggable
        :list="product"
        :disabled="false"
        ghost-class="ghost-item"
        @start="dragging = true"
        @end="dragging = false"
        tag="transition-group"
        handle=".icon"
      >
        <template #header>
          <div class="list-header">
            <div class="guide">
              <span class="material-icons">
                unfold_more
              </span>
              <strong>
                왼쪽 아이콘을 드래그 하여 상품을 끌어 옮기시면 순서가 변경됩니다.
              </strong>
            </div>
          </div>
        </template>
        <template #item="{element, index}">
          <div class="item">
            <div class="middle row">
              <div class="number">
                {{index+1}}
              </div>
              <div class="icon">  
                <span class="material-icons">
                  unfold_more
                </span>
              </div>
              <div class="info">
                <strong>{{element.name}}</strong>
                <div class="option row">
                  <dl class="row price">
                    <dt>가격</dt>
                    <dd>{{element.price}}원</dd>
                  </dl>
                  <dl class="row">
                    <dt>시간</dt>
                    <dd>30분</dd>
                  </dl>
                </div>
              </div>  
            </div>
            <div class="bottom">
              <el-button>수정</el-button>
              <el-button @click="visible2 = true">삭제</el-button>
            </div>
          </div>
        </template>
      </draggable>

      <div class="page_bottom">
        <el-button plain>
          저장하기
        </el-button>
      </div>
      
    </div>

    <modalAddProduct v-model="visible"/>
    <modalConfirm v-model="visible2"/>
  </div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'

definePageMeta({
  layout:'sub',
  name:'상품관리'
})

const visible = ref(false)
const visible2 = ref(false)

const dragging = ref(false)
const product = ref([
  {id: 0, name:' [30분] 표준코스(세탁1+헹굼2)',price:'6,000원' },
  {id: 1, name:' [45분] 표준코스(세탁1+헹굼2)',price:'7,000원' },
  {id: 2, name:' [60분] 표준코스(세탁1+헹굼2)',price:'8,000원' },
  {id: 3, name:' [75분] 표준코스(세탁1+헹굼2)',price:'9,000원' },
  {id: 4, name:' [75분] 표준코스(세탁1+헹굼2)',price:'9,000원' },
  {id: 5, name:' [75분] 표준코스(세탁1+헹굼2)',price:'9,000원' },
  {id: 6, name:' [75분] 표준코스(세탁1+헹굼2)',price:'9,000원' },
])

const checkMove = (e) => {
  return (e.draggedContext.element.id !== 1)
}
</script>

<style lang="scss" scoped>
.page_top{
  padding:20px;

  .title{
    margin-bottom:20px;
    h2{
      font-size:24px;
      font-weight:600;
    }
    .labels{
      display:flex;
      align-items: center;
      gap:10px;
      margin-bottom:5px;
      span{
        display:flex;
        justify-content: center;
        align-items: center;
        padding:0 5px;
        height:20px;
        color:#fff;
        font-size:11px;
        border-radius:3px;
      }
      span.enable{
        background:#1E5DEF;
      }
      span.disable{
        background:#E61245;
      }
    }
  }
  .row{
    gap:10px;
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:0 14px;
      flex:1;
      border-radius:5px;
      background:#f5f5f7;
      dt{
        font-size:14px;
        color:#797979;
      }
      dd{
        font-size:18px;
        font-weight:500;
        color:#1E5DEF;
      }
    }
    .el-button{
      height:50px;
      border:2px solid #1E5DEF;
      span{
        color:#1E5DEF;
        margin-right:5px;
        font-size:20px;
      }
      strong{
        color:#1E5DEF;
      }
    }
  }
}

.divider{
  height:10px;
  background:#f2f2f2;
}

.list{
  padding:20px;
  padding-bottom:70px;

  .list-header{
    margin-bottom:15px;

    .guide{
      display:flex;
      background:#F9F2F4;
      padding:14px;
      border-radius:5px;

      span{
        margin-right:10px;
        font-size:18px;
        margin-top:3px;
      }
      strong{
        font-size:14px;
      }
    }
    
  }

  
  .ghost-item{
    background:#E4E9F5;
  }
  .item{
    border:1px solid #e2e2e2;
    margin-bottom:10px;
    border-radius:5px;
    overflow: hidden;

    .middle{
      position: relative;
      align-items: center;

      .number{
        display:flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right:10px;
        top:10px;
        width:20px;
        height:20px;
        background:#292929;
        color:#fff;
        font-size:12px;
        border-radius:10px;
      }
      .icon{
        padding:12px;
        span{
          color:#c2c2c2;
        }
      }
      .info{
        padding:12px;
        padding-left:0px;
        strong{
          font-size:14px;
          font-weight:500;
        }
        .option{
          gap:10px;
          dl{
            align-items: center;
            margin-top:5px;
            dt,dd{
              font-size:12px;
            }
            dt{
              color:#797979;
              margin-right:5px;
            }
            dd{
              font-weight:500;
            }
          }

          dl.price{
            dd{
              color:#E61245;
            }
          }
        }
      }
    }
    .bottom{
      display:flex;
      justify-content: flex-end;
      border-top:1px solid #e2e2e2;
      gap:5px;
      padding:6px 6px;
      background:#f5f5f7;

      .el-button{
        font-size:12px;
        height:30px;
      }
    }
  }
}

.page_bottom{
  position: fixed;;
  bottom:0;
  left:0;
  width:100%;
  display:flex;

  .el-button{
    width:100%;
    border:0;
    border-radius:0;
    height:50px;
    background:#1E5DEF;
    color:#fff;
  }
}
</style>