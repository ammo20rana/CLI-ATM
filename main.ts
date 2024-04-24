import inquirer from "inquirer"

let mybalance = 10000; //dollar
let mypin = 1234;

let pinanswer = await inquirer.prompt(
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
);

if(pinanswer.pin === mypin) {
    console.log("correct pin code!!!");

    let operationans = await inquirer.prompt(
        [
            {
                name:"operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","check balance"],
            }
        ]
    )

    console.log(operationans);
    if(operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        )
        mybalance -= amountans.amount;

        console.log("your remainning balance is:" + mybalance);

    }else if (operationans.operation === "check balance"){

        console.log("your balance is:" + mybalance)
    }
}


else{
    console.log("incorrect pin code!!!");
}

