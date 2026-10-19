import { useState } from 'react';
import { CLIENT_COUNTS, COMPANY_SIZES, MIN_PASSWORD_LENGTH, signUp, validateDetails, validateProfile, validateSignup } from './signupApi.js';
import './SignupPage.css';

const INITIAL_FORM = {
  accountType: '', clientCount: '', companySize: '', industry: '',
  companyName: '', name: '', phone: '', email: '', password: '', confirmation: '',
};

function ChoiceGroup({ label, name, options, value, onChange }) {
  return (
    <fieldset className="signup-fieldset">
      <legend>{label}</legend>
      <div className="signup-choices">
        {options.map(({ value: optionValue, label: optionLabel }) => (
          <label className={'signup-choice ' + (value === optionValue ? 'selected' : '')} key={optionValue}>
            <input type="radio" name={name} value={optionValue} checked={value === optionValue} onChange={onChange} />
            <span>{optionLabel}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function SignupPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const update = (field) => (event) => {
    const value = event.target.value;
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === 'accountType' ? { clientCount: '', companySize: '' } : {}),
    }));
    setError('');
  };

  const nextStep = (event) => {
    event.preventDefault();
    const problem = validateProfile(form);
    setError(problem);
    if (!problem) setStep(2);
  };

  const nextAccessStep = (event) => {
    event.preventDefault();
    const problem = validateDetails(form);
    setError(problem);
    if (!problem) setStep(3);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'loading') return;
    const problem = validateSignup(form);
    setError(problem);
    if (problem) return;
    setStatus('loading');
    try {
      await signUp(form);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    } finally {
      setForm((current) => ({ ...current, password: '', confirmation: '' }));
    }
  };

  return (
    <div className="signup-page">
      <main className="signup-shell">
        <a href="/" className="signup-logo" aria-label="DataDash, página inicial">
          <img src="/logo.png" alt="DataDash" />
        </a>
        {status === 'success' ? (
          <section className="signup-success" id="signup-success" aria-live="polite">
            <span className="signup-success-icon" aria-hidden="true">✓</span>
            <h1>Confirme seu e-mail</h1>
            <p>Enviamos um link para <strong>{form.email.trim()}</strong>. Confirme o endereço para entrar na extensão.</p>
          </section>
        ) : (
          <section className="signup-content">
            <div className="signup-progress" aria-label={'Etapa ' + step + ' de 3'}>
              {[1, 2, 3].map((stage) => (
                <span key={stage} className={step === stage ? 'active' : step > stage ? 'done' : ''} aria-hidden="true" />
              ))}
            </div>
            <p className="signup-step">Etapa {step} de 3</p>
            <h1>{step === 1 ? 'Seu perfil' : step === 2 ? 'Seus dados' : 'Crie seu acesso'}</h1>

            {step === 1 ? (
              <form className="signup-form" onSubmit={nextStep} noValidate>
                <ChoiceGroup
                  label="Como você usa o DataCrazy?"
                  name="account-type"
                  value={form.accountType}
                  onChange={update('accountType')}
                  options={[
                    { value: 'provider', label: 'Sou prestador de serviços' },
                    { value: 'user', label: 'Uso o DataCrazy na minha empresa' },
                  ]}
                />
                {form.accountType === 'provider' && (
                  <ChoiceGroup
                    label="Quantos clientes você atende?"
                    name="client-count"
                    value={form.clientCount}
                    onChange={update('clientCount')}
                    options={CLIENT_COUNTS.map((value) => ({ value, label: value }))}
                  />
                )}
                {form.accountType === 'user' && (
                  <ChoiceGroup
                    label="Qual é o tamanho da empresa?"
                    name="company-size"
                    value={form.companySize}
                    onChange={update('companySize')}
                    options={COMPANY_SIZES.map((value) => ({ value, label: value }))}
                  />
                )}
                <label htmlFor="signup-industry">Nicho de atuação</label>
                <input id="signup-industry" type="text" value={form.industry} onChange={update('industry')} placeholder="Ex.: marketing, saúde, varejo" maxLength="100" />
                {error && <p className="signup-error" role="alert">{error}</p>}
                <button type="submit" className="signup-primary">Continuar</button>
              </form>
            ) : step === 2 ? (
              <form className="signup-form" onSubmit={nextAccessStep} noValidate>
                <label htmlFor="signup-company">Nome da empresa <span>(se houver)</span></label>
                <input id="signup-company" type="text" autoComplete="organization" value={form.companyName} onChange={update('companyName')} maxLength="120" />
                <label htmlFor="signup-name">Seu nome</label>
                <input id="signup-name" type="text" autoComplete="name" value={form.name} onChange={update('name')} maxLength="120" />
                <label htmlFor="signup-phone">Telefone para contato</label>
                <input id="signup-phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={update('phone')} placeholder="(11) 99999-9999" maxLength="25" />
                {error && <p className="signup-error" role="alert">{error}</p>}
                <div className="signup-actions">
                  <button type="button" className="signup-back" onClick={() => { setStep(1); setError(''); }}>Voltar</button>
                  <button type="submit" className="signup-primary">Continuar</button>
                </div>
              </form>
            ) : (
              <form className="signup-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" autoComplete="email" value={form.email} onChange={update('email')} placeholder="voce@empresa.com" />
                <label htmlFor="signup-password">Senha</label>
                <div className="signup-password">
                  <input id="signup-password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" value={form.password} onChange={update('password')} placeholder={'Mínimo de ' + MIN_PASSWORD_LENGTH + ' caracteres'} />
                  <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
                </div>
                <label htmlFor="signup-confirmation">Confirme a senha</label>
                <input id="signup-confirmation" type={showPassword ? 'text' : 'password'} autoComplete="new-password" value={form.confirmation} onChange={update('confirmation')} />
                {error && <p className="signup-error" role="alert">{error}</p>}
                <div className="signup-actions">
                  <button type="button" className="signup-back" onClick={() => { setStep(2); setError(''); }}>Voltar</button>
                  <button type="submit" className="signup-primary" disabled={status === 'loading'}>{status === 'loading' ? 'Criando...' : 'Criar conta'}</button>
                </div>
              </form>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default SignupPage;
