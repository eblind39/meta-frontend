import "../css/theme.css";
import ThemeProvider, { useTheme } from "../providers/ThemeProvider";
import Switch from "../components/theme/switch";
import React from "react";

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

interface ParagraphProps {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function MainTheme() {
  const { theme } = useTheme();
  return (
    <div
      className="Theme"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Theme() {
  return (
    <ThemeProvider>
      <MainTheme />
    </ThemeProvider>
  );
}

export default Theme;
