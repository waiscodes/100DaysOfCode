using System;

namespace c_grade_translator_assignment_waiscodes
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                Title: C# Grade Translator Assignment
                Purpose: Translate Percentage Grade into Letter Grade
                Author: Birm AWis
                Date of Last Edit: Aug-11-2020
            */
            /*
                Initialize a variable
                Prompt user to enter a value

                Convert string to int

                if (97-100)
                -return A+
                else if (90-96)
                - return A
                else if (85-89)
                -return A-
                else if (80-84)
                B+
                else if (75-79)
                -return B
                else if (70-74)
                -return B-
                else if (65-69)
                -return C+
                else if (60-64)
                -return C
                else if (55-59)
                -return C-
                else if (50-54)
                -return D
                else if (0-49)
                -return F
                else 
                -return not a valid grade, please enter a valid grade with prompt and call previous function. 
            */

            double gradeScore;
            string gradeIs;
            // string gradeIs;
            Console.WriteLine("This application converts a percentage grade to a lettergrade.");
            Console.Write("Please enter your grade percentage 1-100: ");
            gradeScore = Convert.ToDouble(Console.ReadLine());

            // while (userInput.ToLower() != "q")
            // {
            //     bool valid = false;
            //     while (!valid)
            //     {
            //         try 
            //         {
            // Learn more about this method. It's called the sentinal loop and it allows for 
            //         }
            //     }
            // }

            if (gradeScore > 100 || gradeScore < 0)
            {
                gradeIs = "Invalid";
            }

            if (gradeScore >= 97)
            {
                gradeIs = "A+";
            }
            else if (gradeScore >= 90)
            {
                gradeIs = "A";
            }
            else if (gradeScore >= 85)
            {
                gradeIs = "A-";
            }
            else if (gradeScore >= 80)
            {
                gradeIs = "B+";
            }
            else if (gradeScore >= 75)
            {
                gradeIs = "B";
            }
            else if (gradeScore >= 70)
            {
                gradeIs = "B-";
            }
            else if (gradeScore >= 65)
            {
                gradeIs = "C+";
                if (gradeScore == 69)
                {
                    gradeIs = "C+ and NICEEEE";
                }
            }
            else if (gradeScore >= 60)
            {
                gradeIs = "C";
            }
            else if (gradeScore >= 55)
            {
                gradeIs = "C-";
            }
            else if (gradeScore >= 50)
            {
                gradeIs = "D";
            }
            else
            {
                gradeIs = ("Damn you got an F");
            }
            Console.WriteLine(gradeIs);
        }
    }
}
