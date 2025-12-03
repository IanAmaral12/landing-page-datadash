import './ProblemSolution.css';

const ProblemSolution = () => {
    return (
        <section id="problem-solution" className="problem-solution">
            <div className="container">
                <h2 className="section-title fade-in-up">O Jeito Antigo vs. O Jeito DataDash</h2>

                <div className="comparison-grid">
                    <div className="comparison-card problem-card fade-in-up">
                        <div className="card-header">
                            <div className="icon-wrapper problem-icon">❌</div>
                            <h3>Sem Automação</h3>
                        </div>
                        <ul className="comparison-list">
                            <li>
                                <span className="list-icon">⏱️</span>
                                <span>Horas desperdiçadas em tarefas repetitivas</span>
                            </li>
                            <li>
                                <span className="list-icon">💸</span>
                                <span>Custos operacionais crescentes</span>
                            </li>
                            <li>
                                <span className="list-icon">😓</span>
                                <span>Equipe sobrecarregada com trabalho manual</span>
                            </li>
                            <li>
                                <span className="list-icon">📉</span>
                                <span>Erros humanos frequentes</span>
                            </li>
                            <li>
                                <span className="list-icon">🐌</span>
                                <span>Crescimento limitado pela capacidade humana</span>
                            </li>
                        </ul>
                    </div>

                    <div className="comparison-card solution-card fade-in-up">
                        <div className="card-header">
                            <div className="icon-wrapper solution-icon">
                                <img src="/public/logotipo.png" alt="DataDash" width={50} height={50}/>
                            </div>
                            <h3>Com DataDash</h3>
                        </div>
                        <ul className="comparison-list">
                            <li>
                                <span className="list-icon">⚡</span>
                                <span>Processos automatizados 24/7</span>
                            </li>
                            <li>
                                <span className="list-icon">💰</span>
                                <span>Redução de até 80% nos custos operacionais</span>
                            </li>
                            <li>
                                <span className="list-icon">🎯</span>
                                <span>Equipe focada em tarefas estratégicas</span>
                            </li>
                            <li>
                                <span className="list-icon">📈</span>
                                <span>Precisão de 99% com IA</span>
                            </li>
                            <li>
                                <span className="list-icon">🚀</span>
                                <span>Escalabilidade ilimitada</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
