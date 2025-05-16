'use client';

import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Text } from "@/components/Text";
import { Footer } from "@/components/Footer";
import { ListItem } from "@/components/ListItem";

const howDoWeWorkSteps = [
  {
    title: '1. Cadastro',
    text: 'ONGs e fornecedores criam um perfil gratuito.',
    image: '',
    imageAlt: ''
  },
  {
    title: '2. Oferta de alimentos',
    text: 'Mercados e produtores cadastram alimentos disponíveis.',
    image: '',
    imageAlt: ''
  },
  {
    title: '3. Coleta',
    text: 'ONGs visualizam e solicitam as doações',
    image: '',
    imageAlt: ''
  },
  {
    title: '4. Entrega/Retirada',
    text: 'Alimentos são coletados e distribuídos.',
    image: '',
    imageAlt: ''
  },
  {
    title: '5. Impacto real',
    text: 'Tudo é registrado em KGs doados e pessoas alcançadas.',
    image: '',
    imageAlt: ''
  },
]

export default function Home() {
  // TODO: navegar para a página de cadastro
  const handleOnClickFunction = () => {
    console.log('oi');
  }

  return (
    <div className="font-[family-name:var(--font-roboto)]">
      <Header />
      <main>
        <Container>
          <div className="flex flex-col justify-around">
            <div>
              <Text text='QUEM SOMOS' Tag='h2' />
              <Text text='Barriga Cheea' Tag='h1' />
            </div>

            <Text text='Somos uma iniciativa que une tecnologia, empatia e sustentabilidade para combater o desperdício de alimentos. Acreditamos no poder das conexões locais para gerar impacto real — diminuindo a fome e valorizando cada alimento produzido.' Tag='p' />

            <Button label='Cadastre-se' onClickFunction={handleOnClickFunction} />
          </div>

          <Image
            aria-hidden
            src="/food-plate.png"
            alt="Globe icon"
            width={645}
            height={618}
          />
        </Container>

        <Container>
          <Text text='Como nós funcionamos' Tag='h2' />

          {howDoWeWorkSteps.map(({ title, text, image, imageAlt }, index) => (
            <ListItem
              key={index}
              title={title}
              text={text}
              image={image}
              imageAlt={imageAlt}
            />
          ))}
        </Container>

        <Container>
          <Text text='Navegue pela plataforma' Tag='h2' />
        </Container>

        <Container>
          <Text text='Onde estamos' Tag='h2' />
        </Container>

        <Container>
          <Text text='Calculadora solidária' Tag='h2' />
        </Container>

        <Container>
          <Text text='Perguntas frequentes' Tag='h2' />
        </Container>

        <Container>
          <Text text='ONGs beneficiadas' Tag='h2' />
        </Container>

        <Container>
          <Text text='Estabelecimentos participantes' Tag='h2' />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
