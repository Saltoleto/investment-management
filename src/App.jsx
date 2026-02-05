import { useMemo } from "react";
import { app } from "./services/firebase";

const highlights = [
  {
    title: "Metas personalizadas",
    description:
      "Crie metas de curto e longo prazo e acompanhe o progresso em tempo real."
  },
  {
    title: "Aportes inteligentes",
    description:
      "Distribua seus aportes com base em metas, riscos e oportunidades."
  },
  {
    title: "Visão consolidada",
    description:
      "Veja renda fixa, variável e cripto em um único painel responsivo."
  }
];

const insights = [
  { label: "Carteira total", value: "R$ 152.480" },
  { label: "Meta anual", value: "76% alcançada" },
  { label: "Aportes mensais", value: "R$ 2.450" }
];

const allocations = [
  { label: "Renda fixa", value: 42 },
  { label: "Renda variável", value: 33 },
  { label: "Fundos", value: 15 },
  { label: "Cripto", value: 10 }
];

const goals = [
  {
    title: "Reserva de emergência",
    progress: "80%",
    value: "R$ 32.000 / R$ 40.000"
  },
  {
    title: "Viagem 2025",
    progress: "45%",
    value: "R$ 9.000 / R$ 20.000"
  },
  {
    title: "Aposentadoria",
    progress: "28%",
    value: "R$ 280k / R$ 1M"
  }
];

const steps = [
  "Conecte suas contas e corretoras favoritas",
  "Defina metas e alertas inteligentes",
  "Acompanhe resultados em qualquer dispositivo"
];

const alerts = [
  {
    title: "Rebalanceamento sugerido",
    description: "Renda fixa acima do alvo em 7%.",
    status: "Ajustar"
  },
  {
    title: "Meta mensal",
    description: "Falta um aporte de R$ 340 para bater a meta.",
    status: "Aportar"
  }
];

export default function App() {
  const firebaseStatus = useMemo(() => (app ? "Conectado" : "Offline"), []);

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="brand-icon">GI</div>
          <div>
            <p className="brand-label">Gestão de Investimentos</p>
            <span className="brand-subtitle">PWA + Firebase</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#recursos">Recursos</a>
          <a href="#visao">Visão</a>
          <a href="#metas">Metas</a>
          <a href="#passos">Como funciona</a>
        </nav>
        <button className="primary-button">Entrar</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <span className="badge">Nova experiência digital</span>
            <h1>Controle sua carteira com uma experiência fluida na web e mobile.</h1>
            <p>
              Uma plataforma responsiva inspirada no projeto Gestao Investimentos para
              organizar metas, aportes e resultados em um só lugar.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Criar conta</button>
              <button className="ghost-button">Agendar demo</button>
            </div>
            <div className="status">
              <span>Firebase:</span>
              <strong>{firebaseStatus}</strong>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-header">
              <h2>Resumo da carteira</h2>
              <span className="pill">Atualizado há 2 min</span>
            </div>
            <div className="metrics">
              {insights.map((item) => (
                <div key={item.label} className="metric-card">
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="portfolio">
              <div>
                <span>Perfil</span>
                <strong>Moderado</strong>
              </div>
              <div>
                <span>Risco atual</span>
                <strong>Baixo</strong>
              </div>
              <div>
                <span>Projeção</span>
                <strong>+12,4% a.a.</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="section">
          <div className="section-header">
            <h2>Recursos essenciais</h2>
            <p>O que você precisa para crescer seu patrimônio com clareza.</p>
          </div>
          <div className="cards">
            {highlights.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="visao" className="section grid-section">
          <div className="section-text">
            <h2>Visualização inteligente em qualquer dispositivo</h2>
            <p>
              Layout adaptativo pensado para navegação confortável no desktop, tablet ou
              celular. Os cards se reorganizam automaticamente para manter a leitura fluida.
            </p>
            <ul>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="device-preview">
            <div className="device">
              <span>Mobile</span>
              <div className="device-content">
                <p>Aportes</p>
                <strong>R$ 680,00</strong>
              </div>
            </div>
            <div className="device">
              <span>Web</span>
              <div className="device-content">
                <p>Patrimônio</p>
                <strong>R$ 152.480</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="metas" className="section split-section">
          <div className="panel">
            <h2>Distribuição da carteira</h2>
            <p className="muted">
              Veja como seus ativos estão distribuídos e ajuste rapidamente com base em
              objetivos.
            </p>
            <div className="allocation-list">
              {allocations.map((item) => (
                <div key={item.label} className="allocation-item">
                  <div className="allocation-header">
                    <span>{item.label}</span>
                    <strong>{item.value}%</strong>
                  </div>
                  <div className="allocation-bar">
                    <span style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h2>Metas em andamento</h2>
            <p className="muted">Acompanhe o progresso das metas financeiras.</p>
            <div className="goal-list">
              {goals.map((goal) => (
                <div key={goal.title} className="goal-card">
                  <div>
                    <h3>{goal.title}</h3>
                    <p>{goal.value}</p>
                  </div>
                  <span className="goal-progress">{goal.progress}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section highlight-grid">
          <div className="panel">
            <h2>Alertas inteligentes</h2>
            <div className="alert-list">
              {alerts.map((alert) => (
                <div key={alert.title} className="alert-card">
                  <div>
                    <h3>{alert.title}</h3>
                    <p>{alert.description}</p>
                  </div>
                  <button className="ghost-button">{alert.status}</button>
                </div>
              ))}
            </div>
          </div>
          <div className="panel timeline">
            <h2>Últimos eventos</h2>
            <div className="timeline-item">
              <span>Hoje</span>
              <p>Aporte realizado em Tesouro Selic.</p>
            </div>
            <div className="timeline-item">
              <span>Ontem</span>
              <p>Dividendos recebidos de FIIs.</p>
            </div>
            <div className="timeline-item">
              <span>2 dias</span>
              <p>Meta "Viagem 2025" atualizada.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="passos" className="footer">
        <div>
          <h2>Comece hoje mesmo</h2>
          <p>
            Instale o PWA, personalize metas e acompanhe sua evolução de onde estiver.
          </p>
        </div>
        <button className="primary-button">Instalar app</button>
      </footer>
    </div>
  );
}
