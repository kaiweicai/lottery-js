import { Route, Routes } from 'react-router-dom';

import CoinbaseWalletCard from 'components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from 'components/connectorCards/GnosisSafeCard'
import MetaMaskCard from 'components/connectorCards/MetaMaskCard'
import NetworkCard from 'components/connectorCards/NetworkCard'
import WalletConnectCard from 'components/connectorCards/WalletConnectCard'
import ProviderExample from 'components/ProviderExample'

import { Home } from "./home";

const routes = [{ path: '/', Page: Home }];

function Routing() {
    // const { account } = useAccount();

    const getRoutes = () =>
        routes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
        ));

    return <Routes>{getRoutes()}</Routes>;
}

function WalletConnectSelector(){
    return (
        <>
          <ProviderExample />
          <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
            <MetaMaskCard />
            <WalletConnectCard />
            <CoinbaseWalletCard />
            <NetworkCard />
            <GnosisSafeCard />
          </div>
        </>
      )
}

export { Routing,WalletConnectSelector };