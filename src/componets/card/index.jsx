import React from 'react';
import {FiThumbsUp} from "react-icons/fi";
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './style';

const Card = ({bgImg, userImg,name,postTitle}) => {
    return(
        <CardContainer>
            <ImageBackground src={bgImg}/>
            <Content>
                <UserInfo>
                    <UserPicture src={userImg}/>
                    <div>
                        <h4>{name}</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>{postTitle}</h4>
                    <p>Projeto feito para o curso de Html/Css/Js no bootcamp dio OrangeTech+...<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}
export{Card}