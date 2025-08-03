import React, { ReactNode } from 'react';

type HomeProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

const Home: React.FC<HomeProps> = ({ header, content, footer }) => (
  <div className="home-container">
    <header>{header}</header>
    <main>{content}</main>
    <footer>{footer}</footer>
  </div>
);

export default Home;