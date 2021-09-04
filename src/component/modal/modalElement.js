import styled from "styled-components";
export const ModalWrapper = styled.div`
position: absolute;
    left: 0;
    right: 0;
    top: auto;
    z-index: 90;
    background-color: rgba(255, 255, 255, 0.096);
    backdrop-filter: blur(2px);
    cursor: pointer;
`
export const Modals = styled.div`
width: 450px;
    z-index: 99;
    left: 50%;
    top: 50%;
    position: absolute;
    border-radius: 5px;
    background-color: #171c2a;
    transform: translateX(-50%) translateY(-50%);
    border: 3px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, #52d794,  #00b3bd);
`
export const ModalTitle = styled.p`
padding: 2rem;
    color: #fff;
    font-size: 1.4rem;
`
export const ModalBody = styled.div`
padding: 2rem;
`
export const ModalClose = styled.div`
 width: 24px;
    height: 24px;
    display: grid;
    place-content: center center;
    background: #eee;
    border-radius: 100%;
    color: #0e0e12;
    text-decoration: none;
    font-size: 3rem;
    transform: rotate(45deg);
    position: absolute;
    right: -2px;
    top: -8px;
`
export const ModalForm = styled.div`
 width: 90%;
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 10px;
    margin: 0 auto;
`
export const Name = styled.p`
 text-transform: capitalize;

`
export const Value = styled.p`
 text-transform: capitalize;
`