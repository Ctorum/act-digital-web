import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { useProducts } from "@/hooks/useProducts";
import "@testing-library/jest-dom";

jest.mock("@/hooks/useProducts");

describe("Home Page", () => {
  beforeEach(() => {
    useProducts.mockReturnValue({
      products: [
        {
          id: 1,
          title: "Test Product",
          price: 100,
          description: "Test product description",
          category: "test",
          image: "/test.jpg",
          rating: {
            rate: 4.5,
            count: 10,
          },
        },
      ],
    });
  });

  it("renders header with navigation items", () => {
    render(<Home />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders hero section with correct content", () => {
    render(<Home />);
    expect(screen.getByText("Nova Coleção")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Descubra nossa nova coleção de roupas. Qualidade premium e estilo incomparável."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Comprar agora")).toBeInTheDocument();
  });

  it("renders product sections", () => {
    render(<Home />);
    expect(screen.getByText("Produtos em destaque")).toBeInTheDocument();
    expect(screen.getByText("Categorias")).toBeInTheDocument();
  });

  it("renders footer", () => {
    render(<Home />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders products from useProducts hook", () => {
    render(<Home />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });
});
