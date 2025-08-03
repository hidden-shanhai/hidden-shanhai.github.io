// 倒计时逻辑
let time = 10;
let timer = setInterval(() => {
  time--;
  document.getElementById("timer").textContent = time;
  if (time <= 0) {
    clearInterval(timer);
    alert("❌ 领取资格已过期！");
    document.getElementById("claimBtn").disabled = true;
    document.getElementById("claimBtn").textContent = "领取失败";
  }
}, 1000);

// 点击整蛊按钮
document.getElementById("claimBtn").addEventListener("click", () => {
  clearInterval(timer);

  // 网页震动效果
  let count = 0;
  let interval = setInterval(() => {
    document.body.style.marginLeft = (count % 2 === 0 ? "10px" : "-10px");
    count++;
    if (count > 10) {
      clearInterval(interval);
      document.body.style.marginLeft = "0";
    }
  }, 50);

  // 弹出提示 + 页面变色 + 改内容
  setTimeout(() => {
//    alert("😂 你还真信了啊，老傻子！");
    document.body.style.backgroundColor = "#ff0000";
    document.body.innerHTML = `
      <div style="color:white;text-align:center;padding:100px;">
        <h1 style="font-size: 60px;">你被骗了！</h1>
        <p style="font-size: 24px;">😂 你还真信了啊，刘宇阳你个老傻子！<strong></strong></p>
        <p style="margin-top:20px;"> 😎</p>
      </div>
    `;
  }, 400);
});
