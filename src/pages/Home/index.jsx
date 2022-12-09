
import {useNavigate} from 'react-router-dom'; 
import { Button } from '../../componets/button';
import { Header } from '../../componets/header';
import banner from '../../assets/banner.png'
import{Container, TextContent, Title, TitleHighLight} from './style';

const Home = ()=>{

    const navigate = useNavigate();
    const HandleClickSignIn = ()=> {
        navigate('/login');
    }
    return(<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente <br/>
                    </TitleHighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e 
                encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button variant="secondary" title="Começar agora" onClick={HandleClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt="Banner Dio"/>
            </div>
        </Container>
                
        
    </>

    )
}
export {Home}