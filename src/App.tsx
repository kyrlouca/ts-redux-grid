import React from 'react';
import StoreContext from './store/store-context';
import GridPage from './layout/grid-page';
// const XA = ({ val }: { val: string }) => <div>{val}</div>;

const App: React.FC = () => {
  return (
    <StoreContext>
      <GridPage />
    </StoreContext>
  );
};

export default App;
