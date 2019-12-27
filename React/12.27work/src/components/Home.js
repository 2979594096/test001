import React from 'react';
import {withRouter} from "react-router-dom"
import axios from 'axios'
class Home extends React.Component {
    componentDidMount(){
        axios.get("/js/data.json").then((res)=>{
            this.setState({
                data:res.data.dataInfo
            })
        })
    }
    clickFn=()=>{
        // console.log(1111)
        this.props.history.push("/info")
    }
    state={data:""}
    render() {
        let {data}=this.state
        return (<div className="homeBox">
                <div className="headTop">
                    <p>北京</p>
                    <p><input type="text" placeholder="请输入商家名、品类或者商圈"/></p>
                    <p><i className="iconfont icon-wode"></i></p>
                </div>
                <section>
                    <div className="dlBox">
                    <dl onClick={()=>this.clickFn()}>
                    <dt><img src="/img/images/QQ图片20191227151919_03.jpg" alt=""/></dt>
                    <dd>美食</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_05.jpg" alt=""/></dt>
                    <dd>猫眼电影</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_07.jpg" alt=""/></dt>
                    <dd>酒店</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_09.jpg" alt=""/></dt>
                    <dd>休闲娱乐</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_11.jpg" alt=""/></dt>
                    <dd>外卖</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_18.jpg" alt=""/></dt>
                    <dd>KTV</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_19.jpg" alt=""/></dt>
                    <dd>周边游</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_20.jpg" alt=""/></dt>
                    <dd>丽人</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_21.jpg" alt=""/></dt>
                    <dd>小吃快餐</dd>
                </dl>
                <dl>
                    <dt><img src="/img/images/QQ图片20191227151919_22.jpg" alt=""/></dt>
                    <dd>生活服务</dd>
                </dl>
                    </div>

                    <div className="textBox">猜你喜欢</div>
                    <div className="infoBox">
                    {
                        this.state.data ? (data.map((v,i)=>{
                            return <dl key={i}>
                            <dt><img src={v.img} alt=""/></dt>
                            <dd>
                                <p>{v.name}</p>
                                <p>{v.spe}</p>
                                <p><span><span>{v.price}元 </span> 门市价:{v.del}元</span><span>已售{v.mail}</span></p>
                            </dd>
                            </dl>
                        })) : null
                    }
                        
                    </div>


                </section>


            </div>)
    }
}

export default withRouter(Home);