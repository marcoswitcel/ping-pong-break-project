# Pesquisa sobre boas práticas para jogos mobiles

A intenção desse documento é apenas registrar princípios e decisões que foram usados no planejamento e construção do "Ping Pong Break Project".
Antes mesmo de começar o projeto já possuia algumas ideias sobre responsibidade e jogos mobile, porém como a ideia é usar cada oportunidade como plataforma de aprendizagem e evolução da técnica, comecarei por uma pesquisa geral sobre padrões e considerações que se devem seguir e considerar para jogos mobile em 2026.

## Questões sobre responsibilidade levantadas 

* Adaptação da Resolução e Escala conforme a resolução e proporção da tela do dispositivo: A engine será construída do zero, esse princípo já era contemplado em projetos anteriores, porém será dado especial atenção nesse caso pois no cenário mobile existe uma variabilidade maior de telas e muitas vezes isso afeta a qualidade da experiência do jogador.
* Safe Area's: No design e posicionamento da câmera também deverá ser considerado a existência de áreas seguras nos dispositivos modernos, para não haver sobreposição de área jogável por partes onde fisicamente não existem pixels úteis no smartphone.
* Sobre os controles: Suporte a controle por gestos e toque, controles externos não serão suportados na primeira versão, pois a experiência prevista se propõem a tentar uma abordagem mais "tátil" a experiência clássica de jogos de "ping pong", "tennis" e "brick breakers".
* Sobre a orientação: O projeto visa um jogo jogável apenas na vertical, excete se for incluído algum jogo que faça sentido na horizontial.
* UI legível em qualquer resolução: práticas clássicas de responsividade Web devem ser suficientes para entregar uma UI acessível.