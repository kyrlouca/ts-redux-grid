import React from 'react';
import Store from './store/redux-store';
import GridPage from './layout/grid-page';
// const XA = ({ val }: { val: string }) => <div>{val}</div>;

const App: React.FC = () => {
  return (
    <Store>
      <GridPage />
    </Store>
  );
};

export default App;
