import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Modle S</h1>
                <p>order online for Touchless Delivery</p>
            </ItemText>
            <Button>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventtory
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
            </Button>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


`
const ItemText = styled.div`
    padding-top 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    cursor: pointer;

`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin 8px;



`
const RightButton = styled(LeftButton)`

`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Button = styled.div`
    

`