import { useRouter } from "next/router";

const RouterWrapper = (Component: React.FC): React.FC => {
  const WrappedComponent = () => {
    const router = useRouter();
    const handleRouting = (path: string) => {
      router.push(path);
    };

    return <Component handleRouting={handleRouting} />;
  };

  WrappedComponent.displayName = `RouterWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default RouterWrapper;
