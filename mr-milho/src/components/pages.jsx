import React from 'react'
import Home from './home';
import Analyzer from './analyzer/analyzer';
import styled from "styled-components"
import { Routes, Route } from "react-router-dom";

const Wrap = styled.section`
min-height: 90vh;
`;

const Pages = () => {

    return (
        <Wrap>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/analyzer' element={<Analyzer />} />
            </Routes>
        </Wrap>

    );
}

export default Pages;