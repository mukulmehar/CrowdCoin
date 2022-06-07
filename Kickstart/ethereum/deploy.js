const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'banner hurt goddess chase trick donate option neglect piano narrow song lab',
    'https://rinkeby.infura.io/v3/8dbc321e9aa14aee9312239e4a3aa860'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
  try {
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: '0x' + compiledFactory.bytecode})
      .send({ gas: '1000000', from: accounts[0] });
      console.log('Contract deployed to', result.options.address);
      provider.engine.stop();
  } catch(error) {
    console.log(error);
    console.log("Here is the error");
    // provider.engine.stop();
  }
};
deploy();
