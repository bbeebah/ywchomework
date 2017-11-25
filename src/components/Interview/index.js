import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Container,Row, Col } from 'reactstrap';

import Footer from '../Footer';
import logo from '../App/logo.png';
import './style.css';

export default class Interview extends Component{
    render(){
        return(
            <div>
                <div style={{marginTop: '80px'}}>
                </div>
                <Container>
                    <Row>
                        <Col xs={0} sm={1} md={2} lg={3}>
                        </Col>
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <a href="/"><img src={logo}  className="inter-logo" ></img></a>
                        </Col>
                        <Col xs={0} sm={1} md={2} lg={3}>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '30px'}}>
                        <Col xs={0} sm={1} md={2} lg={2}>
                        </Col>
                        <Col xs={12} sm={10} md={8} lg={8}>
                            <p style={{textAlign:'center'}}>การสัมภาษณ์จะจัดขึ้นในวันที่ 26 พฤศจิกายน 2560 <br /> ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) 
                        <br />ซึ่งจะแบ่งออกเป็น 2 รอบ คือ รอบช่วงเช้าตั้งแต่เวลา 9.00 น. ถึง 12.00 น. และ รอบช่วงบ่ายตั้งแต่เวลา 13.00 น. ถึง 18.00 น.</p>
                        </Col>
                        <Col xs={0} sm={1} md={2} lg={2}>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '30px'}}>
                        <Col xs={0} sm={1} md={2} lg={2}>
                        </Col>
                        <Col xs={12} sm={10} md={8} lg={8}>
                            <p > <span style={{textDecoration:'underline'}}>สิ่งที่ต้องเตรียมมาในวันสัมภาษณ์</span> <br/>
                            1. บัตรประชาชนสำหรับการแลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) และ บัตรนักศึกษาสำหรับการลงทะเบียนสัมภาษณ์ กรุณาแต่งกายด้วยชุดนักศึกษา <br/>
                            2. การบ้านและสิ่งที่กรรมการสาขากำหนดไว้ กรุณาอ่านรายละเอียดการบ้านและสิ่งที่กรรมการให้เตรียมมาให้ครบถ้วน หากสาขาใดต้องใช้โน้ตบุ๊ค ควรชาร์ตแบตเตอรี่และเตรียมอินเทอร์เน็ตส่วนตัวมาให้พร้อม เนื่องจากสถานที่ไม่มีบริการอินเทอร์เน็ตให้ใช้<br/>
                            3. Portfolio สามารถนำมาประกอบการสัมภาษณ์ได้ สำหรับน้อง ๆ สาขาดีไซน์จะต้องนำ Portfolio มาด้วยทุกคน</p>
                        </Col>
                        <Col xs={0} sm={1} md={2} lg={2}>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '30px'}}>
                        <Col xs={0} sm={1} md={2} lg={2}>
                        </Col>
                        <Col xs={12} sm={10} md={8} lg={8}>
                            <p > <span style={{textDecoration:'underline'}}>การเดินทางมาสัมภาษณ์</span> <br/>
                            1. ด้วยรถไฟฟ้า BTS สามารถลงสถานีศาลาแดง ณ ทางออกที่ 2 <br/>
                            2. ด้วยรถไฟฟ้า MRT สามารถลงสถานีสีลม ณ ทางออกที่ 2 โดยเดินเรียบทางเท้าไปตามถนนสีลม<br/>
                            3. ด้วยรถประจำทาง สามารถขึ้นใช้บริการสาย 15, 77, 155, 504, 177, 76</p>
                        </Col>
                        <Col xs={0} sm={1} md={2} lg={2}>
                        </Col>
                    </Row>
    
                </Container>
                <Footer />
            </div>
        );
    }
}