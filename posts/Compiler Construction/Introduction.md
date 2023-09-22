---
title: "Introduction"
subtitle: "Create an AWS account and set up CLI/SDK access."
date: "2020-12-27"
---

# Language Processors

A computer understands instructions in machine code, i.e. in the form of 0s and 1s. It is a tedious task to write a computer program directly in machine code. The programs are written mostly in high-level languages like Java, C++, Python etc. and are called source code. These source code cannot be executed directly by the computer and must be converted into machine language to be executed. Hence, a special translator system software is used to translate the program written in a high-level language into machine code is called Language Processor and the program after translated into machine code (object program/object code).

&nbsp;

## Types of Language Processors -

1.  Compiler - A compiler is a program that can read a program in one language the source language and translate it into an equivalent program in another language the target language. Compiler also reports any errors in the source program that it detects during the translation process. If the target program is an executable machine-language program, it can then be called by the user to process inputs and produce outputs.
    
2.  Assembler - The compiler may produce an assembly-language program as its output, because assembly language is easier to produce as output and is easier to debug. The assembly language is then processed by a program called an assembler that produces relocatable machine code as its output. Code written in assembly language is some sort of mnemonics(instructions) like ADD, MUL, MUX, SUB, DIV, MOV and so on. and the assembler is basically able to convert these mnemonics in Binary code. Here, these mnemonics also depend upon the architecture of the machine. For example, the architecture of intel 8085 and intel 8086 are different.
    
3.  Interpreter - Interpreter directly execute the operations specified in the source program on inputs supplied by the user. The machine-language target program produced by a compiler is usually much faster than an interpreter at mapping inputs to outputs. An interpreter, however, can usually give better error diagnostics than a compiler, because it executes the source program statement by statement. If there is an error in the statement, the interpreter terminates its translating process at that statement and displays an error message. The interpreter moves on to the next line for execution only after the removal of the error. Example - Perl, Python.


## Compiler vs Interpreter

| Compiler | Interpreter |
| --- | --- |
| The code execution time is comparatively less because the program code already gets translated into machine code. | They are fairly easy to use and execute, even for a beginner. |
| One can’t change a program without getting back to the source code. | Only computers with the corresponding Interpreter can run the interpreted programs. |
| It stores the machine language on the disk in the form of machine code. | It doesn’t save the machine language at all. |
| The compiled codes run comparatively faster. | The interpreted codes run comparatively slower. |
| It works on the basis of the language-translation linking-loading model | It works on the basis of the Interpretation method. |
| It generates an output program in the exe format. A user can run it independently from the originally intended program. | It doesn’t generate an output program. Meaning, it evaluates the source program every time during individual execution. |
| One can separate the program execution from the compilation. Thus, you can perform it only after completing the compilation of the entire output. | Execution of the program is one of the steps of the Interpretation process. So, you can perform it line by line. |
| Target programs execute independently. They don’t require the Compiler in the memory. | Interpreter originally exists in the memory at the time of interpretation. |
| You cannot port the Compiler because it stays bound to the specific target machine. The compilation model is very common in programming languages like C and C++. | They work the best in web environments- where the load time is very crucial. Compiling takes a relatively long time, even with small codes that may not run multiple times due to the exhaustive analysis. Interpretations are better in such cases. |
| A compiler is capable of seeing the entire code upfront. Thus, it makes the codes run faster by performing plenty of optimizations. | An interpreter sees a code line by line. The optimization is, thus, not very robust when compared to Compilers. |
| Compilers are very difficult to implement because they can’t predict anything that happens during the turn time | The Interpreted language supports Dynamic Typing. |
| It works best for the Production Environment. | It works the best for the programming and development environment. |
| A Compiler displays every error and warning while compiling. So, you can’t run this program unless you fix the errors. | An Interpreter reads every statement, then displays the errors, if any. A user must resolve these errors in order to interpret the next line. |
| A Compiler takes a program as a whole. | An Interpreter takes single lines of a code. |
| The Compilers generate intermediate machine codes. | The Interpreters never generate any intermediate machine codes. |
| This translator displays all the errors after compiling- together at the same time. | It displays the errors of every single line one by one. |
| Java, Scala, C#, C, C++ use Compilers. | Perl, Ruby, PHP use Interpreters. |


