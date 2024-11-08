import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

// import ButtonBasic from "../../components/shared/ButtonBasic";
import ButtonPretty from "../../components/shared/ButtonPretty";

export default function Versa() {
  return (
    <>
      <div className="textLong">
        <p>
          Estamos orgulhosos em apresentar a segunda edição do 'Conect Autismo
          2025', um evento pioneiro organizado pela Versa Consultoria e Eventos.
          Com nosso compromisso inabalável com qualidade e segurança, estamos
          definindo novos padrões no universo dos eventos.
        </p>
        <p>
          Na Versa, acreditamos que cada evento é uma oportunidade única de
          criar experiências memoráveis e impactantes. 'Conect Autismo 2025' não
          é apenas um evento, é uma jornada enriquecedora que conecta pessoas,
          ideias e emoções.
        </p>
        <p>
          Com uma equipe especializada e apaixonada, garantimos a excelência em
          cada detalhe. Desde a concepção até a execução, nosso foco é oferecer
          um ambiente seguro, inclusivo e inspirador para todos os
          participantes.
        </p>
        <p>
          Descubra como a Versa Consultoria e Eventos pode transformar seu
          evento, negócio ou produto. Junte-se a nós no 'Conect Autismo 2025' e
          vivencie a diferença que a dedicação, inovação e profissionalismo
          podem trazer para o seu mundo.
        </p>
        <p>Conheça a Versa. Transforme com a gente.</p>
      </div>
      <div className="buttonsSection">
        {/* <ButtonBasic
          link="https://www.instagram.com/versaconsultorias/"
          text="Instagram Versa"
          icon={<FaInstagram />}
        />

        <ButtonBasic
          link="https://www.conectautismo.com/"
          text="Versa Web"
          icon={<TbWorld />}
        /> */}
        <ButtonPretty text={"Fazer pré-inscrição agora"} link={"#formEvent"} />
      </div>
    </>
  );
}
