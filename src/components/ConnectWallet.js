import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from "wagmi/chains";
import SignIn from './sections/Signin';
import User from './sections/User';
import {ethers} from 'ethers';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';


var requestMessage = function() {
    // ...
  };

  var verifyMessage = function() {
    // ...
  };

  var renderUser = function() {
    // ...
  };



const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

    const [accounts, chainId] = await Promise.all([
        provider.send('eth_requestAccounts', []),
        provider.send('eth_chainId', []),
    ]);

    const signer = provider.getSigner();
    return { signer, chain: chainId, account: accounts[0] };
};

const handleAuth = async () => {
    // Connect to Metamask
    const { signer, chain, account } = await connectToMetamask();

    if (!account) {
        throw new Error('No account found');
    }
    if (!chain) {
        throw new Error('No chain found');
    }

    const { message } = await requestMessage(account, chain);

    const signature = await signer.signMessage(message);

    const { user } = await verifyMessage(message, signature);

    renderUser(user);
};

const { provider, webSocketProvider } = configureChains([mainnet], [
    publicProvider(),
  ]);
  
  const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
  });
  
  const router = createBrowserRouter([
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/user',
      element: <User />,
    },
  ]);
  
  function Conectwallet() {
    const button = (
      <button onClick={handleAuth}>
        Authenticate with Metamask
      </button>
    );
    return (
      <WagmiConfig client={client}>
        <RouterProvider router={router}>
          {button}
        </RouterProvider>
      </WagmiConfig>
    );
  }

  export default Conectwallet
