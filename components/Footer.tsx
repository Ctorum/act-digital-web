import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TextLink } from "./TextLink";

export function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-bold mb-4">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              Sua loja online de moda com as melhores marcas e preços.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <div className="grid gap-2">
              <TextLink href="/about">Sobre Nós</TextLink>
              <TextLink href="/contact">Contato</TextLink>
              <TextLink href="/faq">FAQ</TextLink>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>Email: contato@ecommerce.com</p>
              <p>Telefone: (11) 1234-5678</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input placeholder="Seu email" />
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2023 Ecommerce. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
