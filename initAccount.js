const Account = require('./models/account')

module.exports = async (req, res, next) => {

    //delete accounts
    await Account.deleteMany({});
    //create test accounts
    let account1 = new Account({
        firstName: 'Saralyn',
        lastName: 'Leonard',
        email: 'saralynl@bu.edu',
        isAdmin: true
    })

    let account2 = new Account({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        isAdmin: false
    })

    let account3 = new Account({
        firstName: 'Jane',
        lastName: 'Smith', 
        email: 'jane@smith.com',
        isAdmin: false
    })

    await Promise.all([
        account1.save(), 
        account2.save(), 
        account3.save()
    ])

    let currentAccounts = await Account.find({});
    console.log(currentAccounts)

}