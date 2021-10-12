import { FizzBuzzKata } from "../main/fizzBuzzKata";

describe('fizz buzz test', () => {
    it.each`
    input | output
    ${1} |${"1"}
    ${2} |${"2"}
    ${3} |${"fizz"}
    `(
        "should output $output when input is $input",
        ({ input, output}) => {

            let fizzBuzzKata: FizzBuzzKata = new FizzBuzzKata();
            expect(fizzBuzzKata.FizzBuzz(input)).toBe(output);
        }
    );
})