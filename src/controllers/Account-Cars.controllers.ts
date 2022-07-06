import { Request, Response } from "express";
import { stringify } from "querystring";
import { Data } from "../../Data";

// get all accounts

const accounts = [...Data.Accounts];

const getAccounts = (req: Request, res: Response) => {
  const allAccounts = accounts.map((account) => {
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
  const account = req.body;
  let _id = Math.random() * 100;
  // accounts.push({ ...account, _id: String(_id) });
  console.log(req.body);
  res.send("Account added").status(200);
};

// deleting and upadting an  account

const deleteAccount = (req: Request, res: Response) => {
  const accDel = Data.Accounts.find((account) => account._id === req.params.id);
  if (accDel) {
    Data.Accounts.splice(Data.Accounts.indexOf(accDel), 1);
    res.send("Account deleted").status(200);
  }
};

// updating an account
const updateAccount = (req: Request, res: Response) => {};

export { getAccounts, CreateAccount, deleteAccount, updateAccount };
