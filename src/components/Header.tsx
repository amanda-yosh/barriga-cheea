import Image from "next/image";

import BarrigaLogo from "./assets/barriga-logo.svg";

import { Button } from "./Button";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => {
  // TODO: navegar para a página de cadastro
  const handleOnClickFunction = () => {
    console.log('oi');
  }

  return (
    <header className="flex justify-between ml-16 mr-16 mb-4 mt-4">
      <div className="flex items-center gap-2">
        <Image
          width={74}
          src={BarrigaLogo}
          alt="Uma pera em tons laranja com um sorriso."
        />
        <h2 className="text-4xl">
          BARRIGA CHEEA
        </h2>
      </div>

      <nav className="flex items-center">
        {user
          ? <p>{user.name}</p>
          : <ul className="flex items-center gap-4">
            <li>Fale conosco</li>
            <li>Onde</li>
            <li>Quem somos</li>
            <li>FAQ</li>
            <li>
              <Button label="Cadastre-se" onClickFunction={handleOnClickFunction} />
            </li>
          </ul>
        }
      </nav>
    </header>
  )
};
