import React from "react";
import Section from './layout/Section';
import FormSection from './layout/FormSection';
import DummySection from './layout/DummySection';

const App = () => {
  return (
    <Section>
      <FormSection />
      <DummySection />
    </Section>
  );
}

export default App;
