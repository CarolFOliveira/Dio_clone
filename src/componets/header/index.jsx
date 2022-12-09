import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '../../componets/button';
import logo from '../../assets/logo.png';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    LogoDio,
    UserPicture
    

} from './style';


const Header = ({autenticacao}) =>{
    const navigate = useNavigate();
    const HandleClickSignIn = ()=> {
        
            navigate('/login');
        
    }        
        
    const HandleRegistration = ()=>{
        navigate('/cadastro');
    }
    return(
        <Wrapper>
            <Container>
            <Row>
                <LogoDio src={logo} alt="Logo da dio"/>
                {autenticacao ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </> ) : null }   
                </Row>
                <Row>
                    {autenticacao ? (
                        <UserPicture src="https://hermes.digitalinnovation.one/users/student/1734d1b4-52e4-4437-81c7-e4ba559d7009.jpg"/>
                    ) :(
                    <>

                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={HandleClickSignIn}/>
                        <Button title="Cadastrar" onClick={HandleRegistration}/>
                    </>
                    )                   
                    }
                </Row>
                
            </Container>
        </Wrapper>
    )
}

export {Header}