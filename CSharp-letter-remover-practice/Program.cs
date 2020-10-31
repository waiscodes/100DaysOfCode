using System;

namespace c_letter_remover_practice_waiscodes
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                Title: 
                Purpose: 
                Author: Birm Wais
                Date of last edit: Aug 12 2020
            */

            string phrase;
            char letter;
            //initiatlizing variables

            Console.WriteLine("This application removes characters from phrases.");
            Console.WriteLine("Please enter a phrase. Creativity issues? What your favourite Superhero's catch phrase?");
            phrase = Console.ReadLine();
            //prompt user for phrase

            Console.Write("Now please enter a character you'd like to be removed: ");
            letter = Convert.ToChar(Console.ReadLine());
            //prompt user for character


            for (int i = 0; i < phrase.Length; i++)
            {
                if (!phrase[i].Equals(letter))
                {
                    Console.Write(phrase[i]); //Thanks to Aaron C with help in this section. I was stuck here trying to use different methods of deleting. And he recommended concatenation and left me to figure out the rest. 
                }
            }
            Console.WriteLine();//this is necessary to add a line break to the end of the string. 
        }
    }
}
