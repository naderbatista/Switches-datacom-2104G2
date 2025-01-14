Este projeto demonstra como acessar switches Datacom 2104G22 utilizando a biblioteca ssh2 em Node.js. Ele permite executar comandos remotamente e obter a configuração atual dos switches, como o show running-config.

Requisitos:

Certifique-se de que você tenha os seguintes itens instalados:

Node.js (versão 12 ou superior)
Credenciais de acesso ao switch (IP, usuário e senha)

Instalação:

Clone este repositório:
git clone https://github.com/naderbatista/switches-datacom-2104g2.git

Instale as dependências do projeto:

cd seu-repositorio
npm install ssh2

Uso:

Edite o código no arquivo ssh.js para incluir os detalhes do switch que deseja acessar:

conn.connect({
    host: 'IP_DO_SWITCH',
    port: 22,
    username: 'USUARIO',
    password: 'SENHA'
});

Execute o script:

node ssh.js

Se tudo estiver configurado corretamente, você verá a saída do comando show running-config no console.

Observações:

*  Substitua IP, USUARIO e SENHA pelas credenciais reais do switch.
*  Certifique-se de que o switch esteja configurado para aceitar conexões SSH.
