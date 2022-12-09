import {useNavigate} from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md";
 
import { Button } from '../../componets/button';
import { Header } from '../../componets/header';
import {api} from '../../services/api'
import{Container, Wrapper,Column,Row,Title,SubtitleLogin,TitleLogin ,EsqueciText,CriarText} from './style';
import {Input} from '../../componets/input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email('email não é válido').required(),
    password: yup.string().min(3,'No mínimo 3 caracteres').required(),
  }).required();


const Login = ()=>{
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
    });
    console.log(errors, isValid)
    const onSubmit = async formData =>{
        try {
            const{data}= await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1){
                navigate('/feed')
            }else {
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente')
        }
    }



    return(<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password"leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary"  type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText><a href="/cadastro"> Criar Conta</a></CriarText>
                    </Row>
                    
                </Wrapper>
                
                </Column>
            
        </Container>
                
        
    </>

    )
}
export {Login}