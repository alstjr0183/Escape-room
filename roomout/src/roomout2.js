import React, { Component } from "react";
import "./roomout2css.css";

class Roomout2 extends Component {
  // 로고 애니메이션
  logoanie() {
    const logoani = document.querySelector(".logoani");
    logoani.style.transition = "all 1.5s linear";
    logoani.style.transform = "translate(150%,0)";
  }
  // 시작버튼애니메이션
  startani() {
    const startbuttonani = document.querySelector(".startbuttonani");
    setTimeout(() => {
      startbuttonani.style.transition = "all 1.5s linear";
      startbuttonani.style.opacity = "1";
      setInterval(() => {
        startbuttonani.style.transition = "all 1.5s linear";
        startbuttonani.style.transform = "scale(0.5)";
      }, 1000);
      setInterval(() => {
        startbuttonani.style.transition = "all 1.5s linear";
        startbuttonani.style.transform = "scale(1)";
      }, 1500);
    }, 2000);
  }
  // 시작버튼클릭
  startclick() {
    const roomout2boss = document.querySelector(".roomout2boss");
    const ropeking = document.querySelector(".ropeking");
    const mousecur = document.querySelector(".mousecur");
    roomout2boss.style.display = "none";
    ropeking.style.display = "block";
    mousecur.style.display = "block";
  }

  render() {
    return (
      <div className="roomout2boss">
        <div className="roomout2backimg">
          {/* 시작 로고  */}
          <section className="startlogo">
            <img
              width="50%"
              className="logoani"
              onLoad={() => this.logoanie()}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG4ft4xx3YFyJ3y5cLzw0IiRTLUurvQzSKVH5EbqVRqU6SeaUJ"
            />
          </section>
          {/* 스타트 로고 */}
          <section className="startbutton">
            <img
              width="30%"
              className="startbuttonani"
              onLoad={() => this.startani()}
              onClick={(e) => this.startclick()}
              src="./startbutton.png"
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Roomout2;
