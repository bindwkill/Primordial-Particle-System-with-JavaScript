## Sistema de Partículas Primordiais com JavaScript

#### Eu apenas tentei implementar o sistema de vida de partículas mostrado neste vídeo:
https://youtu.be/makaJpLvbow (Thomas Schmickl e Martin Stefanec)

###### Motivação
Como dito, vi nas sugestões do YouTube o vídeo deste trabalho e achei que seria um desafio interessante tentar replicar esse sistema usando a linguagem JavaScript, que tenho certa familiaridade e que atualmente estou estudando.

###### Objetivos
Não li o artigo, então não fiz qualquer inferência encima dos resultados, meu único objetivo era o de replicar as mecânicas apresentadas em uma linguagem que, a priori, não é a mais recomendada para este tipo de aplicação.

###### Implementação
Na primeira vez que vi a explicação achei que não seria um desafio tão difícil, mas as regras de iteração entre as partículas foram um desafio especialmente complicado.

Não ficou claro pra mim consultando o repositório do trabalho original como essas regras foram implementadas, alem de estarem em uma linguagem de programação que não consegui reconhecer.

Na teoria as regras são 'simples':
* Cada partícula tem uma posição (x,y) e uma direção Φ
* As partículas movem-se a uma velocidade constante v
* As partículas giram um ângulo fixo α a cada iteração
* Para α > 0, ela vira à direita, caso contrario à esquerda
* As partículas reagem a outras partículas em um raio r de distancia delas
* Elas giram para o lado com mais partículas vizinhas
* A variação final da orientação é dado pela equação: 
ΔΦ/Δt = α + β * Nt * sign(Rt - Lt)
Onde: 
* sign() é uma função que retorna 1,-1 ou zero
* Rt, Lt e Nt são respetivamente, partículas vizinhas à direita, à esquerda e o total de vizinhas

###### Dificuldades
Na prática, a parte mais difícil foi distinguir o que é 'esquerda' e 'direita' para a partícula. Uma vez que a cada iteração ela está apontando para uma direção diferente, não daria para simplesmente comparar as posições para saber de que lado cada vizinha está.

Para contornar o problema (e, de novo, não li o artigo, isso poderia ter me poupado muito tempo) usei a orientação da partícula para 'criar' uma reta e com isso poderia saber se a vizinha em questão está 'acima' ou abaixo desta reta.

Para distinguir se esse 'estar acima' significava estar a direita ou esquerda, usei o cosseno da orientação. Retornando um valor negativo, significaria que a partícula está apontada para a esquerda da tela, e consequentemente as vizinhas acima da reta estão á sua direita, e vice versa. Alguma coisa não saiu como esperado e essa lógica funcionou ao contrario. Como não descobri o motivo, apenas aceitei.

Demorei bastante também para perceber que os ângulos em JavaScript deveriam ser trabalhados em radianos. Cheguei a criar funções de conversão, mas acabei me convencendo que valia mais a pena converter tudo em radiano e trabalhar com os números dessa forma.

Uma constante desde o inicio do projeto e que não consegui distinguir até onde é culpa da linhagem e onde é culpa do código é o 'lag'. Acima de 700 partículas a aplicação já fica visivelmente lenta e alterações no código afim de diminuir o numero de passos em cada iteração não surtiu grande efeito. Eu tenho a desconfiança de que aninhar dois 'forEach()' pode ter parcela de culpa, mas não tive sucesso em adaptar o laço 'for' na lógica que já havia construido

Por fim, quando substitui o encadeamento de ifs na equação da orientação senti que o comportamento ficou menos fiel ao sistema original, mas isso pode ser só impressão minha. De toda forma deixei o pedaço comentado no código.

###### Conclusões
Talvez o JavaScript não seja a linguagem mais adequada para esse tipo de aplicação, mas foi um grande aprendizado esse desafio. Alem disso, como ainda estou aprendendo a linguagem, talvez sejam possíveis melhorias no código que eu ainda desconheça.