## Preprocessor 

A source program may be divided into modules stored in separate files. The task of collecting the source program is sometimes entrusted to a separate program, called a preprocessor. The preprocessor may also expand shorthand, called macros, into source language statements. It takes source code as input and produces modified source code as output. The preprocessor is also known as a macro evaluator, the processing is optional that is if any language that does not support #include macros processing is not required.

## Linker and Loader 

Linker - Large programs are often compiled in pieces, so the relocatable machine code may have to be linked together with other relocatable object files and library files into the code that actually runs on the machine. The linker resolves external memory addresses, where the code in one file may refer to a location in another file. 

Loader - The loader then puts together all of the executable object files into memory for execution. 

| LINKER	 | LOADER| 
| --- | --- |
The main function of Linker is to generate executable files.|	Whereas main objective of Loader is to load executable files to main memory.
The linker takes input of object code generated by compiler/assembler.|And the loader takes input of executable files generated by linker.
Linking can be defined as process of combining various pieces of codes and source code to obtain executable code.	| Loading can be defined as process of loading executable codes to main memory for further execution.
Linkers are of 2 types: Linkage Editor and Dynamic Linker.	| Loaders are of 4 types: Absolute, Relocating, Direct Linking, Bootstrap.
Another use of linker is to combine all object modules. |	It helps in allocating the address to executable codes/files.
Linker is also responsible for arranging objects in program’s address space. | Loader is also responsible for adjusting references which are used within the program.


## Advantages: Interpreter over Compiler 
- The debugging of an interpreted program is comparatively easy, as a single line of code is translated and executed at a time. 
- Errors are reported by the Interpreter for a single line of code at a time, as the translation and execution happen simultaneously. 
- Interpreters are memory efficient as no temporary storage of the translated code takes place unlike as in a compiler where the Object code is temporarily stored on the disk. 
- The Interpreter analyzes one line at a time and thus needs less time to analyze the source program, however; the Compiler analyzes the complete program in one go and thus needs more time for analyzing. 

## Advantages: Compiler over Interpreter 
- As compilers analyze the program before compiling it, this ensures all errors are identified and corrected before the compiled code is generated. 
- An intermediate code is also known as the Object code generated which can then be used each time the program is to be run, thus eliminating the need for compiling the source program each time. 
Compiling a program is usually faster than interpreting it.

&nbsp;

# Phases of Compiler

Compiler operates in various phases each phase transforms the source program from one representation to another. Every phase takes inputs from its previous stage and feeds its output to the next phase of the compiler. There are 6 phases in a compiler. Each of this phase help in converting the high-level langue the machine code. The phases of a compiler are: 

## Lexical Analysis 

Lexical Analysis is the first phase when compiler scans the source code. This process can be left to right, character by character, and group these characters into tokens. Here, the character stream from the source program is grouped in meaningful sequences by identifying the tokens. It makes the entry of the 
corresponding tickets into the symbol table and passes that token to next phase. 

The primary functions of this phase are: 
- Identify the lexical units in a source code 
- Classify lexical units into classes like constants, reserved words, and enter them in different tables. It will Ignore comments in the source program 
- Identify token which is not a part of the language 

**Example:** 
x = y + 10 

| X | Tokens |
| --- | --- |
| X  |	identifier |
| =  |	Assignment operator |
| Y 	| identifier |
| + 	| Addition operator | 
| 10 	| Number |


## Syntax Analysis 

