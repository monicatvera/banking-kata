# Kata Banking
The objective is to develop a simple application for managing a bank account applying external-in TDD. The kata allows you to practice using acceptance tests to guide design. Applied correctly it will be possible to reach a system that evolves by itself without excessive efforts and without unpleasant surprises at the end. The idea is to use the outside-in TDD approach to develop a simple design without accidentally adding complexity.

Develop the wordWrap function that consists of two parameters: the first, the text, and the second, the column width.

The statement of the kata can be consulted on the website [Kata Log Rocks](https://kata-log.rocks/banking-kata).

## Test list
List of possible tests that we want to do based on their difficulty:
- [x] **{} ⇒ nil**: Transition from no code to returning null.
- [x] **nil ⇒ constant**: Transition from null to returning a literal value.
- [x] **constant ⇒ constant+**: Transition from a simple literal value to a more complex one.
- [x] **constant ⇒ scalar**: Transition from a literal value to a variable.
- [x] **statement ⇒ statements**: Add more lines of code without conditionals.
- [x] **unconditional ⇒ if**: Introduce a conditional statement.
- [x] **scalar ⇒ array**: Transition from a simple variable to a collection.
- [x] **array ⇒ container**: Transition from a collection to a container.
- [x] **statement ⇒ recursion**: Introduce recursion.
- [x] **if ⇒ while**: Convert a conditional statement into a loop.
- [x] **expression ⇒ function**: Replace an expression with a function call.
- [x] **variable ⇒ assignment**: Mutate the value of a variable.