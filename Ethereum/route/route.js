var EthereumController = require('../controllers/ethereum');

module.exports = function (app) {
    //account related
    app.get('/api/get_address_balance/:address', EthereumController.getBalance);
    app.post('/api/create_account', EthereumController.createAccount);

    app.post('/api/make_transaction', EthereumController.sendTransaction);
    app.post('/api/get_updated_transaction', EthereumController.getUpdatedTransactions);

    //api for block explorer
    app.get('/api/v1/blocks', EthereumController.getBlocks);
    app.get('/api/v1/transactions', EthereumController.getTransactions);

    app.post('/api/v1/blocks', EthereumController.blocklist);
    app.post('/api/v1/blocks/latest', EthereumController.latestblocks);
    app.post('/api/v1/block', EthereumController.getblockdetail);
    app.post('/api/v1/block/txs', EthereumController.postTransactions);
    app.post('/api/v1/account/txs', EthereumController.getTransactionsFromAccount);
    app.post('/api/v1/account/txcount', EthereumController.getTransactionCountFromAccount);
    app.post('/api/v1/tx', EthereumController.getTransactionInfo);

    //api for token related
    app.get('/api/v1/token/list', EthereumController.getTokenList);
    app.post('/api/v1/token/add', EthereumController.addToken);
    app.post('/api/v1/token/remove', EthereumController.removeToken);
}