Syntax analysis is all about discovering structure in code. It determines whether or not a text follows the expected format. The main aim of this phase is to make sure that the source code was written by the programmer is correct or not. Syntax analysis is based on the rules based on the specific programming language by constructing the parse tree with the help of tokens. It also determines the structure of source language and grammar or syntax of the language. 

Here, is a list of tasks performed in this phase: 
-  Obtain tokens from the lexical analyzer 
- Checks if the expression is syntactically correct or not 
- Report all syntax errors 
- Construct a hierarchical structure which is known as a parse tree 


Example 
(a+b)*c 

![image](https://github.com/imshivam-gupta/Algortihmic-Resources/assets/93479496/13dc2eb8-c053-42f1-8c1e-e63dee0589f9)



## Semantic Analysis 

Semantic analysis checks the semantic consistency of the code. It uses the syntax tree of the previous phase along with the symbol table to verify that the given source code is semantically consistent. It also checks whether the code is conveying an appropriate meaning. Semantic Analyzer will check for Type mismatches, incompatible operands, a function called with improper arguments, an undeclared variable, etc. 

Functions of Semantic analyses phase are: 
• Helps you to store type information gathered and save it in symbol table or syntax tree 
• Allows you to perform type checking 
• In the case of type mismatch, where there are no exact type correction rules which satisfy the desired operation a semantic error is shown 
• Collects type information and checks for type compatibility 
• Checks if the source language permits the operands or not 
 
Example 
- float x = 20.2; 
- float y = x*30; 
- In the above code, the semantic analyzer will typecast the integer 30 to float 30.0 before multiplication 

## Intermediate Code Generation 
Once the semantic analysis phase is over the compiler, generates intermediate code for the target machine. It represents a program for some abstract machine. Intermediate code is between the high-level and machine level language. This intermediate code needs to be generated in such a manner that makes it easy to translate it into the target machine code. 

Functions on Intermediate Code generation: 
• It should be generated from the semantic representation of the source program 
• Holds the values computed during the process of translation 
• Helps you to translate the intermediate code into target language 
• Allows you to maintain precedence ordering of the source language 
• It holds the correct number of operands of the instruction 

Example 
For example, total = count + rate * 5 
Intermediate code with the help of address code method is: 
- t1 := int_to_float(5)  
- t2 := rate * t1  
- t3 := count + t2 
- total := t3 
 

## Code Optimization 
The next phase of is code optimization or Intermediate code. This phase removes unnecessary code line and arranges the sequence of statements to speed up the execution of the program without wasting resources. The main goal of this phase is to improve on the intermediate code to generate a code that runs faster and occupies less space. 

The primary functions of this phase are: 
- It helps you to establish a trade-off between execution and compilation speed
- Improves the running time of the target program
- Generates streamlined code still in intermediate representation
- Removing unreachable code and getting rid of unused variables
- Removing statements which are not altered from the loop 
 
Example: 
Consider the following code 
- a = intofloat(10) 
- b = c * a 
- d = e + b 
- f = d 
 
Can become 
- b =c * 10.0 
- f = e+b 

 
## Code Generation 
Code generation is the last and final phase of a compiler. It gets inputs from code optimization phases and produces the page code or object code as a result. The objective of this phase is to allocate storage and generate relocatable machine code. It also allocates memory locations for the variable. The instructions in the intermediate code are converted into machine instructions. This phase coverts the optimize or intermediate code into the target language. The target language is the machine code. Therefore, all the memory locations and registers are also selected and allotted during this phase. The code generated by this phase is executed to take inputs and generate expected outputs. 

Example: 
- a = b + 60.0 
- Would be possibly translated to registers. 
- MOVF a, R1 
- MULF #60.0, R2 
- ADDF R1, R2 


![image](https://github.com/imshivam-gupta/Algortihmic-Resources/assets/93479496/df882025-bd2a-49c7-9107-1cbbb36f60e8)


&nbsp;


# Symbol Table 



&nbsp;

# Compiler Construction Tools

These tools use specialized languages for specifying and implementing specific components, and many use quite sophisticated algorithms. The most successful tools are those that hide the details of the generation algorithm and produce components that can be easily integrated into the remainder of the compiler. 

Some commonly used compiler-construction tools include -  
- Parser generators that automatically produce syntax analyzers from a grammatical description of a programming language.
- Scanner generators that produce lexical analyzers from a regular-expression description of the tokens of a language.
- Syntax-directed translation engines that produce collections of routines for walking a parse tree and generating intermediate code. Code-generator generators that produce a code generator from a collection of rules for translating each operation of the intermediate language into the machine language for a target machine.
- Data-flow analysis engines that facilitate the gathering of information about how values are transmitted from one part of a program to each other part. Data-flow analysis is a key part of code optimization.
- Compiler-construction toolkits that provide an integrated set of routines for constructing various phases of a compiler. 

&nbsp;

# Applications of Compiler Technology

### Implementation of High-level Programming  
A high-level programming language defines a programming abstraction: the programmer specifies an algorithm in the language, and the compiler must translate it to the target language. Higher-level programming languages are sometimes easier to develop in, but they are inefficient, therefore the target applications run slower. Low-level language programmers have more control over their computations and, in principle, can design more efficient code. Lower-level programs, on the other hand, are more difficult to build and much more difficult to maintain. They are less portable, more prone to errors, and more complex to manage. Optimized compilers employ ways to improve the performance of generated code, compensating for the inefficiency of high-level abstractions.  In actuality, programs that utilize the register keyword may lose efficiency since programmers aren’t always the best judges of extremely low-level matters like register allocation. The ideal register allocation approach is very reliant on the design of the machine. Hardwiring low-level resource management decisions like register allocation may actually harm performance, especially if the application is executed on machines that aren’t meant for it 

### Optimization of computer architectures  
Aside from the rapid evolution of computer architectures, there is a never-ending demand for new compiler technology. Almost all high-performance computers leverage parallelism and memory hierarchies as essential methods. Parallelism may be found at two levels: at the instruction level, where many operations are performed at the same time, and at the processor level, where distinct threads of the same program are executed on different processors. Memory hierarchies address the fundamental problem of being able to produce either extremely fast storage or extremely huge storage, but not both. 

### Design of new computer architectures  
Because high-level programming is the norm, the performance of a computer system is determined not just by its sheer speed, but also by how well compilers can use its capabilities.  Compilers are created at the processor-design stage of contemporary computer architecture development, and the resultant code is used to evaluate the proposed architectural features using simulators.

### Program Translations:  
The compilation is typically thought of as a translation from a high-level language to the machine level, but the same approach may be used to translate across several languages. The following are some of the most common applications of software translation technologies. 
• Compiled Simulation 
• Binary translation 
• Hardware Syntheses 
• Database Query Interpreters 

### Software productivity tools  
Programs are possibly the most complex technical objects ever created; they are made up of a plethora of little elements, each of which must be accurate before the program can function properly. As a result, software mistakes are common; errors can cause a system to crash, generate incorrect results, expose a system to security threats, or even cause catastrophic failures in key systems. Testing is the most common method for discovering program flaws. 

&nbsp;

# Errors in Compilers


&nbsp;

# Bootstrapping

Bootstrapping is a self-compiling compiler, written in its source language, ensuring self-sufficiency and language evolution. A self-compiling compiler is written in a source programming language that it determines to compile. In simple terms, a self-compiling compiler compiles its source code. This compiled compiler can compile everything else and its future versions as well.

Representation of Compiler in Bootstrapping
In Bootstrapping, a compiler is represented by three languages:
- Source Language (S) is the language that the compiler compiles.
- Implementation Language (I) is the language that the compiler is written in. 
- Target Language (T) is the language generated by the compiler.

[Link](https://www.javatpoint.com/bootstrapping)