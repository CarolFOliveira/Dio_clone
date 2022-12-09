import React from "react";

import {Container, UserPicture, NameText, Progress} from './style';

const UserInfo = ({image, name, percentual}) => {
    return(
        <Container>
            <UserPicture src={image} />
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
    
    
}

export {UserInfo}