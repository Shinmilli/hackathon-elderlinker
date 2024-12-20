import React from "react";
import styled from "styled-components";
import { bannerTextColor, primaryColor } from "../../styles/colors";
import { media } from "../../styles/mixin";
import SmartphoneItme from "./smartphone-item.component";

function Smartphone() {
    return (
        <>
            <Intro>
                <Wrap>
                    <Title>
                        디지털 교육의 첫걸음,
                        <br />
                        스마트폰 교육
                    </Title>
                    <Description>
                        에더링크의 교육을 통해서 쉽고, 간편하게 스마트폰을
                        이용해 보세요
                    </Description>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ContentTitle>
                            강의
                        </ContentTitle>
                    </div>
                    <Bar></Bar>

                    <Wrap>
                        <StyledInput type="checkbox" />
                        <SmartphoneItme title="smartContent1" />
                        <StyledInput type="checkbox" />
                        <SmartphoneItme title="smartContent2" />
                        <StyledInput type="checkbox" />
                        <SmartphoneItme title="smartContent3" />
                        <StyledInput type="checkbox" />
                        <SmartphoneItme title="smartContent4" />
                    </Wrap>
                </Wrap>
            </Content>
        </>
    );
}

export default Smartphone;

const Intro = styled.div`
    width: 100%;
    height: 660px;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main-smartphone.png");
    background-size: cover;
    background-position: center;

    ${media.tablet`
        height: 600px;
        background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main-smartphone.png");
    `}

    ${media.mobile`
        height: 300px;
        margin-top: 50px;
    `}
`;

const Content = styled.div`
    width: 100%;
    height: 660px;
     ${media.tablet`
    height: 500px;
`}
`;

const Wrap = styled.div`
    width: 1280px;
    height: auto;
    margin: 0 auto;

    ${Intro} > & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        height: 100%;
    }

    ${Content} > & {
        padding-top: 150px;
        align-items: center;
    }
    ${Content} > &  > & {
        height: auto;
    }

    ${media.tablet`
        width: 100%;
        padding: 0 20px;
        text-align: center;

        ${Content} > & {
            padding-top: 80px;
        }
    `}
`;

const Title = styled.p`
    font-size: 5.4rem;
    font-weight: 600;
    color: ${bannerTextColor};
    ${media.tablet`
        font-size: 5rem;
        margin-bottom: 10px
        text-align: center;
    `}

    ${media.mobile`
        font-size: 2.5rem;
        margin-bottom: 5px;
        text-align: center;
    `}
`;

const Description = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    margin-bottom: 50px;
    ${media.mobile`
        font-size: 1.5rem;
        margin-bottom: 5px;
        text-align: center;
    `}
`;

const ContentTitle = styled.p`
    padding: 0 0 10px 20px;
    font-size: 2rem;
    font-weight: 500;
    cursor: default;
    float: left;
`;

const Bar = styled.div`
    margin-bottom: 30px;
    border-bottom: 3px solid black;
`;

const StyledInput = styled.input`
    appearance: none;
    float: left;
    margin-right: 10px;
    border: 1.5px solid gainsboro;
    border-radius: 1rem;
    width: 2rem;
    height: 2rem;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${primaryColor};
    }

    ${media.tablet`
        margin-right: 5px;
        float: left;
    `}
`;
