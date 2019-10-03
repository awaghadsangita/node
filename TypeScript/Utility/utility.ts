import * as readline from 'readline-sync';
export function  getString():string{
        return readline.question();
    }
export function getNumber():number{
    return readline.questionInt();
}
