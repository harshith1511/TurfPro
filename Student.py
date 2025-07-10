class Student:
    #  private variables of the class are declared using __ in start
    def __init__(self):
        self.__name = ""
        self.__marks = 0

    # setter methods to access the private variables
    def set_name(self,name):
        self.__name = name
    def set_marks(self,marks):
        if 0<marks<=100:
            self.__marks = marks
            return 0
        else:
            return "Error: marks should be between 0 and 100"

    # getter methods to access the private variables
    def get_name(self):
        return self.__name
    def get_marks(self):
        return self.__marks

s1=Student()
s1.set_name("Alice")
print("Student Name:",s1.get_name())
s1.set_marks(85)
print("Student Marks:",s1.get_marks())

# setting marks with an invalid inputs
print(s1.set_marks(105))
print("Student Marks (after Invalid input): ",s1.get_marks())
