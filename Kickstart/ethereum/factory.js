import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0Ef8FDAe68d0f01D4c4d51844127eeB37824e0be'
);

export default instance;