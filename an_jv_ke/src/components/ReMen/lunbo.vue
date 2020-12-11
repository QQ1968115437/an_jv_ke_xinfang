<template>
    <div data-ride="carousel" id="lunbo" class="h300 carousel">
        <div class="carousel-inner h-100">
            <div class="carousel-item h-100 active">
                <img class="w-100 h-100" src="@/img/ReMen/W0QQnZo.jpg.ac07eb9bfb18764ece4223a579c9febf.jpg" alt="">
            </div>
            <div class="carousel-item h-100">
                <img class="w-100 h-100" src="@/img/ReMen/W0QQnZo.jpg.86064d6a3156ab6266f49c23f79259a1.png" alt="">
            </div>
            <div class="carousel-item h-100">
                <img class="w-100 h-100" src="@/img/ReMen/W0QQnZo.jpg.2b1a8bcabee7deac65a88989bee2c998.jpg" alt="">
            </div>
            <ul class="carousel-indicators">
                <li data-target="#lunbo" data-slide-to="0" class="active"></li>
                <li data-target="#lunbo" data-slide-to="1"></li>
                <li data-target="#lunbo" data-slide-to="2"></li>
            </ul>
            <a href="#lunbo" data-slide="prev" class="carousel-control-prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#lunbo" data-slide="next" class="carousel-control-next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.h300{height: 300px;width: 100%;}
    /* 标识符 */
.carousel-indicators {
    padding: 4px;
    margin: 0 47%;
    border-radius: 40%;
    background-color: rgba(158, 158, 158, 0.404);
  }
  .carousel-indicators li {
    width: 11px; height: 11px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.911);
  }
  .carousel-indicators .active {
    background-color: rgb(255, 105, 19);
  }
    /* 左右箭头 */
    .carousel-control-prev,
    .carousel-control-next {
        top: 35%;
        border-radius: 10%;
        width: 4%;height: 30%;
        background-color: rgba(184, 184, 184, 0.4);
        display: none;
    }
    #lunbo:hover>div>a.carousel-control-prev,
    #lunbo:hover>div>a.carousel-control-next{
        display: flex;
    }
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        padding: 20px 14px;
    }
</style>