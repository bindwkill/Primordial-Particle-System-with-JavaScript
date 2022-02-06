# Primordial Particle System with JavaScript

## preview

https://bindwkill.github.io/Primordial-Particle-System-with-JavaScript/

## En

#### I just tried to implement the particle life system shown in this video:
https://youtu.be/makaJpLvbow

Special Thanks to Thomas Schmickl and Martin Stefanec

###### Motivation
As said, I saw the video of this work on YouTube's suggestions and I thought it would be an interesting challenge to try to replicate this system using JavaScript language, which I am somewhat familiar with and which I am currently studying.

###### Goals
I didn't read the article, so I didn't make any inferences about the results, my only objective was to replicate as a mechanist in a language that, a priori, is not the most recommended for this type of application.

###### Implementation
The first time I saw an explanation I thought it wouldn't be such a difficult challenge, but the rules for iteration between particles were an especially tricky challenge.

It wasn't clear to me consulting the repository of the original work how these rules were implemented, besides being in a programming language that I couldn't recognize.

In theory the rules are 'simple':
* Each particle has an (x, y) position and a Φ direction
* Particles move at a constant velocity v
* Particles rotate at a fixed angle each iteration
* For α> 0, it turns right, otherwise left
* Particles react to other particles within a radius r away from them
* They rotate sideways with more neighboring particles
* The final variation of orientation is given by the equation:
ΔΦ / Δt = α + β * Nt * sign (Rt - Lt)
Where:
* sign() is a function that returns 1, -1 or zero
* Rt, Lt and Nt are, respectively, right and left neighbor particles and total neighbors

###### Difficulties
In practice, the hardest part was distinguishing what is 'left' and 'right' for the particle. Since each iteration is headed in a different direction, you can't simply compare as positions to see which side each neighbor is on.

To get around the problem (and again, I didn't read the article, this could have saved me a lot of time) I used the particle orientation to 'create' a line so I could tell if the neighbor in question is 'above' or below of this straight line.

To distinguish whether this 'being above' means being to the right or left, I used the cosine of the orientation. Returning a negative value would mean that the particle is pointed to the left of the screen, and hence how neighbors above the line are to its right, and vice versa. Something didn't go as expected and this logic worked in reverse. As I didn't find out the reason, I just accepted.

It also took me quite a while to realize that angles in JavaScript study to be worked in radians. I even created conversion functions, but I ended up convincing myself that it was better to convert everything to radian and work with the numbers that way.

A constant since the beginning of the project and that I couldn't distinguish how far it is the fault of the lineage and where it is the fault of the code is the 'lag'. Above 700 particles an application is already noticeably slow and code changes in order to decrease the number of steps in each iteration did not have much effect. I have the suspicion that nesting two 'forEach()' can be partly to blame, but I was unsuccessful in adapting the 'for' loop to the logic I had already built

Finally, when I replaced the chain of ifs in the guidance equation I felt that the behavior was less faithful to the original system, but that may just be my impression. Anyway, I left the commented piece in the code.

###### Conclusions
Perhaps JavaScript is not the most suitable language for this type of application, but this challenge was a great learning experience. Also, as I'm still learning a language, maybe improvements to the code that I'm not aware of are possible.

## Pt-br

## Sistema de Partículas Primordiais com JavaScript

#### Eu apenas tentei implementar o sistema de vida de partículas mostrado neste vídeo:
https://youtu.be/makaJpLvbow

Agradecimentos especiais a Thomas Schmickl e Martin Stefanec

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
