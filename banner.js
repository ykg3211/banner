var main = {
  y: 600, // 鼠标横坐标
  girlIndex: 1, // 显示的女孩index
  // 获取各个元素
  background: document.getElementsByClassName('background')[0],
  girl_1: document.getElementsByClassName('girl_1')[0],
  girl_2: document.getElementsByClassName('girl_2')[0],
  girl_3: document.getElementsByClassName('girl_3')[0],
  girl_4: document.getElementsByClassName('girl_4')[0],
  front_1: document.getElementsByClassName('front_1')[0],
  front_2: document.getElementsByClassName('front_2')[0],
  front_3: document.getElementsByClassName('front_3')[0],
  front_4: document.getElementsByClassName('front_4')[0],
  init() {
    this.startWink();
    document.body.addEventListener('mousemove', (e) => {
      this.y = JSON.parse(JSON.stringify(e.screenX));
      this.setBlur();
    })
  },
  // 开始眨眼定时器
  startWink() {
    this.singleWink();
    setInterval(() => {
      this.singleWink();
    }, 4000);
  },
  // 一次眨眼动作
  singleWink() {
    let winktimer = setInterval(() => {
      if (this.girlIndex === 4) {
        this.girlIndex = 1;
        this.wink(this.girlIndex);
        clearInterval(winktimer);
      } else {
        this.girlIndex++;
        this.wink(this.girlIndex);
      }
    }, 80);
  },
  // 根据index来隐藏展示女孩图片
  wink(index) {
    this.girl_1.style.display = index === 1 ? '' : 'none';
    this.girl_2.style.display = index === 2 ? '' : 'none';
    this.girl_3.style.display = index === 3 ? '' : 'none';
    this.girl_4.style.display = index === 4 ? '' : 'none';
  },
  // 获取高斯模糊数值
  getBlur(index) {
    let step = 230 * index;
    let a = Math.abs(this.y - step);
    return a / 50;
  },
  // 获取图片定位
  getBackPosition(index) {
    return ((this.y - 600) * index / 100) - 30;
  },
  // 设置各个元素的属性
  setBlur() {
    this.background.style.filter = 'blur('+this.getBlur(1)+'px)';
    this.girl_1.style.filter = 'blur('+this.getBlur(2)+'px)';
    this.girl_2.style.filter = 'blur('+this.getBlur(2)+'px)';
    this.girl_3.style.filter = 'blur('+this.getBlur(2)+'px)';
    this.girl_4.style.filter = 'blur('+this.getBlur(2)+'px)';
    this.front_1.style.filter = 'blur('+this.getBlur(3)+'px)';
    this.front_2.style.filter = 'blur('+this.getBlur(4)+'px)';
    this.front_3.style.filter = 'blur('+this.getBlur(5)+'px)';
    this.front_4.style.filter = 'blur('+this.getBlur(6)+'px)';

    this.background.style.backgroundPosition = this.getBackPosition(1)+'px 0px';
    this.girl_1.style.backgroundPosition = this.getBackPosition(2)+'px 0px';
    this.girl_2.style.backgroundPosition = this.getBackPosition(2)+'px 0px';
    this.girl_3.style.backgroundPosition = this.getBackPosition(2)+'px 0px';
    this.girl_4.style.backgroundPosition = this.getBackPosition(2)+'px 0px';
    this.front_1.style.backgroundPosition = this.getBackPosition(3)+'px 0px';
    this.front_2.style.backgroundPosition = this.getBackPosition(4)+'px 0px';
    this.front_3.style.backgroundPosition = this.getBackPosition(5)+'px 0px';
    this.front_4.style.backgroundPosition = this.getBackPosition(6)+'px 0px';
  }
}

// 程序入口
main.init();