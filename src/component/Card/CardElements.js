import styled, { keyframes } from 'styled-components'
export const Cards = styled.div`
            height: 600px;
            width: 370px;
            border: 2px solid black;
            background-image: linear-gradient(rgb(29, 27, 27), rgb(15, 15, 15));
            border-radius: 5px;
            color: white;
            margin:25px;
            @media only screen and (max-width:728px){
        margin-left: 0;
        margin-top: 5px;
        width: 90%;
    }
`
export const CardContent = styled.div`
            justify-content: center;
            text-align: center;
            position:relative;
`
export const CardImage = styled.div`
            height: 160px;
            width: 160px;
            border-radius: 50%;
            background-color: #1c1d2b;
            margin: auto;
            margin-top: 25px;
            -webkit-box-shadow: 0px 2px 24px 11px rgba(255, 0, 140, 0.86);
            box-shadow: 0px 2px 24px 11px rgba(255, 0, 140, 0.86);
`
export const BloodGroup = styled.div`
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: brown;
            border: 4px solid yellow;
            margin: auto;
            top: -12px;
            left: 65px;
            position: absolute;

`
export const CardText = styled.h1`
            font-size: 30px;
            font-weight: 400;
            padding: 5px;
            margin-top: 10px;
            text-transform: capitalize;
`
export const CardIcon = styled.div`
            display: flex;
`
export const CardIconElement = styled.div`
            display: flex;
            margin-left: 50px;
            margin-top: 10px;
`
export const CardIconText = styled.h3`
            font-size: 18px;
            margin-left: 5px;
            font-weight: 300;
            text-transform: capitalize;
`
export const CardExpandText = styled.h3`
            font-size: 18px;
            margin-left: 5px;
            font-weight: 300;
            margin-left: 10px;
            margin-top: 15px;
`
const rotate = keyframes`
     from {
    border:3px solid red;
  }

  to {
    border:3px solid yellow;
  }
`
export const CardBox = styled.div`
            width: 150px;
            height: auto;
            border: 3px solid rgb(255, 255, 51);
            padding:10px;
            margin: auto;
            font-size: 20px;
            font-weight: 400;
            margin-top: 35px;
            text-align:center;
        &:hover{
            color:yellow;
            border: 3px solid red;
            animation:${rotate} 2s linear infinite;
        }
`

