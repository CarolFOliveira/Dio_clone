import {useNavigate} from 'react-router-dom';
import {MdPerson, MdEmail, MdLock } from "react-icons/md";
 
import { Button } from '../../componets/button';
import { Header } from '../../componets/header';
import {api} from '../../services/api'
import{Container, Wrapper,Column,Row,Title,SubtitleLogin,TitleLogin, Redirecionar ,DescriptionText,CriarText} from './style';
import {Input} from '../../componets/input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().min(5,'Nome completo').required(),
    email: yup.string().email('email não é válido').required(),
    password: yup.string().min(3,'No mínimo 3 caracteres').required(),
  }).required();


const Cadastro = ()=>{
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
    });
    console.log(errors)
    const onSubmit = () =>{
        
            navigate('/feed')
       
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
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" control={control} errorMessage={errors?.name?.message} placeholder="Nome completo" leftIcon={<MdPerson/>}/>
                    <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password"leftIcon={<MdLock/>}/>
                    <Button title="Criar minha conta" variant="secondary"  type="button"/>
                </form>
                <DescriptionText>Ao clicar em "criar minha conta grátis", declaro que aceito as 
                    Políticas de Privacidade e os Termos de Uso da DIO.
                </DescriptionText>
                <Row>
                    
                    <CriarText>Já tenho conta.
                    <Redirecionar href="/login"> Fazer login </Redirecionar>
                    </CriarText>
                </Row>
                
            </Wrapper>
            
            </Column>
        
    </Container>
            
    
</>

)
}
export {Cadastro};