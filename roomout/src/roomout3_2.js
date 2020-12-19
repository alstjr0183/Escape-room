import React, { Component } from "react";
import "./roomout3_2css.css";

class Roomout3_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      x: 0,
      y: 0,
      gugu1: Math.ceil(Math.random() * 9),
      gugu2: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
      value2: "",
      result2: "",
    };
  }
  // 창문 고양이
  intervalcat() {
    const cat = document.querySelector(".cat");
    const postcat = document.querySelector(".postcat");
    setInterval(() => {
      setTimeout(() => {
        cat.style.opacity = "1";
        postcat.style.opacity = "1";
      }, 1000);
      setTimeout(() => {
        cat.style.opacity = "0";
        postcat.style.opacity = "0";
      }, 2000);
    }, 4000);
  }
  catboxopen() {
    const catbox = document.querySelector(".catbox");
    catbox.style.display = "block";
  }
  catboxclosejs() {
    const catbox = document.querySelector(".catbox");
    const cat = document.querySelector(".cat");
    const postcat = document.querySelector(".postcat");
    catbox.style.display = "none";
    cat.style.display = "none";
    postcat.style.display = "none";
  }
  // 컴퓨터
  computer1() {
    const combox = document.querySelector(".combox");
    combox.style.display = "block";
  }
  computer2() {
    const combox = document.querySelector(".combox");
    combox.style.display = "none";
  }
  // 메모장

  onSubmit = (event) => {
    event.preventDefault();
    if (parseInt(this.state.value) === this.state.gugu1 * this.state.gugu2) {
      this.setState({
        result: "정답입니다 비밀번호는 x x x 1입니다",
        gugu1: Math.ceil(Math.random() * 19),
        gugu2: Math.ceil(Math.random() * 19),
        value: "",
      });
    } else {
      this.setState({
        result: "오답입니다 다시 입력해주세요",
        value: "",
      });
    }
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  // memoani2() {
  //   const memoani = document.querySelector(".memoani");
  //   memoani.style.width = "5%";
  // }
  // openmemo() {
  //   const canvasdraw = document.querySelector(".canvasdraw")
  //   canvasdraw.style.display = "block"
  // }
  memoani() {
    const memoani = document.querySelector(".memoani");
    const canvasdraw = document.querySelector(".canvasdraw");
    canvasdraw.style.display = "block";
    // else if (this.state.click === 2) {
    //   canvasdraw.style.display = "none"
    //   this.setState({
    //     click: this.state.click - 1
    //   })
    // }
  }
  memoclose() {
    const canvasdraw = document.querySelector(".canvasdraw");
    canvasdraw.style.display = "none";
  }
  // 시계
  clockboxopen() {
    const clockbox = document.querySelector(".clockbox");
    clockbox.style.display = "block";
  }
  clockboxclose() {
    const clockbox = document.querySelector(".clockbox");
    clockbox.style.display = "none";
  }

  //   문 비밀번호
  doorlock() {
    const doorbox = document.querySelector(".doorbox");
    doorbox.style.display = "block";
  }
  doorboxclose() {
    const doorbox = document.querySelector(".doorbox");
    doorbox.style.display = "none";
  }

  passwordjs = (event) => {
    event.preventDefault();
    const doorbox = document.querySelector(".doorbox");
    const opendoorjs = document.querySelector(".opendoorjs");
    const doorjs = document.querySelector(".doorjs");
    const doorlock = document.querySelector(".doorlock");
    if (parseInt(this.state.value2) === 1221) {
      doorbox.style.display = "none";
      opendoorjs.style.display = "block";
      doorjs.style.display = "none";
      doorlock.style.display = "none";
      this.setState({
        result2: "문이열렸습니다",
        value2: "",
      });
    } else {
      this.setState({
        result2: "비밀번호가 틀렸습니다",
      });
    }
  };
  passwordinput = (event) => {
    this.setState({
      value2: event.target.value,
    });
  };
  nextroom() {
    const roomout3boss2 = document.querySelector(".roomout3boss2");
    roomout3boss2.style.display = "none";
  }

  render() {
    return (
      <div className="roomout3boos2">
        <div className="roomout3backimg2">
          {/* 창문  */}
          <section className="window2">
            <img
              width="20%"
              src="https://cdn.pixabay.com/photo/2018/04/08/17/50/cage-3301936_960_720.png"
            />
          </section>
          <section className="windowback">22</section>
          <section className="catboss">
            <img
              className="cat"
              width="7%"
              src="https://cdn.pixabay.com/photo/2016/07/21/02/29/kitten-1531754_960_720.png"
              onLoad={this.intervalcat}
              onClick={this.catboxopen}
            />
            <setcion className="postcatboss">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/12/14/11/note-147951_960_720.png"
                className="postcat"
                width="1.4%"
              />
            </setcion>

            <section className="catbox">
              <section className="catboxclose">
                <img
                  src="https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png"
                  onClick={this.catboxclosejs}
                />
              </section>
              <img src="https://cdn.pixabay.com/photo/2013/07/12/14/11/note-147951_960_720.png" />
              <h1>X X 2 X</h1>
              <span>고양이가 물고있던 종이다</span>
              <span>
                <strong>X X 2 X</strong> 라고 적혀있는거같다
              </span>
            </section>
          </section>

          {/* 컴퓨터 */}
          <section className="comimgboss">
            <img
              className="comimg"
              width="20%"
              src="https://cdn.pixabay.com/photo/2013/07/12/15/21/desk-149741_960_720.png"
              onClick={this.computer1}
            />
          </section>
          <section className="combox">
            <img
              width="5%"
              src="https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png"
              onClick={this.computer2}
            />
            <section className="gugudanboss">
              <section className="gugudan1">
                {this.state.gugu1} 곱하기 {this.state.gugu2} 는?
              </section>
              <form className="gugudan2" onSubmit={this.onSubmit}>
                <input
                  type="number"
                  className="gugudan3"
                  value={this.state.value}
                  onChange={this.onChange}
                />
                {/* <button>입력</button> */}
                <section className="gugudan4">{this.state.result}</section>
              </form>
            </section>
          </section>
          {/* 메모장*/}
          <section className="memoboss">
            <img
              onClick={this.memoani}
              width="5%"
              src="https://cdn.pixabay.com/photo/2016/09/04/11/51/checklist-1643781_960_720.png"
            />
          </section>
          <section className="testmemo">
            <section className="canvasdraw">
              별 내용이 없는거같다
              <img
                src="https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png"
                className="xmemo"
                onClick={this.memoclose}
              />
            </section>
          </section>
          {/* 문 */}
          <section className="doorboss">
            <img className="doorjs" width="17%" src="./door.png" />
          </section>
          <section className="doorlockboss">
            <img
              width="7%"
              src="https://www.sktsmarthome.com/resources/img/upload/product/detail/default/gateman-doorlock-img1514330935761.png"
              className="doorlock"
              onClick={this.doorlock}
            />
          </section>
          <section className="dooropenboss">
            <img className="opendoorjs" width="7%" src="./opendoor.png" />
          </section>
          <section className="doorbox">
            <img
              width="10%"
              src="https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png"
              onClick={this.doorboxclose}
            />
            <form onSubmit={this.passwordjs}>
              <input
                type="password"
                placeholder="비밀번호"
                value={this.state.value2}
                onChange={this.passwordinput}
              />
              <section>{this.state.result2}</section>
            </form>
          </section>
          <section className="nightboss">
            <img className="night" src="./night.png" onClick={this.nextroom} />
          </section>
          {/* 시계 */}
          <section>
            <section className="clockimg">
              <img width="10%" src="./clock.png" onClick={this.clockboxopen} />
            </section>
            <section className="clockbox">
              <img
                width="10%"
                src="https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png"
                onClick={this.clockboxclose}
              />
              <img width="100%" src="./clock.png" />
              <span>
                시계바늘이 <strong>12</strong> 에멈춰있다.
              </span>
              <span>고장난 시계인거같다.</span>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default Roomout3_2;
