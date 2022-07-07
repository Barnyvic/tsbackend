import { Request, Response } from "express";
import { stringify } from "querystring";
import { Data } from "../../Data";

// get all accounts
const getAccounts = (req: Request, res: Response) => {
  const allAccounts = Data.Accounts.map((account) => {
    return {
      Id: account._id,
      Name: account.name.first.concat(" ", account.name.last),
      firstName: account.name.first,
      lastName: account.name.last,
      Email: account.email,
      Phone: account.phone,
      Address: account.address,
    };
  });
  res.send(allAccounts).status(200);
};

// creating a new account

const CreateAccount = (req: Request, res: Response) => {
  const newAccount = {
    _id: Data.Accounts.length + 1,
    name: { first: req.body, last: req.body },
    email: req.body,
    phone: req.body,
    address: req.body,
  };
  console.log(newAccount);
  Data.Accounts.push(newAccount);
  res.send("Account created").status(200);
};

// deleting and upadting an  account

const deleteAccount = (req: Request, res: Response) => {
  const accDel = Data.Accounts.find(
    (account) => account._id === Number(req.params.id)
  );
  if (accDel) {
    Data.Accounts.splice(Data.Accounts.indexOf(accDel), 1);
    res.send("Account deleted").status(200);
  }
};

// updating an account
const updateAccount = (req: Request, res: Response) => {
  const updateAcc = Data.Accounts.find(
    (account) => account._id === Number(req.params.id)
  );
  {
    if (updateAcc) {
      updateAcc.name.first = req.body.name.first;
      updateAcc.name.last = req.body.name.last;
      updateAcc.email = req.body.email;
      updateAcc.phone = req.body.phone;
      updateAcc.address = req.body.address;
      res.send("Account updated").status(200);
    }
  }
};

export { getAccounts, CreateAccount, deleteAccount, updateAccount };
