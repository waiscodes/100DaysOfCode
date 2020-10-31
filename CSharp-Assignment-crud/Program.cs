using System;

namespace c_assignment_crud_waiscodes
{
    class Program
    {
        static void Main(string[] args)
        {
            /* 
                Title: CRUD Assignment
                Purpose: 
                Author: Birm Wais
                Date of Last Edit: Aug 15 2020
            */
            /*----------------
            INITIALIZE ARRAY
            -----------------*/
            int[] userArr = new int[10];
            string userInput = "";

            /*-----------------
            POPULATE ARRAY
            -----------------*/
            for (int i = 0; i < userArr.Length; i++)
            {
                try
                {
                    Console.Write("Please enter a number between 1-100. Or enter \"quit\" to quit or \"done\" to finish: ");
                    userInput = Console.ReadLine();
                    userArr[i] = Convert.ToInt32(userInput);
                }
                catch (Exception m) //Citation 1.
                {
                    if (userInput == "quit")
                    {
                        Console.WriteLine("Thank you come again");
                        break;
                    }
                    else if (userInput == "done")
                    {
                        //RETURN
                        for (int j = 0; j < userInput.Length; j++)
                        {
                            if (userArr[j] != 0)
                            {
                                Console.WriteLine((j + 1) + ". " + userArr[j]);
                            }
                        }
                        return; //Citation 2
                    }
                    else
                    {
                        Console.WriteLine(m.Message + " Please try again");
                    }
                }
            }


            /*-----------------
            RETURN FINAL VALUE
            -----------------*/
            for (int j = 0; j < userArr.Length; j++)
            {
                if (userArr[j] != 0)
                {
                    Console.WriteLine((j + 1) + ". " + userArr[j]);
                }
            }
            /*
            #Citations

            1. Exception message
            Source: Exception Handling | C# | Tutorial 24 by Mike Dane
            Link: https://youtu.be/ZJRg8nrNeeA
            Understanding: That function allows you to see what went wrong. And putting that inside a Console.WriteLine tells the user what went wrong. 

            2. Exiting a try catch block without break;
            Source: Exit Try/Catch to prevent code after from being run on Stack overflow
            Link: https://stackoverflow.com/questions/2747915/exit-try-catch-to-prevent-code-after-from-being-run
            Understanding: I used it to solve my bug which was; My break statement wouldn't work. When I put break inside the forloop, it would only print once. I tried to put a break outside the forloop inside the if else statement but it gave me an error. I put a break statement outside the if else but inside the try block and while the problem of my code running after the "done" statement was solved, me else statement stopped working. I forgot about the return statement, and I had to research to find it. And it works for if else statements. 

            3. General
            Understanding: I spent the past few days doing tutorials from YouTube, SoloLearn app, and on my own to understand arrays because I felt a bit lost in class. Most of my knoweldge is from there. Code wasn't coppied, I did all the tutorials before beginning on the project. 

            */
        }
    }
}
