class Calculator:
    # method to add 2 numbers
    def addition(self,a,b):
        return a+b
    # method to subtract 2 numbers
    def subtraction(self,a,b):
        return a-b
    # method to multiple 2 numbers
    def multiplication(self,a,b):
        return a*b
    # method to divide 2 numbers
    def division(self,a,b):
        try:
            return a/b
        except ZeroDivisionError:
            return "Error: Division by zero is not allowed."
a=int(input("Enter the first number: "))
b=int(input("Enter the second number: "))
# object creation for class Calculator
c=Calulator()
print(f"Addition ({a}+{b}):",c.addition(a,b))
print(f"Subtraction ({a}+{b}):",c.subtraction(a,b))
print(f"Multiplication ({a}*{b}):",c.multiplication(a,b))
print(f"Division ({a}/{b}):",c.division(a,b))
print(f"Division ({a}/{b}):",c.division(a,0))