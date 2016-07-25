"use strict";

import React from 'react';
import {Row,Col} from '../../../src/index';
import Page from '../../component/page/index';
import Title from '../../component/title/index';
import './grid.less';

export default class ButtonDemo extends React.Component {
    constructor(props) {
      super(props);
    
      
    }


    render() {
        return (
            <Page className="grid-layout" title="Grid" spacing>
                <Title text="百分比-等分" first></Title>
                <Row className="row">
                    <Col className="color-1">1/1</Col>
                </Row>
                <Row className="row">
                    <Col className="color-2">1/2</Col>
                    <Col className="color-3">1/2</Col>
                </Row>
                <Row className="row">
                    <Col className="color-4">1/3</Col>
                    <Col className="color-3">1/3</Col>
                    <Col className="color-5">1/3</Col>
                </Row>
                <Row className="row">
                    <Col className="color-4">1/4</Col>
                    <Col className="color-3">1/4</Col>
                    <Col className="color-1">1/4</Col>
                    <Col className="color-5">1/4</Col>
                </Row>
                <Title text="百分比-自定义"></Title>
                <Row className="row">
                    <Col className="color-1" flex="1">1/3</Col>
                    <Col className="color-2" flex="2">2/3</Col>
                </Row>
                <Row className="row">
                    <Col className="color-1" flex="1">1/4</Col>
                    <Col className="color-3" flex="1">1/4</Col>
                    <Col className="color-5" flex="2">2/4</Col>
                </Row>
                <Row className="row">
                    <Col className="color-1" flex="1">1/6</Col>
                    <Col className="color-2" flex="2">2/6</Col>
                    <Col className="color-3" flex="3">3/6</Col>
                </Row>
                <Title text="左固定-右适应"></Title>
            </Page>
        );
    }
};