import styles from "./sponsor.module.css";

const ElectricalEnergy = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Energia elétrica</h1>
    <p>A área de eventos é suprida com tensão.</p>
    <p>
      Pede- se consultar a coordenação de eventos para demais informações
      complementares:
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Tensão nominal: 13,8 KV (entre fases);
      </li>
      <li className={styles.listItem}>Número de fases: 03;</li>
      <li className={styles.listItem}>
        Frequência nominal: 60 Hz; V - Corrente: alternada trifásica.
      </li>
      <li className={styles.listItem}>Gerador 220v e 380v</li>
    </ul>
    <p>
      Todos os circuitos primários e secundários de força e luz deverão estar
      protegidos por disjuntores, acondicionados em caixa com tampa e afixados
      com material isolante;
    </p>
    <p>
      Em caso de montagem especial, a distribuição de energia elétrica nos
      stands será de responsabilidade exclusiva da empresa expositora, devendo
      esta observar rigorosamente as normas, provendo a entrada ou entradas da
      rede com disjuntores e fusíveis adequados;
    </p>
    <p>
      Eventuais cortes de energia elétrica, panes e/ou outros problemas
      relativos à instalação elétrica inadequada na instalação dos stands ou
      dela decorrentes serão de responsabilidade do expositor, devendo este
      último, arcar com as consequências decorrentes, em qualquer esfera;
    </p>
    <p>
      Os trabalhos realizados com eletricidade deverão ser acompanhados pela
      equipe do espaço, em horários prédeterminados junto à Equipe Operacional
      de Eventos. No final das instalações elétricas e antes do início do
      evento, serão realizadas inspeções para fins de segurança.
    </p>
    <p>
      A distribuição da rede de energia elétrica dentro do estande é de
      responsabilidade exclusiva do Expositor e deverão obedecer às normas,
      provendo a entrada da(s) rede(s) com disjuntores e fusíveis adequados
    </p>
    <p>Será instalado um ponto de energia elétrica na área locada.</p>
    <h2>⚠IMPORTANTE ⚠</h2>
    <p>
      Em caso de necessidade de energia no stand durante o período noturno é
      obrigatório informar à organização com o prazo de 15 dias antes do evento
      o mesmo será acrescido no valor.
    </p>
    <p>
      Caso contrário, o gerador será desligado após encerramento das atividades
      do dia.
    </p>
  </div>
);

export default ElectricalEnergy;
