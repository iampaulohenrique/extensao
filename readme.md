# 🛡️ PhotoSafe — Privacidade e Compartilhamento Controlado de Fotos

[![Universidade](https://img.shields.io/badge/Universidade-S%C3%A3o%20Judas%20Tadeu-blue.svg)](https://www.usjt.br/)
[![Curso](https://img.shields.io/badge/Curso-Engenharia%20de%20Software-brightgreen.svg)]()
[![Squad](https://img.shields.io/badge/Extens%C3%A3o-Squad%208%20(Crian%C3%A7as%20%26%20Idosos)-orange.svg)]()
[![Status](https://img.shields.io/badge/Status-Sprint%208%20(Conclu%C3%ADdo)-success.svg)]()

> Módulo educacional interativo e simulador de segurança da informação desenvolvido para o **Projeto de Extensão Universitária: Segurança da Informação para Idosos e Crianças**, vinculado ao Bacharelado em Engenharia de Software da **Universidade São Judas Tadeu (USJT)**.

---

## 📌 Sumário
- [1. Visão Geral do Projeto](#1-visão-geral-do-projeto)
- [2. Temática & Alinhamento Pedagógico](#2-temática--alinhamento-pedagógico)
- [3. Funcionalidades da Aplicação](#3-funcionalidades-da-aplicação)
- [4. Design System & Acessibilidade](#4-design-system--acessibilidade)
- [5. Fundamentação Científica (Artigo de Referência)](#5-fundamentação-científica-artigo-de-referência)
- [6. Mapeamento de Requisitos de Software (TCC)](#6-mapeamento-de-requisitos-de-software-tcc)
- [7. Estrutura do Repositório](#7-estrutura-do-repositório)
- [8. Como Executar](#8-como-executar)
- [9. Equipe de Desenvolvimento (Squad 8)](#9-equipe-de-desenvolvimento-squad-8)
- [10. Licença e Créditos](#10-licença-e-créditos)

---

## 1. Visão Geral do Projeto

As plataformas de redes sociais e armazenamento em nuvem operam predominantemente sob esquemas binários de controle de visibilidade (*público* ou *privado*). Essa limitação gera exposições involuntárias de dados sensíveis (geolocalização, rotinas escolares, faturas residenciais e documentos familiares).

O **PhotoSafe** foi desenvolvido para educar a comunidade através de dois canais integrados:
1. **Ambiente Didático Adaptativo:** interface que alterna em tempo real entre o **Modo Infantil** (gamificado, lúdico, com mascote) e o **Modo 60+ / Terceira Idade** (alto contraste WCAG AAA, tipografia legível, controles de zoom `A+ / A-`).
2. **Simulador de Arquitetura Segura:** demonstração prática de sanitização de metadados EXIF/GPS, controle granular de permissões e revogação dinâmica em tempo real (mitigação do *Deletion Delay*).

---

## 2. Temática & Alinhamento Pedagógico

| Trilha | Público | Tom Pedagógico | Recursos Didáticos |
| :--- | :--- | :--- | :--- |
| **Infantil** | Crianças e adolescentes | Dinâmico, lúdico, gamificado | Mascote *Pixel*, desafios de quiz "Pode Postar ou Dá Ruim?", premiação por estrelas e pontuação. |
| **Terceira Idade** | Adultos 60+ e familiares | Acolhedor, direto, sem jargões | Mascote instrutivo *Prof. Paulo*, avisos sobre fotos de cartões/comprovantes, botões táteis ampliados. |

---

## 3. Funcionalidades da Aplicação

- **Alternador de Perfil Dinâmico:** troca imediata de layout, vocabulário, mascote e paleta cromática sem recarregar a página.
- **Jogo "Pode Postar ou Dá Ruim?":**
  - Análise de 4 cenários práticos (uniforme escolar com logotipo, fotos no quintal sem referências, cartões de banco na mesa e fotos pós-viagem).
  - Feedback corretivo imediato explicando o impacto em segurança.
- **Laboratório do Sistema PhotoSafe:**
  - *EXIF Sanitizer:* ativação/desativação da remoção de coordenadas GPS e modelo de câmera em tempo real.
  - *Gestão Granular:* atribuição individual de autorização para destinatários cadastrados.
  - *Revogação Dinâmica:* invalidação instantânea do token com retorno `HTTP 403 Forbidden`.
  - *Purga Imediata (Zero Delay):* simulação de destruição física em storage sem retenção em cache.
  - *Console de Auditoria:* registro textual síncrono das operações de backend.
- **Módulo Audiovisual (Pílula Educativa):**
  - Player interativo com simulação de reprodução e transcrição do roteiro em 3 atos pedagógicos.

---

## 4. Design System & Acessibilidade

O projeto implementa com fidelidade a **Paleta de Cores Oficial** especificada para a iniciativa:

### 🧒 Modo Infantil (Aventura & Estímulo)
- **Amarelo Vivo (`#FFC83B`):** botões de destaque, estrelas e conquistas.
- **Laranja Amigável (`#FF7A59`):** chamadas principais e avatar do mascote Pixel.
- **Azul Céu (`#4EA8DE`):** cabeçalhos, cards e divisores.
- **Verde Turquesa (`#2EC4B6`):** validações de acerto e progresso.
- **Creme Suave (`#FFF9E6`):** fundo principal acolhedor.
- **Azul Noturno (`#1E293B`):** tipografia com a fonte *Fredoka*.

### 👓 Modo Terceira Idade (Clareza & Segurança)
- **Azul Médio (`#2A6FDB`):** barras de navegação e ícones estruturais.
- **Verde Seguro (`#15883E`):** confirmações e avanço de etapas.
- **Amarelo Âmbar (`#D97706`):** alertas de atenção contra golpes.
- **Off-White Soft (`#F8F9FA`):** fundo fosco antirreflexo.
- **Grafite Escuro (`#0F172A`):** contraste máximo WCAG AAA com a fonte *Inter*.

---

## 5. Fundamentação Científica (Artigo de Referência)

O projeto baseia seus mecanismos de proteção nas conclusões do artigo científico de referência indexado internacionalmente:

> **LIANG, Kaitai; LIU, Joseph K.; LU, Rongxing; WONG, Duncan S.** *Privacy concerns for photo sharing in online social networks*. **IEEE Internet Computing**, v. 19, n. 2, p. 58-63, Mar./Apr. 2015.  
> **DOI:** [10.1109/MIC.2014.107](https://doi.org/10.1109/MIC.2014.107)  
> **Indexações:** IEEE Xplore, Aalto University, DBLP, University of Surrey.

### Alinhamento Teórico-Prático:
* **Deletion Delay:** em redes convencionais, a exclusão solicitada pelo usuário demora dias ou semanas para ser eliminada de servidores de cache e CDNs. O PhotoSafe implementa exclusão síncrona definitiva.
* **Zero Trust & Controle Granular:** validação contínua da permissão a cada requisição de leitura do recurso de imagem.

---

## 6. Mapeamento de Requisitos de Software (TCC)

| ID | Tipo | Descrição Técnica | Implementação no Módulo |
| :--- | :--- | :--- | :--- |
| **RF03** | Funcional | Suporte a arquivos de imagem `.png`, `.jpg` e `.jpeg`. | Módulo de upload do simulador. |
| **RF05** | Funcional | Definição de permissões individuais e específicas por destinatário. | Dropdown de concessão granular para usuários específicos. |
| **RF06** | Funcional | Alteração ou revogação imediata de permissões concedidas. | Botão de revogação que intercepta o acesso e gera `HTTP 403`. |
| **RF08** | Funcional | Exclusão definitiva de mídias a pedido do proprietário. | Botão de purga sem retenção de cache. |
| **RNF02** | Não Funcional | Validação estrita de autorização no backend a cada requisição. | Validação Zero Trust simulada no painel de visualização. |
| **RNF03** | Não Funcional | Conclusão do fluxo de concessão em no máximo 3 interações. | Interface tátil unificada e responsiva. |

---

## 7. Estrutura do Repositório

```text
├── index.html       # Aplicação Single-File completa (HTML5 + CSS Tailwind + Vanilla JS)
├── README.md        # Documentação completa do projeto e especificações acadêmicas
```

---

## 8. Como Executar

Por seguir a arquitetura *Single-File Mandate*, a aplicação não necessita de etapas complexas de compilação ou instalação de pacotes locais:

1. Clone o repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/seu-usuario/photosafe-extensao.git
   cd photosafe-extensao
   ```
2. Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari):
   ```bash
   # Exemplo via terminal no Linux/macOS
   open index.html
   # Ou via Windows PowerShell
   start index.html
   ```
3. Alternativamente, você pode servir a pasta através da extensão **Live Server** do VS Code ou usando o utilitário Python:
   ```bash
   python -m http.server 8000
   ```
   E acessar `http://localhost:8000` no seu navegador.

---

## 9. Equipe de Desenvolvimento (Squad 8)

Membros da **Squad 8: Privacidade e Compartilhamento de Fotos**, estudantes do curso de Bacharelado em Engenharia de Software da Universidade São Judas Tadeu (USJT):

| Integrante | Registro Acadêmico (RA) |
| :--- | :--- |
| **Arthur de Sousa Sales** | `82329334` |
| **Diogo Santiago de Souza** | `825220041` |
| **Mayra da Silva Lima** | `826172067` |
| **Rafael Vasconcelos De Sa** | `826221406` |
| **Paulo Henrique Luiz do Monte** | `82325475` |
| **Renata Vitória Porettacci** | `826178798` |

---

## 10. Licença e Créditos

Desenvolvido para fins estritamente pedagógicos e de extensão comunitária universitária (2026).  
Distribuído sob a licença **MIT**. Consulte o código-fonte para mais detalhes.