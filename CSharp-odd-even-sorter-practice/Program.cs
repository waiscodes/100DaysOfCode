using System;

namespace c_odd_even_sorter_practice_waiscodes
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                Title: Odd Even Sorter
                Purpose: To sort odd and even numbers from an array
                Author: Birm Wais
                Last Modified: Aug 16 2020
            */
            PopulateArray();

        }

        static void PopulateArray()
        {
            //Initialize Arrays
            int[] mainArr = new int[10];
            string userInput = "";
            // int userInt = -1;

            //Explain the Application
            Console.WriteLine("Hello, this application sorts numbers from 1-10, evens coming first and odds second.");

            //Populate the main array
            for (int i = 0; i < mainArr.Length; i++)
            {
                try
                {
                    Console.Write("Enter a num 1-10: ");
                    userInput = Console.ReadLine();
                    mainArr[i] = int.Parse(userInput);
                }
                catch (Exception m)
                {
                    if (userInput == "done")
                    {
                        PrintArray(mainArr);
                        return;
                    }
                    else
                    {
                        Console.WriteLine(m.Message + ". Please try again.");
                        i--;
                    }
                }
            }
            OddEvenSort(mainArr);
        }
        static void OddEvenSort(int[] Arr)
        {
            int[] evenArr = new int[10];
            int[] oddArr = new int[10];

            for (int i = 0; i < evenArr.Length; i++)
            {
                if ((Arr[i] % 2) == 0 && Arr[i] != 0)
                {
                    evenArr[i] = Arr[i];
                }
                else if (Arr[i] != 0)
                {
                    oddArr[i] = Arr[i];
                }
            }
            Array.Sort(evenArr);
            Array.Sort(oddArr);
            PrintArray(evenArr);
            PrintArray(oddArr);
        }
        static void PrintArray(int[] Arr)
        {

            for (int i = 0; i < 10; i++)
            {
                if (Arr[i] != 0)
                {
                    Console.WriteLine(Arr[i]);
                }
            }
        }
    }
}