import React, { Component } from "react";
import "./roomout3css.css";
import Roomout3_1 from "./roomout3_1";
import Roomout3_2 from "./roomout3_2";

class Roomout3 extends Component {
  constructor(probs) {
    super(probs);
    this.mousecure = this.mousecure.bind(this);
    this.state = {
      x: 0,
      y: 0,
      check: 0,
      check: 1,
    };
  }
  // state = {
  //     check:0,
  //     check:1,
  // }
  // 마우스커스 이벤트
  mousecure(event) {
    const mousecur = document.querySelector(".mousecur");
    mousecur.style.postion = "absolute";
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
    mousecur.style.left = this.state.x - 100 + "px";
    mousecur.style.top = this.state.y + "px";
    // mousecur.style.zIndex = "99"
    // mousecur.style.left = cursorx + "px"
    // mousecur.style.top = cursory + "px"
  }
  // 밧줄 조명 onoff 이벤트
  ropee() {
    const rope = document.querySelector(".rope");
    rope.style.transition = "all 0.3s linear";
    rope.style.transform = "translate(0,10%)";
  }
  ropee2() {
    const rope = document.querySelector(".rope");
    const light2 = document.querySelector(".light2");
    const roomout3backimg = document.querySelector(".roomout3backimg");
    const roomout3backimg2 = document.querySelector(".roomout3backimg2");
    rope.style.transition = "all 0.3s linear";
    rope.style.transform = "translate(0,-10%)";
    if (this.state.check === 1) {
      light2.style.zIndex = "2";
      roomout3backimg2.style.display = "block";
      roomout3backimg.style.display = "none";
      this.setState({
        check: this.state.check + 1,
      });
    } else {
      light2.style.zIndex = "1";
      roomout3backimg2.style.display = "none";
      roomout3backimg.style.display = "block";
      this.setState({
        check: this.state.check - 1,
      });
    }
  }
  render() {
    return (
      <div className="roomout3bosscss">
        <div className="roomout3boos" onMouseMove={this.mousecure}>
          <section className="mousecurboss">
            <img width="5%" className="mousecur" src="hand.png" />
          </section>
          <section className="ropeking">
            <section className="lightcase">
              <img width="10%" src="./triangle.png" />
            </section>
            <section className="lightboss">
              <img className="light1" width="6%" src="./light1.png" />
              <img className="light2" width="6%" src="./light2.png" />
            </section>
            <section className="ropeboss">
              <img
                className="rope"
                width="20%"
                height="60%"
                src="./rope.png"
                onMouseDown={() => this.ropee()}
                onMouseUp={() => this.ropee2()}
              />
            </section>
          </section>
          <div className="fixbox2">
            <Roomout3_1 />
          </div>
          <div className="fixbox3">
            <Roomout3_2 />
          </div>
        </div>
      </div>
    );
  }
}

export default Roomout3;
