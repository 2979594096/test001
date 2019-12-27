import React from 'react';
import axios from 'axios'
class Info extends React.Component {
    componentDidMount(){
        axios.get("/js/data.json").then((res)=>{
            console.log(res.data)
            this.setState({
                data:res.data.pringInfo
            })
        })
    }
    
    state={data:""}
    render() {
        let {data}=this.state
        return (<div className="infoBox">
                    <div className="imgBox"><img src="/img/logo.png" alt=""/></div>
                    <div className="headTop">
                        <p onClick={()=>this.props.history.goBack(-1)}><i className="iconfont icon-fanhui1"></i></p>
                        <p><input type="text" placeholder="请输入商家名、品类或者商圈"/></p>
                        <p><i className="iconfont icon-wode"></i></p>
                    </div>

                    <div className="dlbox">
                            <dl>
                            <dt> <img src="/img/201.png" alt=""/></dt>
                            <dd>火锅</dd>
                            </dl>
                            <dl>
                            <dt> <img src="/img/202.png" alt=""/></dt>
                            <dd>甜点饮品</dd>
                            </dl>
                            <dl>
                            <dt> <img src="/img/203.png" alt=""/></dt>
                            <dd>自助餐</dd>
                            </dl>
                            <dl>
                            <dt> <img src="/img/204.png" alt=""/></dt>
                            <dd>小吃快餐</dd>
                            </dl>
                            <dl>
                            <dt> <img src="/img/205.png" alt=""/></dt>
                            <dd>西餐</dd>
                            </dl>
                            <dl>
                            <dt> <img src="/img/206.png" alt=""/></dt>
                            <dd>烧烤烤肉</dd>
                            </dl>
                            <dl>
                            <dt> <img src="/img/207.png" alt=""/></dt>
                            <dd>香锅烤鱼</dd>
                            </dl>
                            <dl>
                            <dt> <img src="/img/208.png" alt=""/></dt>
                            <dd>海鲜</dd>
                            </dl>
                    </div>
                    <div className="ulBox">
                        <ul>
                            <li>全部类目</li>
                            <li>附近商家</li>
                            <li>智能排序</li>
                            <li>筛选</li>
                        </ul>
                    </div>
                    <div className="infoBox">
                        {
                            this.state.data ? (
                                data.map((v,i)=>{
                                    return  <div className="everyBox" key={i}>
                                    <dl>
                                        <dt><img src={v.img} alt=""/></dt>
                                        <dd>
                                            <p>{v.name}</p>
                                            <p><span><span>{v.xing}</span>￥{v.price}/人</span><span>{v.add}</span></p>
                                            <p>{v.spe}</p>
                                            <p>支持外卖</p>
                                        </dd>
                                    </dl>
                                    <div> <img src="/img/textlogo.png" alt=""/> 单人26元，53元鸡盒双人餐，58.5元三人餐</div>
                                </div>
                                })
                            ) : null
                        }
                       
                      
                    </div>
            </div>)
    }
}
export default Info;