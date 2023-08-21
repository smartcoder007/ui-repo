package corejava.stream2;

public class Employee {

    private String title;
    private float salary;
    private String name;
    private String department;

    public Employee(String title, float salary, String name, String department) {
        this.title = title;
        this.salary = salary;
        this.name = name;
        this.department = department;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getSalary() {
        return salary;
    }

    public void setSalary(float salary) {
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "title='" + title + '\'' +
                ", salary=" + salary +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                '}';
    }
}
