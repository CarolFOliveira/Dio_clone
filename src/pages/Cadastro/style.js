import styled from 'styled-components';

export const Container = styled.main `
    width:100%;
    max-width: 80%;
    margin:0 auto;
    margin-top:100px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
`
export const Wrapper = styled.div`
    max-width: 300px;

`
export const Column = styled.div`
    flex:1;
    
`
export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
    
`

export const Title = styled.h2`
    font-family:'Open-Sans';
    font-style: normal;
    font-weight:700;
    font-size:32px;
    width:388px;
    height: 308px;
    margin-top:0;
    line-height:44px;
    color: #fff;
`
export const TitleLogin = styled.p`
    font-family:'Open-Sans';
    font-style: normal;
    font-weight:700;
    font-size:32px;
    width:370px;
    margin-bottom:10px;
    line-height:44px;
    
`


export const SubtitleLogin = styled.p`
    font-family:'Open-Sans';
    font-style: normal;
    font-weight:400;
    font-size:18px;
    margin-bottom:20px;
    line-height:25px;
    width: 370px;
    
    
`
export const DescriptionText = styled.p`
    
    font-family:'Open-Sans';
    font-style: normal;
    font-weight:400;
    font-size:18px;
    margin-top: 30px;
    margin-bottom:20px;
    line-height:25px;
    color:#fff;
    width: 372px;
    height:75px;
`
export const CriarText = styled.p`
    font-family:'Open-Sans';
    font-style: normal;
    font-weight:700;
    font-size:14px;
    margin-top:20px;
    line-height:19px;
    color:#FFF;
`
export const Redirecionar = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color:#23DD7A;
    text-decoration: none;
`