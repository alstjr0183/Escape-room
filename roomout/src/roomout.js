import React , {Component} from "react"
import "./roomoutcss.css"
import Roomout2 from "./roomout2"
import Roomout3 from "./roomout3"
import Roomout4 from "./roomout4"

class Roomout1 extends Component {
    drag1=(event)=>{
        event.preventDefault()
    }
    render (){
        return(
            <div
            onContextMenu={this.drag1}
            onDragStart={this.drag1}
            // onDragStart={this.drag1}
            >
                <section className="roomout2">
                    <Roomout2 />
                </section>
                <section className="roomout3">
                    <Roomout3 />
                </section>
                <section>
                    <Roomout4 />
                </section>
            </div>
        )
    }
}

export default Roomout1;