import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;
    padding: 1%;
    width: 32%;
    border-radius: 13px;
    background: ${({theme}) => theme.background};
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
`

export const BoxInfo = styled.View`
    width: 96%;
    background: ${({theme}) => theme.background};
    border-width: 2px;
    border-color: ${({theme}) => theme.inline};
    border-radius: 13px;
    padding: 3%;
`

export const Name = styled.Text`
    margin-bottom: 3%;
    font-size: ${({theme}) => theme.font.size.medium+'px'};
    color: ${(props) => props.theme.color};
`