using System;

namespace HelloWorldEB
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            while (Console.ReadKey().Key != ConsoleKey.Enter) { };
        }
    }
}
