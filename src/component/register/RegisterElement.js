import styled from 'styled-components'
export const Applys = styled.div`
    display: flex;
    width: 70rem;
    background-color: #18191f;
    height: 100%;
    margin: auto;
    margin-top: 30px;
    border-radius: 5px;
    flex-wrap: wrap;
    @media only screen and (max-width: 728px) {
          width: 100%;
            }
`
export const Announce = styled.div`
    width: 35%;
    height: 30rem;
    padding: 10px;
    border-radius: 10px;
    margin: 20px;
    background-color: #050818;
    text-transform: capitalize;
    @media only screen and (max-width: 728px) {
                display: none;
            }
`
export const FormDiv = styled.div`
    width: 55%;
    height: 30rem;
    padding: 5px;
    border-radius: 10px;
    margin: 20px;
    background-color: #14b388;
    @media only screen and (max-width: 728px) {   
            width: 90%;
            }
    @media only screen and (max-width: 550px) {   
            width: 90%;
    }
`
export const InputBox = styled.div`
    padding: 10px;
    margin: 15px;
`
export const InputHeader = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: white;
    margin-bottom: 5px;
`
export const Input = styled.input`
    font-size: 15px;
    font-weight: 300;
    color:#06041c ;
    border: 3px solid yellow;
    width: 40%;
    border-radius: 5px;
    &:focus{
        outline: none;
    }
    @media only screen and (max-width: 728px) {
                
                width: 85%;

            }
`
export const InputSubmitButton = styled.button`
    background-color: aqua;
    border: 1px solid #121212;
    font-weight: 500;
    font-size: 20px;
    outline: none;
    width: 150px;
    padding: 5px;
    border-radius: 15px;
    margin-bottom: 15px;
    margin-left: 30px;
    cursor: pointer;
    @media only screen and (max-width: 728px) {
                
                width: 65%;

            }
`
export const AnnounceMsg = styled.div`
    font-size: 25px;
    letter-spacing: 1.5px;
    font-weight: 400;
    color: white;
    font-family:'Times New Roman', Times, serif;
    margin-top:150px;
    margin-left: 50px;
`