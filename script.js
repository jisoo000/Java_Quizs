const form = document.getElementById('quiz-form');
form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form);
    const answers = [];
    for (let entry of data.entries()) {
        answers.push(entry[1]);
    }
    checkAnswers(answers);
}
);

function checkAnswers(answers) {
    const correctAnswers = ['public Car(String model, String color) {\n      this.model = model;\n      this.color = color;\n   }', 'public Truck(String model, String color, int loadCapacity) {\n      super(model, color);\n      this.loadCapacity = loadCapacity;\n   }', 'public abstract class Animal {\n   private String name;\n\n   public Animal(String name) {\n      this.name = name;\n   }\n\n   public abstract void makeSound();\n}', 'public class Dog extends Animal {\n   public Dog(String name) {\n      super(name);\n   }\n\n   @Override\n   public void makeSound() {\n      System.out.println("Woof");\n   }\n}', 'public interface Printable {\n   void print();\n}', 'public class Printer implements Printable {\n   private String text;\n\n   public Printer(String text) {\n      this.text = text;\n   }\n\n   @Override\n   public void print() {\n      System.out.println(text);\n   }\n}', 'public class Employee {\n   private String name;\n   private int salary;\n\n   public Employee(String name, int salary) {\n      this.name = name;\n      this.salary = salary;\n   }\n\n   // getters and setters\n   public String getName() {\n      return name;\n   }\n\n   public void setName(String name) {\n      this.name = name;\n   }\n\n   public int getSalary() {\n      return salary;\n   }\n\n   public void setSalary(int salary) {\n      this.salary = salary;\n   }\n}', 'public class Company {\n   private ArrayList<Employee> employees;\n\n   public Company() {\n      employees = new ArrayList<>();\n   }\n\n   public void addEmployee(Employee employee) {\n      employees.add(employee);\n   }\n\n   // getters and setters\n   public ArrayList<Employee> getEmployees() {\n      return employees;\n   }\n\n   public void setEmployees(ArrayList<Employee> employees) {\n      this.employees = employees;\n   }\n}', 'public class Logger {\n   private static Logger instance;\n\n   private Logger() {}\n\n   public static Logger getInstance() {\n      if (instance == null) {\n         instance = new Logger();\n      }\n      return instance;\n   }\n\n   public void log(String message) {\n      System.out.println(message);\n   }\n}', 'Employee employee1 = new Employee("John", 50000);\nCompany company = new Company();\ncompany.addEmployee(employee1);'];
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            score++;
        }
    }
    const results = document.getElementById('results');
    results.innerHTML = `<h2>결과: ${score} / ${answers.length}</h2>`;

}
