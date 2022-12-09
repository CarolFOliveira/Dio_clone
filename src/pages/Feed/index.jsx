
import { Header } from '../../componets/header';

import{Container, Title, TitleHighLight, Column} from './style';
import {Card} from '../../componets/card';
import {UserInfo} from '../../componets/UserInfo';

const Feed = ()=>{

    return(<>
        <Header autenticacao={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GVVvIsjJ1r4yEaxaLzGvhcFl3Ra1FcbHDw&usqp=CAU"
                        userImg="https://hermes.digitalinnovation.one/users/student/1734d1b4-52e4-4437-81c7-e4ba559d7009.jpg"
                        name="Carol Ferreira"
                        postTitle='Projeto HTML || CSS || JS'/>
                    
                    <Card bgImg="https://hermes.digitalinnovation.one/articles/cover/ef368cfe-a55f-45c4-8432-e58d204c59b1.jpg"
                        userImg="https://tse4.mm.bing.net/th?id=OIP.zbR5gTY1MESwTVdNTXQJOAHaHa&pid=Api&P=0"
                        name="Daniel Bins"
                        postTitle="ROTEIRO DE ESTUDOS PARA APRENDER JS"/>
                    
                    <Card bgImg="https://hermes.digitalinnovation.one/articles/cover/80bed4bf-e049-4a4f-9a72-7c0f40800a34.png"
                        userImg="https://tse2.mm.bing.net/th?id=OIP.QcvVBroHSTb4VhYxUr09MAHaHa&pid=Api&P=0"
                        name="Malu DIO"
                        postTitle="DIO NEWS #49"/>
                    
                    <Card bgImg="https://hermes.digitalinnovation.one/articles/cover/7a5bbc4a-bf1e-4e0a-b35d-cee85125b915.png"
                        userImg="https://tse1.mm.bing.net/th?id=OIP.iGd0w5C8Wh6BEo9gmShw2QHaFs&pid=Api&P=0"
                        name="Bruno Almeida"
                        postTitle="CSS"/>
                    
                </Column>
                <Column flex={1}>
                    <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo name="Carol Ferreira" percentual={65} image ="https://hermes.digitalinnovation.one/users/student/1734d1b4-52e4-4437-81c7-e4ba559d7009.jpg" />
                    <UserInfo name="Antônio Oliveira" percentual={52} image ="https://tse4.mm.bing.net/th?id=OIP.zbR5gTY1MESwTVdNTXQJOAHaHa&pid=Api&P=0" />
                    <UserInfo name="Ester Magalhães" percentual={57} image ="https://tse2.mm.bing.net/th?id=OIP.QcvVBroHSTb4VhYxUr09MAHaHa&pid=Api&P=0" />
                    <UserInfo name="João Carlos" percentual={23} image ="https://tse1.mm.bing.net/th?id=OIP.iGd0w5C8Wh6BEo9gmShw2QHaFs&pid=Api&P=0" />
                    <UserInfo name="Lívia Souza" percentual={75} image ="https://tse2.mm.bing.net/th?id=OIP.QcvVBroHSTb4VhYxUr09MAHaHa&pid=Api&P=0" />
                </Column>
            </Container>
        
            </>)
}
export {Feed}