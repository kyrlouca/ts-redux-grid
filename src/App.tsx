import React from 'react';
import StoreContext from './store/store-context';
import Square from './components/Square';
const XA = ({ val }: { val: string }) => <div>{val}</div>;

const App: React.FC = () => {
  return (
    <StoreContext>
      <>
        <XA val="makas tsaksa" />
        <Square />
      </>
    </StoreContext>
  );
};

export default App;
